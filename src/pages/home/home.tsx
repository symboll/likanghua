import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./slice"

export const Home = () => {
  const dispatch = useDispatch()
  const value = useSelector((state: any) => state.home.value)


  return (
    <>
      <h1>Home</h1>
      <div>value: {value}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>

    </>
  )
}