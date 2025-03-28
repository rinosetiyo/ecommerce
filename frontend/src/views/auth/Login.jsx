import React, { useEffect, useState } from 'react'
import { login } from '../../utils/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'

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
      alert(error)
    } else {
      navigate('/')
      resetForm()
    }
    setIsLoading(false)
  }
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" disabled={isLoading}>Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  )
}

export default Login
