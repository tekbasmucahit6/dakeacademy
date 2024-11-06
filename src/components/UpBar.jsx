import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function UpBar() {
  return (
    <div className='flex justify-between items-center px-2 pt-2 text-sm'>
        <p className=' text-[rgb(51,51,51)]'>
            <a href="" className='flex justify-center items-center gap-2'>
                <FaPhoneAlt className='text-blue-500' />
                +90 (552) 681 60 60
            </a>
        </p>

        <p className='hidden xl:flex lg:flex md:flex font-normal gap-1'>
            geleceğiniz için en uygun yol <strong className='text-red-500'> DAKEAKADEMİ</strong>
        </p>

        <p className=' text-[rgb(51,51,51)]'>
            <a href="" className='flex justify-center items-center gap-2'>
                <FaWhatsapp className='text-green-600' />
                +90 (552) 681 60 60
            </a>
        </p>
    </div>
  )
}

export default UpBar