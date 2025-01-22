import "./App.css"
import PetInfo from "./components/PetInfo"

function App() {
  return (
    <div className="App">
      <PetInfo animal="Dog" age="3" hasPet />
      <PetInfo animal="Parrot" age={8} hasPet />
      <PetInfo hasPet={false} />
    </div>
  )
}

export default App
