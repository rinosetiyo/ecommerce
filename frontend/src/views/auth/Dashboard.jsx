import React from 'react'
import { useAuthStore } from '../../store/auth'
import { Link } from 'react-router-dom'

function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useAuthStore(state => ([
        state.isLoggedIn,
        state.setIsLoggedIn
    ]))

    return (
        <div>
            {/* {isLoggedIn ? (
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome to the dashboard!</p>
                    <Link to="/logout">Logout</Link>
                </div>
            ) : (
                <div>
                    <h1>Home page</h1>
                    <h1>Please log in</h1>
                    <Link to="/login">Login</Link>
                </div>
            )} */}
            <h2>Dashboard</h2>
            <p>This is the dashboard page.</p>
        </div>
    )
}

export default Dashboard
