import React from 'react'
import Header from '../../components/Header'
import UpBar from '../../components/UpBar'
import Carousel from './Carousel'
import Services from './Services'
import Prefer from './Prefer'
import Banner from './Banner'
import Footer from '../../components/Footer'
import Contact from './Contact'

function Index() {
  return (
    <div>
        <UpBar />
        <Header />
        <Carousel />
        <Services />
        <Prefer />
        <Banner />
        <Contact />
        <Footer />
    </div>
  )
}

export default Index