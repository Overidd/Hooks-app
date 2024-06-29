import { useEffect, useState } from "react"

const localCache = {}

export function useFatch(url) {
   const [state, setState] = useState({
      data: null,
      inLoaging: true,
      hasError: false,
      error: null,
   })

   const setLoadingState = () => {
      setState({
         data: null,
         inLoaging: true,
         hasError: false,
         error: null,
      })
   }

   const getFetch = async () => {
      if (localCache[url]) {
         console.log('Usando cache')
         setState({
            data: localCache[url],
            inLoaging: false,
            hasError: false,
            error: null,
         })
         return
      }

      setLoadingState();
      const resq = await fetch(url);

      await new Promise(resolve => {
         console.log(resolve)
         setTimeout(resolve, 1500)
      })

      if (!resq.ok) {
         setState({
            data: null,
            inLoaging: false,
            hasError: true,
            error: {
               code: resq.status,
               message: resq.statusText,
            },
         })
         return
      }

      const data = await resq.json()

      setState({
         data: data,
         inLoaging: false,
         hasError: false,
         error: null,
      })

      // Manejo del caché
      localCache[url] = data
      console.log({localCache})
   }

   useEffect(() => {
      getFetch()

   }, [url])

   return {
      data: state.data,
      inLoaging: state.inLoaging,
      hasError: state.hasError,
   }
}
