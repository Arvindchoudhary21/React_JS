import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// !we can do this also direct create function and render it directly
function Myapp(){
    return (
        <h1>direct injected by creating funtion in main js</h1>
    )
}

// !so agar wo sab h1 p tag sab is type me convert hota hai to isko bhi to direct run krna chahiye kiuki
// !convertion wala step save kr diya maine but ye run nhi krega kiuki react ke kuch rules hai ki wo 
// !object ke kya kya property ues krega for example -> type ke jagah to kuch bhi ho sakta hai to react ko
// !kaise malum chalega ki type ek property hai is reactElement object ka so react ke apne kuch rules hai
// !onko ye follow krta hai so create object according to react rules then run krega object ok 
const reactElement = { 
    type : 'a',
    props : {
        href : 'https:/www.google.com',
        target : '_blank'
    },
    children : 'Click me to visit the google '
}

// !but direct humlog tag send kr de to run kr jayega like this
// !erase all thing in .render() and sirf isko likho aise hi -> anotherElement -> run ho jayega 
const anotherElement = (
    <a href="https:/www.google.com" target='_blank'>google here</a>
)
let justtext = 'how are you';
// !using react rules to create elements 
// 1.first is tag -> any tag p h1 h2 anyone
// 2. object 
// 3. text
// 4. variables 
// !sab ko remove kroge and sirf ActualReactElement likhoge li this -> ActualReactElement -> tabhi 
// run krega ok
const ActualReactElement = React.createElement(
    'a',
    {href:'https:/www.google.com' , target : '_blank'},
    'click here to go at google',
    justtext
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Myapp/> 
    </>
 

)
