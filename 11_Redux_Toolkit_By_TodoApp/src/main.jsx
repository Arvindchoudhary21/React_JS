import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// !Provider bhi use krna hoga jaise humlog context api me use krte hai but redux toolkit me provider automatically inbuilt hai ok 
import { Provider } from 'react-redux'
// !also store ko bhi import krna hoga to use the store 
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // aur context api me value bolte the but tha store bolte hai
  // !and humne jo banaya hai oska name bhi store hi hai to dono same hi hai but isse koi problem nhi hai ok 
  <Provider store={store}>
    <App />
  </Provider>,
)
