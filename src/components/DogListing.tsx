import {FunctionComponent} from 'preact'

const getImageForDog = (dog: string) => `https://images.dog.ceo/breeds/dachshund/${dog}`

const DogListing: FunctionComponent<{dog: string}> = ({dog}) => {
  return (
    <div>
      <img src={getImageForDog(dog)} alt="dog" />
    </div>
  ) 
}

export default DogListing