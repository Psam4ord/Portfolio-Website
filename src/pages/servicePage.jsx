import React from 'react'
import NavBar from '../Components/Layout/navBar';
import Footer from '../Components/Layout/footer';



const ServicePage = () => {


  return (
    <>
      <NavBar />
      <div className=' mt-20 p-4'>
        {/* Portfolio works here*/}
        <h1 className=' p-1 uppercase font-medium'>Portfolio</h1>

        {/* image sample here */}
        <div className='xsm:w-full  border-bgSecondary '>
          <li className='hover:text-[#78dcfa]'><a href='https://frontendmentor-landingpage.netlify.app'
            target="_blank" rel="noreferrer"> Mentorship Program </a> </li>
        </div>

        <div>
          <li className='hover:text-[#78dcfa]'><a href='https://kerry-gallery.netlify.app/'
            target="_blank" rel="noreferrer"> Gallery clone </a> </li>
        </div>
        <div>
          <li className='hover:text-[#78dcfa]'><a href='https://portfoliosite-s87n.onrender.com'
            target="_blank" rel="noreferrer"> Portfolio website </a> </li>
        </div>

        {/* Testimony swipers here */}
      </div>
      <Footer />
    </>
  )
}

export default ServicePage;