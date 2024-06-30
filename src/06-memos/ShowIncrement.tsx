import React, { memo } from "react"

interface Props {
   incremente: (i: number) => void,
}


export const ShowIncrement = memo(({ incremente }: Props) => {
   console.log('Me volvi a ejecutar ')

   return (
      <button
         className="btn btn-primary"
         onClick={() => incremente(5)}>
         Incrementar
      </button>
   )
})
