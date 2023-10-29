import React, { useState } from 'react'
// ab data bhejna hai store me to dispatch use krna hoga ye hook ka
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    // !for the input data in the form 
    const [input, setInput] = useState('')
    // !syntax to use disapatch
    const dispatch = useDispatch()

    // !function to pass the data to add to the todo list using the disapacth method and dispatch is using the method addTodo taken from todoSlice 
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input)) //!addtodo is used by dispatch and input send kr do jo bhi data ko add krna hai in todolist and addTodo use pr pa rhe hai kiuki indivual dekho export kiya gya hai addTodo ko in the todoSlice.js file me ok
        setInput('') //!ab tum add kr diye to fir wo form ko clean bhi to krna hoga so input field ko empty kr do taki use experience acha mile 
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo