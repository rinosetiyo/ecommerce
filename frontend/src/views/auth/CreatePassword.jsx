import React, { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import apiInstance from '../../utils/axios'

function CreatePassword() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const otp = searchParams.get('otp')
    const uidb64 = searchParams.get('uidb64')

    const handlePasswordSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        } else {
            const formdata = new FormData()
            formdata.append('password', password)
            formdata.append('uidb64', uidb64)
            formdata.append('otp', otp)

            try {
                await apiInstance.post('/password-change/', formdata).then((res) => {
                    console.log(res.data)
                    alert('Password reset successfully')
                    navigate('/login')
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1 className="text-center mb-4">Create New Password</h1>
                        <form onSubmit={handlePasswordSubmit}>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">New Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="form-control"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Create Password</button>
                        </form>
                        <div className="mt-3 text-center">
                            <p>Already have an account? <a href="/login">Login</a></p>
                            <p>Don't have an account? <a href="/register">Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePassword
