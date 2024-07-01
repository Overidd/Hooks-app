import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
  const { user } = useContext(UserContext)
  console.log(user)
  console.log('HomePage se esta renderizando')
  return (
    <>
      <div>HomePage</div>
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  )
}
