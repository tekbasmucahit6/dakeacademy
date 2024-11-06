import React from 'react'

function Services() {
  return (
    <div className='my-10 flex flex-col justify-center items-center bg-gray-100 p-10'>
        <h2 className='text-3xl text-[rgb(51,51,51)]'>DAKE ne sunuyor?</h2>


        <div className='grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 p-5 gap-10'>
            {/* card 1 */}
            <div className='flex flex-col justify-center items-center h-96 gap-4 p-4'>
                <div className='flex justify-center items-center text-center h-4/5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3'>
                    <p>Yapay Zeka Destekli, Sana ve Hedefine Özel Çalışma Programı</p>
                </div>

                <div className='border rounded shadow bg-white py-2 px-4 w-full text-center'>
                    <p className='text-red-500 font-semibold'>Nasıl Oluyor Öğren</p>
                </div>
            </div>

            {/* card 2 */}
            <div className='flex flex-col justify-center items-center h-96 gap-4 p-4'>
                <div className='flex justify-center items-center text-center h-4/5 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-3'>
                    <p>Toplamda 1000 Saati Aşan Ders Anlatım Videoları</p>
                </div>

                <div className='border rounded shadow bg-white py-2 px-4 w-full text-center'>
                    <p className='text-red-500 font-semibold'>Detaylarını Öğren</p>
                </div>
            </div>

             {/* card 3 */}
             <div className='flex flex-col justify-center items-center h-96 gap-4 p-4'>
                <div className='flex justify-center items-center text-center h-4/5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3'>
                    <p>DAKE, Palme, Limit ve Avantaj Türkiye'nin En Güçlü Kitap ve Test Yayıncıları Bir Arada!</p>
                </div>

                <div className='border rounded shadow bg-white py-2 px-4 w-full text-center'>
                    <p className='text-red-500 font-semibold'>Kitapları İncele</p>
                </div>
            </div>

             {/* card 4 */}
             <div className='flex flex-col justify-center items-center h-96 gap-4 p-4'>
                <div className='flex justify-center items-center text-center h-4/5 bg-gradient-to-r from-red-500 to-rose-500 text-white px-3'>
                    <p>Tüm Soruların Videolu Çözümleri</p>
                </div>

                <div className='border rounded shadow bg-white py-2 px-4 w-full text-center'>
                    <p className='text-red-500 font-semibold'>Soru ve Çözüm Videolarını İncele</p>
                </div>
            </div>

            {/* card 5 */}
            <div className='flex flex-col justify-center items-center h-96 gap-4 p-4'>
                <div className='flex justify-center items-center text-center h-4/5 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3'>
                    <p>Gerçek Sınav Deneyimi Yaşatan Deneme Sınavları</p>
                </div>

                <div className='border rounded shadow bg-white py-2 px-4 w-full text-center'>
                    <p className='text-red-500 font-semibold'>YKS'ye Benzer Soruları Keşfet</p>
                </div>
            </div>

        </div>


    </div>
  )
}

export default Services