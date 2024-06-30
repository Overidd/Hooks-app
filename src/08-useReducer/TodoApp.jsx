import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReduce"
import { TodoAdd } from "./TodoAdd"
import TodoList from "./TodoList"


const inicialState = [
   {
      id: new Date().getTime(),
      description: 'Recolectar la piedra del alma',
      done: false,
   },

]

const init = () => {
   // console.log(typeof JSON.parse(localStorage.getItem('todos')))
   return JSON.parse(localStorage.getItem('todos')) || []
}

export function TodoApp() {

   const [todos = [], dispatchTodos] = useReducer(todoReducer, inicialState, init)

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) || [])
   }, [todos])


   const onNewTodo = (newTodo) => {
      const action = {
         type: '[TODO] Add Todo',
         payload: newTodo,
      }
      dispatchTodos(action)
   }

   const handleDeleteTodo = (id) => {
      const action = {
         type: '[TODO] Remove Todo',
         payload: id,
      }
      dispatchTodos(action)

   }


   console.log(todos)
   return (
      <>
         <h3>TodoApp: 10, <small>pendientes: 2</small></h3>
         <hr />


         <div className="row">
            <div className="col-7">
               <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
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

