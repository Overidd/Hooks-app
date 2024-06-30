import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export default function CallbackHook() {
   const [counter, setCounter] = useState(10)

   const incremente = useCallback ((i = 1) => {
      setCounter((valor) => valor + i)
   }, [])
   return (
      <>
         <h1>useCallback hook: {counter}</h1>
         <ShowIncrement incremente={incremente} />
      </>
   )
}
