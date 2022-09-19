import Votes from "../../models/Votes"

export async function post({request}) {
  let {winner, loser} = await request.json()

  let status = await Votes.findOne({})

  status.totalVotes++
  status.candidates[winner].wins++
  status.candidates[loser].losses++

  await Votes.findOneAndUpdate({}, status)

  return new Response(JSON.stringify({done: true}))
}