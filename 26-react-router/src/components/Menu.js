import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contacts">Contact</NavLink>
    </nav>
  )
}

export default Menu
