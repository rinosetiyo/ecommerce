import React, { useEffect } from 'react'
import { logout } from '../../utils/auth'
import { Link } from 'react-router-dom'

function Logout() {
    useEffect(() => {
        logout()
    }, [])

    return (
        <div>
            <h1>Logout</h1>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/wishlist">Wishlist</Link>
        </div>
    )
}

export default Logout
