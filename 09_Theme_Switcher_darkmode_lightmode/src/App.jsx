import { useState } from 'react'

import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import { useEffect } from 'react';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  // !ab buttons me manipulation hoga oske liye useState hook use krna hoga 
  // !addon -> yha par themeMode me T capital tha to run nhi kr rha tha but small kr diya to run krne laga kiuki Theme.js me humne small use kiya hai so isiliye yha bhi small hi dena hoga tabhi work krega nhi to wo button work nhi kr rha tha white se black ho ja rha tha but black se white nhi ho rha tha theme wahi atak ja rha tha 
  const [themeMode, setThemeMode] = useState("light");

  // !So abhi Theme.js file me lightTheme and darkTheme ka functionalities defined nhi hai but agar tum yhi par onka name se function bana doge to ye functionalities aise work krengi jaise ki tum Theme.js me likhe ho to ye ek fact yad rakhna so yhi functionality bana do lightTheme and darkTheme ka

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  // !actual change in theme kaise hota h look in below
  useEffect(() => {
    // !ab html me jo bhi hai dark ya light jo bhi likha hai wo dono remove kro
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode); //!jo bhi ThemeMode me set hai wo value input kr do in html 
  }, [themeMode]) //!because ThemeMode jab jab change hoga tab tab ye function fir se execute hoga 

  return (
    // !we need to wrap all to themeProvider to use the function in context and write the values jiska access chahiye in value section ab pura div me ye tino value ka access rhega 
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme button */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
