import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReduce"


const init = () => {
   // console.log(typeof JSON.parse(localStorage.getItem('todos')))
   return JSON.parse(localStorage.getItem('todos')) || []
}
export function useTodos() {
   console.log('useTodos se ejecuta')

   const [todos = [], dispatchTodos] = useReducer(todoReducer, [], init)

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

   const handleToggleTodo = (id) => {
      const action = {
         type: '[TODO] Toggle Todo',
         payload: id,
      }
      dispatchTodos(action)
   }

   const todosCount = todos.length

   const pendingTodosCount = todos.filter(todo => todo.done === false).length

   
   return {
      todos,
      todosCount,
      pendingTodosCount,
      onNewTodo,
      handleDeleteTodo,
      handleToggleTodo
   }
}
