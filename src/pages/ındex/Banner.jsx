import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col text-white justify-center items-center bg-gradient-to-r from-blue-800 to-sky-950 p-16 gap-10 my-16'>
        <h2 className='max-w-[800px] text-center text-xl'>SEN DE ÜNİVERSİTEYE DAKE İLE HAZIRLAN ON BİNLERCE KİŞİ ARASINA KATILMAK İSTER MİSİN?</h2>
        <button className='px-6 py-2 rounded text-white bg-red-600 shadow-lg hover:bg-red-700'>Hemen Başla</button>
    </div>
  )
}

export default Banner