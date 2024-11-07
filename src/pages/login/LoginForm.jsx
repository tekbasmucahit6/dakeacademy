import React from 'react'
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
function LoginForm() {
  return (
    <div className=' flex justify-center items-center h-5/6'>
        <form action="" method="post">
            <div className='grid gap-10 bg-gray-100 p-20 rounded shadow'>
                

                {/* username section */}
                <div className='flex flex-col justify-center items-start gap-3'>
                    <label htmlFor="">username</label>
                    <input type="text" className='focus:outline-none shadow px-2 py-1 rounded border-2'/>
                </div>


                {/* password section */}

                <div className='flex flex-col justify-center items-start gap-3'>
                    <div className='flex justify-between w-full items-center'>
                        <label htmlFor="" className='flex justify-between items-center'>password</label>
                        <label htmlFor="" className='me-3'><FaEye /></label>
                    </div>
                    <input type="password" className='focus:outline-none shadow px-2 py-1 rounded border-2' />
                </div>
                {/* password sectin is finish */}
                {/* login button section */}
                <div className='flex flex-col justify-center items-center'>
                    <button className='bg-red-500 px-4 py-2 text-white rounded shadow'>giriş yap</button>
                </div>
                {/* login button section is finish */}
                {/* signup and forgot password section */}
                <div className='flex justify-between items-center text-xs'>
                    <Link to={"/sign-up"}>
                        <p>kayıt ol</p>
                    </Link>

                    <Link to={"/sign-ufasadfp"}>
                        <p>şifremi unuttum</p>
                    </Link>
                </div>
                {/* signup and forgot password section is finish */}
            </div>
        </form>
    </div>
  )
}

export default LoginForm