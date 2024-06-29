import { useRef } from 'react';

export function FocusScreen() {

   const inputRef = useRef()

   const onFocusInput = () => {
      console.dir(document.querySelector('input'))
      console.log(document.querySelector('input').value)
      console.log(inputRef)
      console.log(inputRef.current.value)
      inputRef.current.select()
   }

   return (
      <>
         <h1>Focus Screen</h1>
         <hr />
         <input
            ref={inputRef}
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control"
         />
         <button
            className="btn btn-primary mt-2"
            onClick={onFocusInput}>
            Set focus
         </button>

      </>
   )
}
