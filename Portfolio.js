import React from 'react'
import Navabar from './Navbar'
import Home from './Home'
import Footer from './Footer'

const Portfolio = ({formData}) => {
  return (
    <div className='portfolio'>
        <Navabar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default Portfolio
