// !now we will receive data sent from the Login.jsx 
import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
function Profile() {

    // !to get value from UserContext we use useContext hook
    const { user } = useContext(UserContext)

    // !if user has some data then login succesful otherwise show message to login
    if (!user) return <div>Please Login</div>

    return <div>Welcom {user.username}</div>
}

export default Profile
