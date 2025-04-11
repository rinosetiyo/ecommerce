import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'
import Dashboard from './views/auth/Dashboard'
import Logout from './views/auth/Logout'
import ForgotPassword from './views/auth/ForgotPassword'
import CreatePassword from './views/auth/CreatePassword'
import StoreHeader from './views/base/StoreHeader'
import StoreFooter from './views/base/StoreFooter'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <StoreHeader />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-new-password" element={<CreatePassword />} />
        <StoreFooter />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
