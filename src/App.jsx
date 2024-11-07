import React from 'react'
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import Index from './pages/ındex/Index'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Page from './pages/page/page'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/page' element={<Page />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App