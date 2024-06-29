// import {useFatch} from "../hooks";

import { useCounter, useFatch } from '../hooks'
import { LoadingMessage } from '../03-examples/LoadingMessage'
import {PokemonCard} from './PokemonCard'

export default function Layout() {
   const { counter, decrement, increment } = useCounter(1, 1, Infinity)
   const { data, hasError, inLoaging } = useFatch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

   // console.log(data, hasError)

   return (
      <>
         {inLoaging
            ? <LoadingMessage />
            : <PokemonCard
               id={data.id}
               name={data.name}
               sprites={[
                  data.sprites.back_default,
                  data.sprites.back_shiny,
                  data.sprites.front_default,
                  data.sprites.front_shiny,        
               ]} />
         }
         {/* {!inLoaging && <pre>{JSON.stringify(data, null, 2)}</pre>} */}

         {/* <h2>{data?.name}</h2> */}
         <button className='btn btn-primary mt-2' onClick={decrement}>Anterios</button>
         <button className='btn btn-primary mt-2' onClick={increment}>Siguiente</button>
      </>
   )
}
