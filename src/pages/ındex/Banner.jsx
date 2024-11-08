import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='flex flex-col text-white justify-center items-center bg-gradient-to-r from-blue-800 to-sky-950 p-16 gap-10 my-16'>
        <h2 className='max-w-[800px] text-center text-xl'>SEN DE ÜNİVERSİTEYE DAKE AKADEMİ İLE HAZIRLAN ON BİNLERCE KİŞİ ARASINA KATIL</h2>
        <Link to={"/login"}>
            <button className='px-6 py-2 rounded text-white bg-red-600 shadow-lg hover:bg-red-700'>Hemen Başla</button>
        </Link>
    </div>
  )
}

export default Banner