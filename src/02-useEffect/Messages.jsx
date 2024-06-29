import { useEffect, useState } from 'react'

export default function Messages() {

   const [coords, setCoords] = useState({ x: 0, y: 0 })
   useEffect(() => {

      const onMouseMove = ({ x, y }) => {
         setCoords({ x, y })
      }
      window.addEventListener('mousemove', onMouseMove)
      console.log('Message Mounted')

      return () => {
         window.removeEventListener('mousemove', onMouseMove)
         console.log('Message UnMounted')
      }
   }, [])

   return (
      <div>Usuario ya existe</div>
   )
}
