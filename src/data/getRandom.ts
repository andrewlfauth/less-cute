import dogs from './dogs'

const MAX_NUM_OF_DOGS = 30 

export const getRandomDog = (excluded?: string,): string => {
  const dogIndex = Math.floor(Math.random() * MAX_NUM_OF_DOGS)
  const dogImgString = dogs[dogIndex]

  if (dogImgString !== excluded) return dogImgString
  return getRandomDog(excluded)
}

export const getVotingOptions = () => {
  const firstDog = getRandomDog()
  const secondDog = getRandomDog(firstDog)

  return [firstDog, secondDog] as const
}