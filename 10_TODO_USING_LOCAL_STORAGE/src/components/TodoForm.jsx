import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    // !this is for individual todo message ka useState hai ok
    const [todo, setTodo] = useState("");

    // !now we require the addTodo functionality to add the todo 
    const { addTodo } = useTodo();

    // !METHOD to add the text to the list 
    const add = (e) => {
        e.preventDefault();

        if (!todo) return;
        // !array me objects store ho rhe hai and object ke andar id hai todos hai and completed hai and isko todos jo string wala section hai waha add krna hai is text ko (but App.jsx me Date.now() use kiye ho to yha remove bhi kr doge to koi baat nhi hai) #
        addTodo({ todo, completed: false })
        // !clear the value present in todo because value is added already
        setTodo("");
    }


    return (
        // !onSubmit you have to write and pass the add function refrence
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //!added
                onChange={(e) => setTodo(e.target.value)} //!added 
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
