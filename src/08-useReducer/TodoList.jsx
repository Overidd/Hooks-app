import { TodoItem } from "./TodoItem";
import PropTypes from 'prop-types';

export  function TodoList({todos = [], onDeleteTodo, onToggleTodo}) {
   console.log('TodoList se renderizo')
   return (
      <ul className="list-group">

         {
            todos.map(({ id, description, done }) => (
               <TodoItem key={id} id={id} description={description} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}  done={done}/>
            ))
         }

      </ul>
   )
}

TodoList.propTypes = {
   todos: PropTypes.array.isRequired,
   onDeleteTodo: PropTypes.any
 };
 