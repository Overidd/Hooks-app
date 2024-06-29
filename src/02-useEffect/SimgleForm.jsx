import { useFormInput } from "../hooks/useForm"

export default function SimgleForm() {
   const { formState, onFormChange,onResetFrom } = useFormInput({
      username: '',
      email: '',
      password: '',
   })

   console.log(formState)
   return (
      <>
         <h1>Formulario Simple</h1>
         <form action="" onSubmit={onFormChange}>
            <input type="text" className="form-control" placeholder="Username" name="username" required />
            <input type="email" className="form-control mt-2" placeholder="examplo@.com" name="email" required />
            <input type="password" className="form-control mt-2" name="password" required />
            <input type="submit" className="submit" />
         </form>

         <button className="btn btn-primary" onClick={onResetFrom}>Borrar</button>
      </>
   )
}
