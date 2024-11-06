import React from 'react'
import Header from '../../components/Header'
import UpBar from '../../components/UpBar'
import Carousel from './Carousel'
import Services from './Services'
import Prefer from './Prefer'

function Index() {
  return (
    <div>
        <UpBar />
        <Header />
        <Carousel />
        <Services />
        <Prefer />
    </div>
  )
}

export default Index