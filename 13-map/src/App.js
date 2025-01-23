import { useState } from "react"
import "./App.css"
import Counter from "./components/Counter"
import Button from "./components/Button"

const amounts = [1, 3, 5, 10, 25, 100]

function App() {
  const [count, setCount] = useState(0)

  const addAmount = (amount) => {
    setCount(count + amount)
  }

  return (
    <div className="App">
      <Counter count={count} />
      <div>
        {amounts.map((amount, index) => (
          <Button onClick={addAmount} addAmount={amount} key={index} />
        ))}
      </div>
    </div>
  )
}

export default App
