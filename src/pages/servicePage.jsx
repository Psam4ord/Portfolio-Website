import React from 'react'
import NavBar from '../Components/Layout/navBar';
import Footer from '../Components/Layout/footer';
import Slider from '../Components/Slides/Swipper';


const ServicePage = () => {


  return (
    <>
      <NavBar />
      <div className=' mt-20 p-4'>
        {/* Portfolio works here*/}


        <div className=' bg-bgPrimary rounded-md p-3 m-2'>
          <h3 className='uppercase text-center p-1 font-bold'> Portfolio</h3>
          <ul className='flex justify-center xsm:flex-wrap space-x-2 h-auto'>
          </ul>
          {/* image sample here */}
          <div className='xsm:w-full  border-bgSecondary '>
            <li className='hover:text-[#78dcfa]'><a href='https://frontendmentor-landingpage.netlify.app'
              target="_blank" rel="noreferrer"> Mentorship Program </a> </li>
          </div>

          <div>
            <li className='hover:text-[#78dcfa]'><a href='https://kerry-gallery.netlify.app/'
              target="_blank" rel="noreferrer"> Gallery clone </a> </li>
          </div>
        </div>

        {/* Testimony swipers here */}
        <div className=' bg-bgPrimary rounded-md p-3 m-2'>
          <h3 className='uppercase text-center p-1 font-bold'> Testimonials</h3>
          <ul className='flex justify-center xsm:flex-wrap space-x-2 h-auto'>
          <p>incoming...</p>
          </ul>
          <Slider />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ServicePage;