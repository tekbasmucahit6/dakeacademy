import React from 'react'
import Header from '../../components/Header'
import UpBar from '../../components/UpBar'
import Carousel from './Carousel'
import Services from './Services'

function Index() {
  return (
    <div>
        <UpBar />
        <Header />
        <Carousel />
        <Services />
    </div>
  )
}

export default Index