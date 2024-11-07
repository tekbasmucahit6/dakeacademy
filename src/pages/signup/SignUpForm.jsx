import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { MdPassword } from 'react-icons/md';
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
function SignUpForm() {
    const [inputType,setİnputType] = useState("password") 
    const showPassword = () => {
        setİnputType(prevType => (prevType === "password" ? "text" : "password"));
    }

  return (
    <div className=' flex justify-center items-center h-2/3 my-20'>
        <form action="" method="post">
            <div className='grid gap-10 bg-gray-100 p-20 rounded shadow'>
                <strong className='flex justify-center items-center text-red-500 border-b-2 pb-4 border-red-500'>KAYIT OL</strong>

                {/* username section */}
                <div className='flex flex-col justify-center items-start gap-3'>
                    <label htmlFor="">username</label>
                    <input type="text" className='focus:outline-none shadow px-2 py-1 rounded border-2'/>
                </div>

                   {/* username section */}
                   <div className='flex flex-col justify-center items-start gap-3'>
                    <label htmlFor="">e-mail</label>
                    <input type="email" className='focus:outline-none shadow px-2 py-1 rounded border-2'/>
                </div>


                {/* password section */}

                <div className='flex flex-col justify-center items-start gap-3'>
                    {/* password label */}
                    <div className='flex justify-between w-full items-center'>
                        <label htmlFor="" className='flex justify-between items-center'>password</label>
                        <label htmlFor="" className='me-3'>
                            {/* İkonu inputType'a göre değiştiriyoruz */}
                                {inputType === "password" ? (
                                    <FaEye onClick={() => showPassword()} />
                                ) : (
                                    <FaEyeSlash onClick={() => showPassword()} />
                                )}
                        </label>
                    </div>
                    {/* password label is finish */}
                    <input type={inputType} className='focus:outline-none shadow px-2 py-1 rounded border-2' />
                </div>
                {/* password sectin is finish */}
                {/* login button section */}
                <div className='flex flex-col justify-center items-center'>
                    <button className='bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded shadow'>kayıt ol</button>
                </div>
                {/* login button section is finish */}
                {/* signup and forgot password section */}
                <div className='flex justify-between items-center text-xs'>
                    <Link to={"/login"}>
                        <p>giriş yap</p>
                    </Link>

                    <Link to={"/"}>
                        <p>anasayfa</p>
                    </Link>
                </div>
                {/* signup and forgot password section is finish */}
            </div>
        </form>
    </div>
  )
}

export default SignUpForm