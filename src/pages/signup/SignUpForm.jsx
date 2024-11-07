import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { MdPassword } from 'react-icons/md';
import { FaEyeSlash } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function SignUpForm() {
    // iban component show section
    const [showiban,setShowİban] = useState(0) 
    const show = () => {
        if(showiban === 0){
            setShowİban(1)
        }
        else{
            setShowİban(0)
        }
    }
    // password show hide icon section
    const [inputType,setİnputType] = useState("password") 
    const showPassword = () => {
        setİnputType(prevType => (prevType === "password" ? "text" : "password"));
    }

  return (
    <div className='flex justify-center items-center h-2/3 xl:my-20 lg:my-20 md:my-20'>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>

        <div className='flex justify-center items-start bg-gray-300 p-4'>

            <div className='flex flex-col justify-center items-center bg-white rounded shadow p-4 w-full gap-10'>
                {/* card header */}
                <div className='flex flex-col justify-center items-center gap-5'>
                    <p className='flex justify-center items-center text-2xl text-yellow-500'><FaRegStar /><FaRegStar /><FaRegStar /></p>
                    <h1 className='font-mono  text-xl'>GOLD ÜYELİK</h1>
                </div>
                {/* card header is finish */}
                <hr />
                {/* card content section */}
                <div className=' justify-start items-center mt-10'>
                    <ul className='gap-3'>
                        <li className=''>Tüm Konu Anlatım Videoları</li>
                        <li className=''>Tüm Tarama Testleri</li>
                        <li className=''>Çözümlü Yeni Nesil Sorular</li>
                        <li className=''>Videolu Soru Çözümleri</li>
                        <li className=''>Sorularla ilgili destek imkanı</li>
                        <li className=''>Türkiye Geneli Canlı Deneme Sınavları</li>
                        <li className=''>İstediğiniz zaman katılabileceğiniz deneme sınavları</li>
                    </ul>
                </div>
                <hr className='text-black' />
                {/* price section */}
                <div className='flex justify-between w-full items-center'>
                    <strong className='text-red-600 line-through text-3xl ms-10'>19.900 TL</strong>
                    <strong className='text-green-600 text-3xl me-10'>9.900 TL</strong>
                </div>
                {/* price section is finish */}
                {/* card content section is finish */}
                <div className='flex justify-center items-center w-full'>
                    <button 
                    className='w-full bg-green-600 py-2 text-white text-sm flex justify-center items-center gap-5'
                    onClick={() => show()}
                    ><FaCreditCard className='text-3xl' /> BANKA HAVALESİ ile ÜYE OL</button>
                </div>
                {/* card content section is finish */}
                {/* iban conmponent */}
                {
                    !showiban == 0?
                    <div className=''>


                    <div className='border p-2 rounded grid grid-cols-2 bg-gray-100'>
                        <div className='flex justify-tart items-start border-r-2 p-2 border-black'>
                            <p>İBAN</p>
                        </div>
                        <div className='flex justify-center items-center p-2'>
                            <p>TR14 0006 7010 0000 0030 9829 27</p>
                        </div>
                    </div>



                    <div className='border p-2 rounded grid grid-cols-2 bg-gray-100'>
                        <div className='flex justify-tart items-start border-r-2 p-2 border-black'>
                            <p>İBAN SAHİBİ</p>
                        </div>
                        <div className='flex justify-center items-center p-2'>
                            <p>DAKE EĞİTİM LİMİTED ŞİRKETİ</p>
                        </div>
                    </div>


                        <div className='mt-2 text-sm text-center'>
                            <p>NOT : Havale gönderimi yapıldıktan sonra whatsapp dan iletişime geçiniz</p>
                        </div>

                </div>
                :
                null
                }
                {/* iban conmponent is finish */}
            </div>


        </div>
        
        <form action="" method="post" className='xl:ms-40 lg:ms-40 md:ms-40'>
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
    </div>
  )
}

export default SignUpForm