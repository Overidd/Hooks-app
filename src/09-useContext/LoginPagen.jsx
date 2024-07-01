import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const newUser = {
   id: 123,
   name: 'Pepe',
   email: 'Pepe@gmail.com',
}

export const LoginPagen = () => {
   // Pasemos el contexto que creamos
   const { user, setLoginUser } = useContext(UserContext)
   console.log(user)
   console.log('LoginPagen se esta renderizando')

   return (
      <>
         <div>LoginPagen</div>
         <pre>
            {JSON.stringify(user, null, 3)}
         </pre>

         <button
            className="btn btn-primary"
            onClick={() => setLoginUser(newUser)}>
            Establecer usuario
         </button>
      </>
   )
}
