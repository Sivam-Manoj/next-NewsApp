import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'
import NewsItems from './NewsItems/NewsItems'

const page = () => {
  return (
    <>
    <Navbar/>
    <NewsItems/>
    <Footer/>
    
    </>
  )
}

export default page