import React, {useState} from 'react'
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
    <div>
        <h1>Create New Password</h1>
        <form onSubmit={handlePasswordSubmit}>
            <div>
                <label htmlFor="password">New Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Password</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
        <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  )
}

export default CreatePassword
