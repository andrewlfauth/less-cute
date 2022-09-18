export async function post({request}) {
  let a
  let res = await fetch("https://dog.ceo/api/breed/dachshund/images", {
    method: 'get'
  })
  let data = await res.json()
  a = data.message
  let b = a.map(i => i.split("/dachshund/")[1])
  console.log(b)
  
  return new Response(JSON.stringify({data: "HELLO"}))
}