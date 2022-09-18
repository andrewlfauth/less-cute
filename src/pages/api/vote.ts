import Votes from "../../models/Votes"

export async function post({request}) {
  let {winner} = await request.json()

  // await Votes.create({
  //   totalVotes: 0,
  //   candidates: {
  //     'Dachshund_rabbit.jpg': 0,
  //     'Daschund-2.jpg': 0,
  //     'Daschund_Wirehair.jpg': 0,
  //     'Dash_Dachshund_With_Hat.jpg': 0,
  //     'Miniature_Daschund.jpg': 0,
  //     'Standard_Wire-hair_Dachshund.jpg': 0,
  //     'Stretched_Dachshund.jpg': 0,
  //     'dachshund-1018409_640.jpg': 0,
  //     'dachshund-123503_640.jpg': 0,
  //     'dachshund-1920_640.jpg': 0,
  //     'dachshund-2033796_640.jpg': 0,
  //     'dachshund-3.jpg': 0,
  //     'dachshund-5.jpg': 0,
  //     'dachshund-6.jpg': 0,
  //     'dachshund-7.jpg': 0,
  //     'dachshund-in-jacket.jpg': 0,
  //     'dachshund_4.jpg': 0,
  //     'daschund-1.jpg': 0,
  //     'daschund-shorthair.jpg': 0,
  //     'dog-1018408_640.jpg': 0,
  //     'dog-1083690_640.jpg': 0,
  //     'dog-2643027_640.jpg': 0,
  //     'dog-495122_640.jpg': 0,
  //     'dog-495133_640.jpg': 0,
  //     'dog-55140_640.jpg': 0,
  //     'foxhound-53951_640.jpg': 0,
  //     'harry-646905_640.jpg': 0,
  //     'kaninchen-dachshund-953699_640.jpg': 0,
  //     'puppy-1006024_640.jpg': 0,
  //     'tina.jpg': 0
  //   }
  // })

  let status: any = await Votes.findOne({})
  status.totalVotes++
  status.candidates[winner]++
  let updated = await Votes.findOneAndUpdate({}, status)

  return new Response(JSON.stringify({done: true}))
}