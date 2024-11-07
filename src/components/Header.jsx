import React from 'react'
import Logo from './Logo';
function Header() {
  return (
    <div className='flex justify-between items-center bg-white text-[rgb(140,141,144)] p-4 border-b-2 shadow'>
       <Logo />
        <div className='flex justify-center items-center gap-5'>
            <button className='bg-[rgb(249,3,66)] p-2 text-white rounded'>giriş yap</button>
            <button className='border-2 p-2 rounded'>kayıt ol</button>
        </div>
    </div>
  )
}

export default Header