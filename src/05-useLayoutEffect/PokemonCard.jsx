import { useLayoutEffect, useRef } from "react"



export  function PokemonCard({ id, name, sprites = [] }) {
   const imgRef = useRef();

   useLayoutEffect(() => {
      console.dir(imgRef.current.getBoundingClientRect())
   }, [sprites])


   return (
      <section style={{ height: 200 }}>
         <h3 className="text-capitalize">#{id} - name:{name}</h3>
         <div>
            {
               sprites.map(sprite => (
                  <img ref={imgRef} src={sprite} key={sprite} alt={name} />
               ))
            }
         </div>
      </section>
   )
}
