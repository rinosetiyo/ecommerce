import React, { useState } from 'react'
import apiInstance from '../../utils/axios'
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
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <h1 className="card-title text-center mb-4">Forgot Password</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Reset Password</button>
                            </form>
                            <div className="mt-3 text-center">
                                <p>
                                    Remembered your password? <a href="/login">Login</a>
                                </p>
                                <p>
                                    Don't have an account? <a href="/register">Register</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
