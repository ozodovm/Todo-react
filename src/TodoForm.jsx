import React, { useContext, useRef } from 'react'
import { Context } from './Context/Context'

function TodoForm (){
  const {todos , setTodos, AddTodo} = useContext(Context)
  const inputRef = useRef()
function handleSubmit(e){
  e.preventDefault()
  const todo = {
    id:todos.length ? todos[todos.length - 1].id + 1 : 1,
    title:inputRef.current.value,
    isComplated:false,
  }
  AddTodo(todo)
  e.target.reset()
}
  return (
    <>
      <div className="max-w-[650px] mx-auto mt-[100px] py-6 px-4 bg-white border-[1px] border-gray-300 shadow-2xl rounded-lg">
        <h1 className="text-center text-[32px] font-semibold text-blue-600 tracking-wider mb-8">
          Your Todo List
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full flex gap-4">
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter your todo"
            required
            name="todo"
            autoComplete="off"
            className="flex-grow outline-none border-[2px] border-slate-600 px-4 py-2 rounded-lg hover:bg-slate-600 hover:placeholder:text-white hover:text-white transition-colors duration-200"
          />
          <button className="bg-slate-600 w-[20%] py-2 rounded-lg text-white hover:text-slate-600 hover:bg-white hover:border-[2px] hover:border-slate-600 transition-colors duration-200 shadow-md">
            Add
          </button>
        </form>

        <div className="flex justify-between mt-8">
          <button className="w-[200px] py-3 bg-pink-600 text-white rounded-lg text-[14px] font-medium hover:bg-pink-400 transition-colors duration-200 shadow-lg">
            All (0)
          </button>
          <button className="w-[200px] py-3 bg-blue-500 text-white rounded-lg text-[14px] font-medium hover:bg-blue-400 transition-colors duration-200 shadow-lg">
            Completed (0)
          </button>
          <button className="w-[200px] py-3 bg-red-500 text-white rounded-lg text-[14px] font-medium hover:bg-red-400 transition-colors duration-200 shadow-lg">
            Uncompleted (0)
          </button>
        </div>
      </div>
    </>
  )
}

export default TodoForm
