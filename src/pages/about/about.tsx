import { useSelector } from "react-redux"
import { Form, useLoaderData } from "react-router"
 
export const About = () => {
  const { message } = useLoaderData() 
  const homeValue = useSelector((state: any) => state.home.value)

  return (
    <>
      <h1>About</h1>
      <div>message: { message }</div>
      <div>value: { homeValue }</div>

      <Form action="/projects/123" method="post">
        <input type="text" name="title" />
        <button type="submit">submit</button>
      </Form>
    </>
  )
}