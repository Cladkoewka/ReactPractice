import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Contacts from "./components/Contacts"
import NotFound from "./components/NotFound"
import About from "./components/About"
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
