import React from 'react';
import NavBar from '../Components/Layout/navBar';
import Footer from '../Components/Layout/footer';


const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div className='bg-bgPrimary rounded-md p-2 m-2 '>
        <h1 className='uppercase text-center p-1 font-semibold hover:text-[#ccc]'> About</h1>

        <p> I am a Software developer with the passion
          of developing efficient, performance base and complex Web applications.
          My favourite stack is <strong>Front-End.</strong>
        </p>
        <p>
          I use Front-end technology frameworks like <strong> Reactjs, Figma & Tailwindcss. </strong>
          I am passionte about full stack development which I hope
          to add to my stack in the coming years.
        </p>
      </div>

      <div className='flex bg-bgPrimary m-2 rounded-md p-2'>
        <ul className='flex space-x-2 h-auto'>
          <li className='bg-[#fff] p-1'> <h3>Html</h3></li>
          <li className='bg-[#fff] p-1'> <h3>Css</h3></li>
          <li className='bg-[#fff] p-1'> <h3>Javascript</h3></li>
          <li className='bg-[#fff] p-1'> <h3>React</h3></li>
        </ul>
      </div>
      <div className=' flex justify-center'>
        <button className=' bg-btnPrimary hover:bg-btnHover hover:text-[#000000] text-[#fff]
         p-2 rounded m-2 font-mono '>
          <a href='#' download= " "> </a>Download Resume</button>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage;