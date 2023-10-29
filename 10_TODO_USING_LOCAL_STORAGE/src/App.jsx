import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  // initially todos me empty array hai means koi todo nhi h 
  const [todos, setTodos] = useState([])

  // !now define the function get from the value
  const addTodo = (todo) => {
    // !ab setTodos krna hoga but jo previous value hai onme add krna hai to iske liye hum spread function use krenge javascript array ka u know and todos apne ap me ek array hai of object so object jisme id ,todo, complete ye 3 chiz hai so in tino ko define krna hoga 
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  // !update functionality 
  // !so humlog jitna previous todo list hai onpe ek loop lagaye using map method and agar koi bhi todo item ka id equal to hai wo id ke jisko humlog update krna chahte hai so purane wale ko hata ke naya todo return kro nhi to purana todo jaise hah waise hi rehne do
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((eachtodo) => (eachtodo.id === id ? todo : eachtodo)))
  }

  // !delete functionality 
  // !so delete method ke liye we use filter method like jo bhi elementka id jo passed id se match kr jaye osko don't take and otherwise sab values ko take kro means array me included rakho 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachtodo) => eachtodo.id !== id));
  }

  // !toggle functionality
  // !for this functionality humlog prev jitne bhi array element the in form of todo onpe loop lgaye and jo element ka id equal tha passed id ke then humlog spread function se spread kiye os element ke object ko and os object ke completed wala section me agar true hai to false kr diye and false hai to true krdiye and agar id equal nhi hai passed id ke to simply wahi same previous element as it is rehne diya
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((eachtodo) => eachtodo.id === id ? { ...eachtodo, completed: !eachtodo.completed } : eachtodo))
  }

  // !about local storage -> local storage me value string ke format me add hoti and recieve bhi string ke format me hoti hai so remember to convert to json file while taking data from local storage and convert to string while putting data in the local storage
  // !we use useEffect method because jitna bhi value already hai in todo wo sab ko todo me add krdo
  useEffect(() => {
    // !we can directly access the local storage in react
    //!todos key ka koi value hai to get kr lo and in json format ok so convert from string to json
    const todos = JSON.parse(localStorage.getItem("todos"));
    // !agar data me kuch value hai tabhi set kro nhi to mat kro
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  // !for putting data in local storage we use setItem 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    // !ab function ka acces yha lene ke liye value add kro
    <TodoProvider value={{ addTodo, deleteTodo, toggleComplete, todos, updateTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />

          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

// !you will get components in read me file ok
