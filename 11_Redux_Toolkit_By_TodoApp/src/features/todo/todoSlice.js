import { createSlice, nanoid } from "@reduxjs/toolkit";
// !nanoid is for generating id because we want id to traverse the array like jaisa humne todo app me date.now se liya tha isiliye okkkkk and createSlice is a hook jo lagega to create the reducer


// !ab store ka inital state define krna hoga ki suru me kaisa hoga store isme kya honge array hoga ya object hoga akhir kya hoga 
const initialState = {
    todos: [{ id: 1, text: "hello world" }],
}

// !create slice and also export this
export const todoSlice = createSlice({
    // !har slice ka name and inital state(uper define hai yaha bhi define kr sakte ho uper na likhne ke bajaye ok) hota hai 
    name: "arvind",
    initialState,
    // !ab reducer create kro isme property and function add hote hai 
    // !ab har property ke function me 2 chize milengi 1.state 2.action yad rakhna isko 
    // !state-> abhi kya data ka values hai ye state handle krta hai ki initial state wala array me kitna todo hai 1 hai ya 10 hai ya ek bhi nhi hai ye sab state handle krega
    // !action -> isme values recieve hoti hai like agar remove krna hai to isme id recieve hoga to delete the todo jiska id pass hua hai action me
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            // use the state to add the value in the todo (line 7 me jo array hai osme values push hoga ok)
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            // !take id from the action and delete the todo using the state
            state.todos = state.todos.filter((eachtodo) =>
                eachtodo.id !== action.payload
            )
        },

    }
})

// !fir se export krna hoga ek bar yad rakhna syntax hai
export const { addTodo, removeTodo } = todoSlice.actions;

// !ye bhi export lagana hoga 
export default todoSlice.reducer;

// !update wala function khud se add krna hoga using same reducer bana ke ok