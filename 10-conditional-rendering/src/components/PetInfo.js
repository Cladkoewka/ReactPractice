function PetInfo(props) {
  const { animal, age, hasPet } = props

  return hasPet ? (
    <div>
      <p>
        My {animal} is {age} years old
      </p>
    </div>
  ) : (
    <p>I don't have an animal</p>
  )
}

export default PetInfo
