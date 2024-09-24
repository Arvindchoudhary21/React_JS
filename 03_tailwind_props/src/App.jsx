import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  // !so we can create our object , array jo bhi banana hai yha banao and osko pass kr do jo bhi component me pass krna hai
  // !and it will be recieved at the card.jsx as props ok
  let myobj = {
    username : "arvind",
    age : 22,
  }
  let name = "arvind choudhary  ";
  let arr = [1,2,3,4];

  return (
    <>
      <h1 className='bg-green-400 text-blue-700 rounded-xl p-4 mb-4'>Tailwind Test</h1>
      <Card username = {name} obj = {myobj} array = {arr} btnText = {"click me"} />
      <Card username = {"Jatin"} obj = {myobj} array = {arr} btnText = {"click here"} />
    </>
  )
}

export default App
