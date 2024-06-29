import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import {Small} from "./Small"

export function MemoHooks() {
   const { counter, increment } = useCounter(10)
   const [ show, setShow ] = useState(true)

   // console.log('Memorize se esta renderizando')

   return (
      <>
         <h1>Counter: <small>{counter}</small></h1>
      
         <br />
         <button
            className="btn btn-primary"
            onClick={increment}>
            +1
         </button>

         <button
            onClick={() => setShow(!show)}
            className="btn btn-outline-primary"
         >
            Show/Hide {JSON.stringify(show)}
         </button>

      </>

   )
}
