import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Contact() {
  return (
    <div className='fixed bottom-5 right-5'>
        <div className='flex flex-col justify-center items-center gap-5'>
            {/* phone number */}
            <a href="tel:05526816060" className='flex justify-center items-center'>
            <div className=' bg-gray-200 p-4 rounded-full'>
                <FaPhoneAlt className='text-blue-500 text-2xl' />
            </div>
                <p className='bg-gray-200 px-2 py-3 text-xs hidden xl:flex lg:flex md:flex rounded-tr-full rounded-br-full'>telefondan iletişime geç</p>
            </a>
            {/* whatsapp number */}
            <a href="https://wa.me/+905526816060"className='flex justify-center items-center'>
                <div className=' bg-gray-200 p-4 rounded-full'>
                    <FaWhatsapp className='text-green-600 text-2xl' />
                </div>
                <p className='bg-gray-200 px-2 py-3 text-xs hidden xl:flex lg:flex md:flex rounded-tr-full rounded-br-full'>whatsapptan iletişime geç</p>
            </a>
        </div>
    </div>
  )
}

export default Contact