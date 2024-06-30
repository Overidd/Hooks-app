import PropTypes from 'prop-types';


export function TodoItem({ id, description, done, onDeleteTodo, onToggleTodo }) {
   console.log('El componente Todoitem.jsx se renderiza', done)
   return (
      <li className="list-group-item d-flex justify-content-between" key={id}>
         <span className={`aling-self-center listTodo  ${(done) ? 'lineThrough' : ''}`} onClick={() => onToggleTodo(id)}>{description}</span>
         <button className="btn btn-danger" onClick={() => onDeleteTodo(id)}>Borrar</button>
      </li>
   )
}
TodoItem.propTypes = {
   id: PropTypes.number,
   description: PropTypes.string,
   done: PropTypes.bool,
   onDeleteTodo: PropTypes.any
};
