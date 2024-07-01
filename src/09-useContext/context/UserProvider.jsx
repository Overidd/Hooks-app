// Funcion componente de UserContext (higher order component)

import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

   const [user, setUser] = useState([])
   const setLoginUser = (newUser) => {
      setUser([ ...user, newUser])
   }

   console.log('UserProvider se esta renderizando')

   return (
      <UserContext.Provider value={{ hola: 'mundo', user, setLoginUser }}>
         {children}
      </UserContext.Provider>
   )
}
