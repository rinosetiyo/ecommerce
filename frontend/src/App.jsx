import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'
import Dashboard from './views/auth/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
