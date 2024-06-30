import { useTodos } from "../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export function TodoApp() {

   const { todos,todosCount, pendingTodosCount, onNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos()


   console.log(todos)
   return (
      <>
         <h3>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h3>
         <hr />


         <div className="row">
            <div className="col-7">
               <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
            </div>

            <div className="col-5">
               <h4>Agregar Todo</h4>
               <hr />
               <TodoAdd onNewTodo={onNewTodo} />
            </div>
         </div>

      </>
   )
}

