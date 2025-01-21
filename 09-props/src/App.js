import "./App.css"
import PetInfo from "./components/PetInfo"

function App() {
  return (
    <div className="App">
      <PetInfo animal="Dog" age="3" />
      <PetInfo animal="Parrot" age={8} />
    </div>
  )
}

export default App
