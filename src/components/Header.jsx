import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center bg-white text-[rgb(140,141,144)] p-4 border-b-2 shadow'>
        <div className='text-xl'>
            <strong>DAKE AKADEMİ</strong>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <button className='bg-[rgb(249,3,66)] p-2 text-white rounded'>giriş yap</button>
            <button className='border-2 p-2 rounded'>kayıt ol</button>
        </div>
    </div>
  )
}

export default Header