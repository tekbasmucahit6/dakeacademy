import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Logo() {
  return (
    <div className='text-xl'>
    <Link to={"/"}>
        <p className='flex justify-center items-center text-green-700 font-bold gap-2'><IoBookOutline className='text-green-700 text-3xl' /> 
        <div>
        <b className='text-red-700'>D</b> 
        <b className='text-amber-600'>A</b> 
        <b className='text-blue-600'>K</b> 
        <b className='text-pink-600'>E</b> 
        <b className='ms-2'>Akademi</b>
        </div>
        </p>
    </Link>
    {/* <img src={"../img/dake.jpg"} className='w-20' alt="" /> */}
    {/* <strong>DAKE AKADEMİ</strong> */}
</div>
  )
}

export default Logo