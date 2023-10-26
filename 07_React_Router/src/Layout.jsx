import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// !Outlet ke uper and niche ka chiz sab same rhega and Outlet change hoga bas ok
function Layout() {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    )
}

export default Layout
