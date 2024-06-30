import { TodoItem } from "./TodoItem";
import PropTypes from 'prop-types';

export default function TodoList({todos = [], onDeleteTodo}) {
   return (
      <ul className="list-group">

         {
            todos.map(({ id, description }) => (
               <TodoItem key={id} id={id} description={description} onDeleteTodo={onDeleteTodo} />
            ))
         }

      </ul>
   )
}

TodoList.propTypes = {
   todos: PropTypes.array.isRequired,
   onDeleteTodo: PropTypes.any
 };
 