import { NavLink } from "react-router"

export const Menu = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        about
      </NavLink>
    </nav>
  )
}