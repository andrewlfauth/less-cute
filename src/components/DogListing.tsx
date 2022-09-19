import type {FunctionComponent} from 'preact'
import {useState} from 'preact/hooks'
import { getVotingOptions } from '../data/getRandom'

const getImageForDog = (dog: string) => `https://images.dog.ceo/breeds/dachshund/${dog}`

const DogListing: FunctionComponent<{a: string, b: string}> = ({a, b}) => {
  const [loading, setLoading] = useState(false)
  const [current, setcurrent] = useState([a,b])
  const [next, setNext] = useState(getVotingOptions())
  const handleA = async () => {
    setLoading(true)
    let result = {
      winner: current[0],
      loser: current[1],
    }
    setcurrent([next[0], next[1]])
    await fetch('/api/vote', {
      method: "post",
      body: JSON.stringify(result)
    })
    setNext(getVotingOptions())
    setLoading(false)
  }
  const handleB = async () => {
    setLoading(true)
    let result = {
      winner: current[1],
      loser: current[0],
    }
    setcurrent([next[0], next[1]])
    await fetch('/api/vote', {
      method: "post",
      body: JSON.stringify(result)
    })
    setNext(getVotingOptions())
    setLoading(false)
  }

  return (
    <div class="flex flex-col md:flex-row text-gray-100 justify-between items-center">
      <div class="flex flex-col items-center justify-center space-y-4">
        <img class="h-44 rounded-lg" src={getImageForDog(current[0])} alt="dog1" />
        <button 
          onClick={handleA}
          disabled={loading}
          class="bg-slate-800 hover:bg-slate-700 duration-200 px-4 py-2 rounded text-xl"
        >
          This one is
        </button>
      </div>
      <span class="md:mx-10 md:my-0 my-10 text-lg font-semibold">
        vs
      </span>
      <div class="flex flex-col items-center justify-center space-y-4">
        <img class="h-44 rounded-lg" src={getImageForDog(current[1])} alt="dog1" />
        <button
          onClick={handleB}
          disabled={loading}  
          class="bg-slate-800 px-4 py-2 hover:bg-slate-700 duration-200 rounded text-xl"
        >
          This one is
        </button>
      </div>
    </div>
  ) 
}

export default DogListing