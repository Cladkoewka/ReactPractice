import { useState } from "react"
import "./App.css"
import Counter from "./components/Counter"
import Button from "./components/Button"
import ResetButton from "./components/ResetButton"

function App() {
  const [count, setCount] = useState(0)

  const addAmount = (amount) => {
    setCount(count + amount)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <Counter count={count} />
      <div>
        <Button onClick={addAmount} addAmount={1} />
        <Button onClick={addAmount} addAmount={3} />
        <Button onClick={addAmount} addAmount={5} />
        <Button onClick={addAmount} addAmount={10} />
        {/* !!count */}
        {count > 0 && <ResetButton resetCount={resetCount} />}
      </div>
    </div>
  )
}

export default App
