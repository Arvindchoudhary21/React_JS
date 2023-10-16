// so below agar two or more componenets ko run krna hai then wo simple <></> ye use kro and 
// sab data ko wrap kr do isme then run krega ok
import Chai from "./chai"
function App() {

  let username = 'arvind'; //!way to pass variable in the text
  return (
    <>
    <Chai /> 
    {/* yha sirf variable pass krna jo code likhna hai uper likha */}
    <h1>hello bro your name is {username}</h1> 
    <p>arvind</p>
    </>
  )
}

export default App
