// import React from 'react'

import { useState } from "react"

export default function CaounterApp() {

   const [{ counter1, counter2, counter3 }, setCounter] = useState({
      counter1: 10,
      counter2: 20,
      counter3: 30,
   })
   return (
      <>
         <h3>Counter1: {counter1}</h3>
         <h3>Counter2: {counter2}</h3>
         <h3>Counter3: {counter3}</h3>

         <hr />

         <button className="btn" onClick={()=> setCounter((counter)=>({...counter, counter1: counter1 + 1}))}>+1</button>
      </>

   )
}
