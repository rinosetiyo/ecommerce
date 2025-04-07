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
            <Link to="/settings">Settings</Link>
            <Link to="/support">Support</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/events">Events</Link>
            <Link to="/news">News</Link>
            <Link to="/careers">Careers</Link>
        </div>
    )
}

export default Logout
