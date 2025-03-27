import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
