import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    var settings = {
    dots: true,              // Navigasyon noktaları göster
    infinite: true,          // Sonsuz döngü
    speed: 500,              // Kaydırma hızı
    slidesToShow: 1,         // Görüntülenecek öğe sayısı
    slidesToScroll: 1,       // Kaydırılacak öğe sayısı
    autoplay: true,          // Otomatik kaydırma
    autoplaySpeed: 4000      // Otomatik kaydırma hızı (ms)
      };
  return (
    <div className='max-w-full overflow-x-hidden flex justify-center items-center mt-1'>
        <Slider className='w-full' {...settings}>
        <div>
          <img src="https://www.theme-junkie.com/wp-content/uploads/instagram-carousel-templates-examples.jpg" className='w-full' alt="Slide 1" />
        </div>
        <div>
          <img src="https://www.theme-junkie.com/wp-content/uploads/instagram-carousel-templates-examples.jpg" className='w-full' alt="Slide 2" />
        </div>
        <div>
          <img src="https://www.theme-junkie.com/wp-content/uploads/instagram-carousel-templates-examples.jpg" className='w-full' alt="Slide 3" />
        </div>
        <div>
          <img src="https://www.theme-junkie.com/wp-content/uploads/instagram-carousel-templates-examples.jpg" className='w-full ' alt="Slide 4" />
        </div>
        </Slider>
    </div>
  )
}

export default Carousel