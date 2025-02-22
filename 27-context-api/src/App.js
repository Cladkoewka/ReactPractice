import { useState } from "react"
import "./App.css"
import UserContext from "./context/UserContext"
import User from "./components/User"
import ChangeUser from "./components/ChangeUser"

function App() {
  const [user, setUser] = useState("Simon")

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  )
}

export default App
