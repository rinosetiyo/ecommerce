import React, { useState } from 'react'
import apiInstance from '../../api/axios'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            await apiInstance.get(`user/password-reset/${email}/`).then((res) => {
                console.log(res.data)
                alert("Password reset link sent to your email")
                navigate('/create-new-password')
            })

        } catch (error) {
            console.error("Error sending password reset email:", error);
            alert("Failed to send password reset email. Please try again.");
        }
    }
    return (
        <div>
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
            <p>
                Remembered your password? <a href="/login">Login</a>
            </p>
            <p>
                Don't have an account? <a href="/register">Register</a>
            </p>
        </div>
    )
}

export default ForgotPassword
