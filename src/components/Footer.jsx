import React from 'react'
import Logo from './Logo'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineHomeWork } from "react-icons/md";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='bg-gray-300 p-10'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 container mx-auto gap-16'>
            {/* LEFT SECTİON */}
            <div className='flex justify-center items-center'>
                <Logo />
            </div>
            {/* MİDDLE SECTİON */}
            <div className='flex flex-col justify-center items-center gap-5'>
                <strong>İletişim</strong>
                <div className='flex flex-col justify-center items-center gap-3'>
                    {/* phone number */}
                    <a href="tel:05526816060" className='flex justify-center items-center gap-2'>
                        <FaPhoneAlt className='text-blue-500 text-xl' />
                        +90 (552) 681 60 60
                    </a>
                    {/* whatsapp number */}
                    <a href="https://wa.me/+905526816060" className='flex justify-center items-center gap-2'>
                        <FaWhatsapp className='text-green-600 text-xl' />
                        +90 (552) 681 60 60
                    </a>
                    {/* adress */}
                    <a href="" className='flex justify-center items-center gap-2'>
                        <MdOutlineHomeWork className='text-amber-600 text-xl' />
                       <p>yeşilırmak mahallesi GOP bulvarı Merkez/TOKAT</p>
                    </a>
                </div>
            </div>
            {/* RİGHT SECTİON */}
            <div className='flex flex-col justify-center items-center gap-5'>
                <strong>DAKE AKADEMİ</strong>
                <div className='flex flex-col justify-center items-center gap-3'>
                    {/* phone number */}
                    <Link to={"/"} className='flex justify-center items-center gap-2 hover:bg-white px-6 rounded'>
                        Anasayfa
                    </Link>
                    {/* whatsapp number */}
                    <Link to={""} className='flex justify-center items-center gap-2 hover:bg-white px-6 rounded'>
                        login
                    </Link>
                    {/* adress */}
                    <Link to={""} className='flex justify-center items-center gap-2 hover:bg-white px-6 rounded'>
                        sign up
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer