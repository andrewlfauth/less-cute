import { useEffect } from 'preact/hooks'

export default function useImageCache() {
  useEffect(() => {
    const imgs = [
      'https://images.dog.ceo/breeds/dachshund/Dachshund_rabbit.jpg',
      'https://images.dog.ceo/breeds/dachshund/Daschund-2.jpg',
      'https://images.dog.ceo/breeds/dachshund/Daschund_Wirehair.jpg',
      'https://images.dog.ceo/breeds/dachshund/Dash_Dachshund_With_Hat.jpg',
      'https://images.dog.ceo/breeds/dachshund/Miniature_Daschund.jpg',
      'https://images.dog.ceo/breeds/dachshund/Standard_Wire-hair_Dachshund.jpg',
      'https://images.dog.ceo/breeds/dachshund/Stretched_Dachshund.jpg',
      'https://images.dog.ceo/breeds/dachshund/dachshund-1018409_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/dachshund-123503_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/dachshund-1920_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/dachshund-2033796_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/dachshund-3.jpg',
      'https://images.dog.ceo/breeds/dachshund/dachshund-5.jpg',
      'https://images.dog.ceo/breeds/dachshund/dachshund-6.jpg',
      'https://images.dog.ceo/breeds/dachshund/dachshund-7.jpg',
      'https://images.dog.ceo/breeds/dachshund/dachshund-in-jacket.jpg',
      'https://images.dog.ceo/breeds/dachshund/dachshund_4.jpg',
      'https://images.dog.ceo/breeds/dachshund/daschund-1.jpg',
      'https://images.dog.ceo/breeds/dachshund/daschund-shorthair.jpg',
      'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/dog-1083690_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/dog-2643027_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/dog-495122_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/dog-495133_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/dog-55140_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/foxhound-53951_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/harry-646905_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/kaninchen-dachshund-953699_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/puppy-1006024_640.jpg',
      'https://images.dog.ceo/breeds/dachshund/tina.jpg',
    ]

    cacheImages(imgs)
  }, [])
}

async function cacheImages(srcArr: string[]) {
  const promises = srcArr.map((src) => {
    return new Promise<void>((res, rej) => {
      const img = new Image()

      img.src = src
      img.onload = () => res()
      img.onerror = () => rej()
    })
  })

  await Promise.all(promises)
}
