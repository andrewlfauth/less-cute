import type {FunctionComponent} from 'preact'

const getImageForDog = (dog: string) => `https://images.dog.ceo/breeds/dachshund/${dog}`

const ResultsTable: FunctionComponent<{
    totalVotes: number, 
    results: object
  }> = ({totalVotes, results}) => {
  // let results = {'Dachshund_rabbit.jpg': 12, 'Daschund-2.jpg': 57}
  const entries = Object.entries(results).sort((a, b) => b[1] - a[1])

  console.log(entries)

  return (
    <div class="flex justify-between flex-col lg:flex-row">
      <div>
        <h2 class="text-4xl pb-6">Winning Now</h2>
        <img 
          src={getImageForDog(entries[0][0])} 
          alt="least cute dog"
          class="max-w-[500px] max-h-[500px] rounded-lg" 
        />
      </div>
      <div class="grid grid-cols-2 gap-4 mt-4 lg:mt-0">
        {entries.map((k) => (
          <div class="flex items-center px-4 rounded-lg py-2 bg-slate-700">
            <img 
              src={getImageForDog(k[0])} 
              alt="dog"
              class="h-20 rounded-lg" 
            />
            <p class="text-2xl ml-2 font-semibold">{`${(k[1] / totalVotes).toFixed(2).split("0.").join("")}%`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultsTable