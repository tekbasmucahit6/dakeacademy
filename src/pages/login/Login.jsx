import React from 'react'
import Header from '../../components/Header'
import UpBar from '../../components/UpBar'
import LoginForm from './LoginForm'
import Footer from '../../components/Footer'

function Login() {
  return (
    <div className='h-screen'>
        <UpBar />
        <Header />
        <LoginForm />
        <Footer />
    </div>
  )
}

export default Login