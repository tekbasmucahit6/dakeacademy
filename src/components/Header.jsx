import React from 'react'
import Logo from './Logo';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='flex justify-between items-center bg-white text-[rgb(140,141,144)] p-4 border-b-2 shadow'>
       <Logo />
        <div className='flex justify-center items-center gap-5'>
            <Link to={"/login"}>
                <button className='bg-[rgb(249,3,66)] hover:bg-[rgb(249,60,90)] p-2 text-white rounded'>giriş yap</button>
            </Link>
            <Link to={"/sign-Up"}>
                <button className='border-2 p-2 rounded'>kayıt ol</button>
            </Link>
        </div>
    </div>
  )
}

export default Header