import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = 'our program' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle = 'Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle = 'Testimonials' title='What Students Say'/>
        <Testimonials/>
        <Title subTitle = 'Contact Us' title='Get In Touch'/>
        <Contacts />
        <Footer/>
      </div>
    </>
  )
}

export default App
