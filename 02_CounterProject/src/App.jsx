import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// useState -> it is a hook also if you want to add more hooks then just by writing , add more hooks 
function App() {
  
  // let counter = 4;
  // !we will use useState hook to update the counter value
  // !counter->value(variable) , setCounter -> function responsible to update the variable counter 
  // !default value of counter=4(as i gven)
  let [counter , setCounter] = useState(4); //!name can be anything of counter and setCounter ok

  function increaseCounter(){
    if(counter < 20)
    counter += 1;
    setCounter(counter) 
    // !ab jaha jaha counter hai sab jagah ek bar me update hoga 
  }
  function decreaseCounter(){
    if(counter > 0)
    counter -= 1;
    
    setCounter(counter) 
    // !ab jaha jaha counter hai sab jagah ek bar me update hoga 
  }

  return (
    <>
      <h1>hello</h1>
      <h2>Counter Value : {counter}</h2>
      <button className="btn1" onClick={increaseCounter}>Increase Value {counter}</button>
      <button onClick={decreaseCounter}>Decreaes Value {counter}</button>
    </>
  )
}

export default App
