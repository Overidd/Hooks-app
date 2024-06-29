// import {  useRef } from "react"

export  function PokemonCard({ id, name, sprites = [] }) {


   return (
      <section style={{ height: 200 }}>
         <h3 className="text-capitalize">#{id} - name:{name}</h3>
         <div>
            {
               sprites.map(sprite => (
                  <img  src={sprite} key={sprite} alt={name} />
               ))
            }
         </div>
      </section>
   )
}
