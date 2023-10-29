// !we need createContext and useContext for this ok
import { createContext, useContext } from "react";

// !same as previous project me kiye the dark mode wala waise hi kreneg 
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    // !Functionalities 
    // !to add a todo in a list 
    addTodo: (todo) => { },
    // !for updation of todo list we need id of that todo and also the text data
    updateTodo: (id, todo) => { },
    // !to delete a todo from list we need id 
    deleteTodo: (id) => { },
    // !toggle -> create line in todo horizontally cut wala sign tick krne par jo a rha
    toggleComplete: (id) => { },
});

// !creating custom hook
export const useTodo = () => {
    return useContext(TodoContext);
}

// !wrap krte time .Provider nhi lagan hoga yhi tum laga diye ok kam easy hogya
export const TodoProvider = TodoContext.Provider;

