import { useState } from "react"

export const useCounter = (initialValue = 1, min, max) => {
   const [counter, setCounter] = useState(initialValue);

   const increment = (e, value = 1) => {
      if (typeof max === 'undefined') {
         setCounter(counter + value);
         return
      }
      setCounter(prevCounter => Math.min(prevCounter + value, max));
   }

   const decrement = (e, value = 1) => {

      if (typeof min === 'undefined') {
         setCounter(counter - value);
         return
      }

      setCounter(prevCounter => Math.max(prevCounter - value, min));

   }

   const reset = () => {
      setCounter(initialValue);
   }

   return {
      counter,
      increment,
      decrement,
      reset
   }
}