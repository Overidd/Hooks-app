// import React from 'react'

import { useCounter } from "../hooks/useCounter"

export default function CounterCustomHook() {

   const { counter, increment, decrement, reset } = useCounter();

   return (
      <>
         <h1>Counter with Hook: {counter}</h1>
         <hr />

         <button className="btn btn-primary" onClick={()=> increment(null,12)}>+1</button>
         <button className="btn btn-primary" onClick={reset}>Reset</button>
         <button className="btn btn-primary" onClick={decrement}>-1</button>
      </>
   )
}
