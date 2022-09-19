import type {FunctionComponent} from 'preact'

const getImageForDog = (dog: string) => `https://images.dog.ceo/breeds/dachshund/${dog}`


const ResultsTable: FunctionComponent<{
  totalVotes: number, 
  candidates: object
}> = ({totalVotes, candidates}) => {
  const entries = Object.entries(candidates) 
  let results = []

  const getPercentage = (candidate: [
    string, 
    { wins: number; losses: number; }
  ]) => {
    let dog = candidate[0]
    let wins = candidate[1].wins
    let losses = candidate[1].losses
    
    if (wins + losses === 0) {
      return results.push([dog, 0])
    } 
    return results.push([
        dog, 
        ((wins / (wins + losses)) * 100).toFixed(2)
      ])
  }
  entries.forEach(e => getPercentage(e))
  const sorted = results.sort((a, b) => b[1] - a[1])
  
  return (
    <div class="flex justify-between flex-col lg:flex-row">
      <div>
        <h2 class="text-4xl pb-6">Winning Now 🏆</h2>
        <img 
          src={getImageForDog(sorted[0][0])} 
          alt="least cute dog"
          class="max-w-[500px] max-h-[500px] rounded-lg" 
        />
      </div>
      <div>
        <span class="mb-2 block">Total Votes: {totalVotes}</span>
        <div class="grid lg:grid-cols-2 gap-4 mt-4 lg:mt-0 mx-10">
          {sorted.map((k, i) => (
            <div class="flex items-center pl-8 rounded-lg py-2 bg-slate-700 relative">
              <div class="rounded-tl-lg rounded-br-lg absolute top-0 left-0 bg-slate-800 px-2 font-semibold text-lg">
                {i + 1}
              </div>
              <img 
                src={getImageForDog(k[0])} 
                alt="dog"
                class="h-20 rounded-lg hover:scale-[3] duration-300 hover:z-10" 
              />
              <p class="text-2xl ml-2 font-semibold">{k[1]}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResultsTable