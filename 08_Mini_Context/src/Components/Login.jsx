import React from 'react'
import { useState } from 'react'
// this new hook we will use in this lecture
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    // !take state for username and password updation
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // !to fetch value to UserContext we use useContext hook
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder='Username'
            />
            {"     "}
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
