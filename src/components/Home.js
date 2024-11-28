import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import ProductShowcase from './ProductShowcase'
import Footer from './Footer'


export const Home = () => {
 
  return (
    <div>

    <Navbar />
    <Carousel/>
    <ProductShowcase/>
    <Footer/>
    </div>
  )
}
