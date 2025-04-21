import React, { useEffect, useState } from 'react'
import { register } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'
import 'bootstrap/dist/css/bootstrap.min.css'

function Register() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate()
    const isLoggedIn = useAuthStore(state => state.isLoggedIn)

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/')
        }
    }
        , [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const { error } = await register({ fullname, email, phone, password, password2 })
        if (error) {
            alert(JSON.stringify(error))
        } else {
            navigate('/login')
            setLoading(false)
        }
    }
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card shadow" style={{ width: '400px' }}>
                    <div className="card-header text-center">
                        <h2>Register</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Fullname</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your full name"
                                    value={fullname}
                                    onChange={e => setFullname(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your mobile number"
                                    value={phone}
                                    onChange={e => setMobile(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm your password"
                                    value={password2}
                                    onChange={e => setPassword2(e.target.value)}
                                />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    {isLoading ? 'Loading...' : 'Register'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
