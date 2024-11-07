import React from 'react'

function Prefer() {
  return (
    <div className='my-24 flex justify-center items-center'>
        <div className='grid grid-cols-2 xl:max-w-[800px] lg:max-w-[500px] md:max-w-[400px] p-2 gap-5'>
            <div className='flex justify-center items-center'>
                <h1 className='text-2xl xl:text-5xl lg:text-5xl md:text-3xl'>+20.000</h1>
            </div>
            <div className='flex justify-center items-center text-lg xl:text-2xl lg:text-2xl md:text-xl'>
                <p>Öğrenci Bu Uzun Ve Zorlu Yolda Bizi Tercih Etti</p>
            </div>
        </div>
    </div>
  )
}

export default Prefer