import React, { useEffect, useState } from 'react'
import { login } from '../../utils/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const isLoggedIn = useAuthStore(state => state.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }
    , [isLoggedIn])

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const { error } = await login(email, password)
    if (error) {
      setIsLoading(false)
      alert(error)
    } else {
      navigate('/')
      resetForm()
      setIsLoading(false)
    }
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title text-center">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <button type="submit" disabled={isLoading} className="btn btn-primary w-100">
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>
            </div>
            <div className="card-footer text-center">
              <Link to="/register" className="btn btn-link">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
