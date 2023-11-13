import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  // !output the env variable
  // console.log(import.meta.env.VITE_APPWRITE_URL); //working fine

  // !make loading state -> agar data abhi nhi aya hai to loading ka icon show kro otherwise data show kro ok ye feature use kro
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          // then data ko dispatch kro
          dispatch(login({ userData }));
        }
        else {
          // !agar data mila hi nhi to dispath kr do logout matlab state updated rhe
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false));
  }, [])


  // new type se return krenge
  return !loading ? (
    <div className=' min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className=' w-full block'>
        <Header />
        {/* outlet dispay by react router dom */}
        <main>
          <Outlet />
        </main>
        <Footer />

      </div>
    </div>
  ) : null

}

export default App
