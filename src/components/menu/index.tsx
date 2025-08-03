import { NavLink } from "react-router"
import { router } from '@/router'
import style from './index.module.scss'

export const Menu = () => {
  console.log('router', router)

  const menus = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About'
    }
  ]
  return (
    <nav className={style.menu}>
      { menus.map(menu => 
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to={menu.path} 
          end
        >
          { menu.name }
        </NavLink>

      )}
    </nav>
  )
}