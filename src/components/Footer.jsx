import React from 'react'
import Logo from './Logo'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
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
            <div className='flex flex-col justify-start items-center gap-5'>
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
                    {/* mail number */}
                    <a href="mailto:egitimdake@gmail.com" className='flex justify-center items-center gap-2'>
                        <IoMailSharp className='text-red-600 text-xl' />
                        +90 (552) 681 60 60
                    </a>
                    {/* adress */}
                    <a href="" className='flex justify-center items-start gap-2 w-[200px]'>
                        <MdOutlineHomeWork className='text-amber-600 text-5xl' />
                       <p>yeşilırmak mahallesi GOP bulvarı Merkez/TOKAT</p>
                    </a>
                </div>
            </div>
            {/* RİGHT SECTİON */}
            <div className='flex flex-col justify-start items-center gap-5'>
                <strong>DAKE AKADEMİ</strong>
                <div className='flex flex-col justify-center items-center gap-3'>
                    {/* phone number */}
                    <Link to={"/"} className='flex justify-center items-center gap-2 hover:bg-white px-6 rounded'>
                        Anasayfa
                    </Link>
                    {/* whatsapp number */}
                    <Link to={"/login"} className='flex justify-center items-center gap-2 hover:bg-white px-6 rounded'>
                        login
                    </Link>
                    {/* adress */}
                    <Link to={"/sign-up"} className='flex justify-center items-center gap-2 hover:bg-white px-6 rounded'>
                        sign up
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer