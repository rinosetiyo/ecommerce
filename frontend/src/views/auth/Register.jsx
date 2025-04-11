import React, {useEffect, useState} from 'react'
import { register } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'

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

        const { error } = await register({fullname, email, phone, password, password2})
        if (error) {
            alert(JSON.stringify(error))
        } else {
            navigate('/login')
            setLoading(false)
        }
    }
    return (
    <div>
      <h1>register</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Fullname" value={fullname} onChange={e => setFullname(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="text" placeholder="Mobile" value={phone} onChange={e => setMobile(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={password2} onChange={e => setPassword2(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
    // {isLoading === true 
    //     ? <p>Loading...</p> 
    //     : null
    // }
  )
}

export default Register
