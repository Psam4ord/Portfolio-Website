import React from 'react'
import NavBar from '../Components/Layout/navBar';
import Footer from '../Components/Layout/footer';


const ServicePage = () => {
  return (
    <>
      <NavBar />
      <div className=' mt-20'>
        {/* Portfolio works here*/}
        <h1>Portfolio</h1>
        {/* image sample here */}
        <li className='hover:text-[#78dcfa]'><a href='https://frontendmentor-landingpage.netlify.app'
          target="_blank" rel="noreferrer"> Mentorship Program </a> </li>

        {/* Testimony swipers here */}
      </div>
      <Footer />
    </>
  )
}

export default ServicePage;