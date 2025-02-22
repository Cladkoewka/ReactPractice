import "./App.css"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text Inside Wrapper</h2>
        <button>Button</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another text</h2>
        <p>some description</p>
        <input type=""></input>
      </Wrapper>
    </div>
  )
}

export default App
