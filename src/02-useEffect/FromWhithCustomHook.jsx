import { useEffect, useState } from "react"

export default function FormWhithCustomHook() {
   const [formState, setFormState] = useState({
      username: 'Over',
      email: 'over@gmail.com',
   })
   // const {username, email} = formState;

   const onInputChange = ({ target }) => {
      const { name, value } = target;
      setFormState({
         ...formState,
         [name]: value
      })
   }
   useEffect(() => {
      console.log('useEffect changed!')
   }, [formState])

   // console.log(formState)
   return (
      <>
         <h1>Form Whith Custom Hook</h1>
         {/* <form action=""  onSubmit={onInputChange}> */}
         <input type="text" className="form-control" placeholder="Username" name="username" onChange={onInputChange} />
         <input type="emil" className="form-control mt-2" placeholder="examplo@.com" name="email" onChange={onInputChange} />
         {/* <input type="submit" /> */}
         {/* </form> */}
      </>
   )
}
