import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h1>redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App

// !Notes
/*
1. so create app folder and osme store banao by store.js and below steps to create the store -> go to store.js
2. we will create features folder to create reducers or slicers jo bhi name bol do 

*/
