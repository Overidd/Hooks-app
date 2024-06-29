import React, { memo } from 'react'

interface Props{
   small: string,
}

// Solo se ejecuta cuando los props sel componente cambia
export const Small = memo(({ small}:Props) => {
   console.log('Se esta renderizando el componente Small')
   return (
      <small>{small}</small>
   )
})
