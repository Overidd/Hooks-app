
import PropTypes from 'prop-types';
import { useFormInput } from '../hooks/useFormInput';
import { useEffect } from 'react';

export function TodoAdd({ onNewTodo }) {
   console.log('se renderisa TodoAdd')


   const { description, onFormChange } = useFormInput({
      description: '',
   })


   useEffect(() => {
      if (!description) return;
      onNewTodo && onNewTodo({
         id: new Date().getTime(),
         description,
         done: false,
      })
   }, [description])


   return (
      <form action="" onSubmit={onFormChange}>
         <input
            type="text"
            placeholder="Que hay que hacer?"
            className="form-control" required name='description' />
         <button
            type="submit"
            className="btn btn-outline-primary mt-3">
            Agregar
         </button>
      </form>
   )
}


TodoAdd.propTypes = {
   onNewTodo: PropTypes.any.isRequired
};
