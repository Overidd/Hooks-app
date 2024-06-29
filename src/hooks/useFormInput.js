import { useState } from "react";

export const useFormInput = (initialFrom = {}) => {

   const [inputState, setInputState] = useState(initialFrom)
   const [formState, setFromState] = useState(initialFrom)

   const onInputChange = ({ target }) => {
      const { name, value } = target;
      setInputState({
         ...inputState,
         [name]: value
      })
   }

   const onFormChange = (e) => {
      
      e.preventDefault()
      let data = new FormData( e.target )
      let entradasFrom = Object.fromEntries( data.entries() )
      
      setFromState({
         ...inputState,
         ...entradasFrom,
      })
   }
   const onResetFrom = () => {
      setFromState(initialFrom)
   }
   const onResetInput = () => {
      setInputState(initialFrom)
   }
   // console.log(initialFrom)
   // const {username, email} = inputState;

   return {
      inputState,
      formState,
      onInputChange,
      onFormChange,
      onResetFrom,
      onResetInput,
   }
}
