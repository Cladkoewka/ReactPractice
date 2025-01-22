import { useState } from "react"
import generateRandomNumber from "../utils/generateRandomNumber"

function RandomNumber({ maxNum }) {
  console.log("Render")
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber(maxNum))

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={() => setRandomNumber(generateRandomNumber(maxNum))}>
        Generate new random number
      </button>
    </div>
  )
}

export default RandomNumber
