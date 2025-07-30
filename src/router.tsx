import { createBrowserRouter, Outlet } from "react-router";
import { Home } from "./pages/home/home";
import { Menu } from "./components/menu";


const Root = () => {
  return (
    <>
      <Menu></Menu>
      <Outlet></Outlet>
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { 
        path: "about", 
        lazy: async () => {
          const cmodules = await import('./pages/about')
          return {
            Component:cmodules.About,
            loader: cmodules.loader,
            action: cmodules.action
          }
        }
      },
    ]
  },
  // {
  //   path: "auth",
  //   Component: Root,
  //   children: [
  //     { path: "login", Component: Login },
  //     { path: "register", Component: Register },
  //   ],
  // },
]);