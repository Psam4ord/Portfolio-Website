import React from 'react';
import NavBar from '../Components/Layout/navBar';
import Footer from '../Components/Layout/footer';


const AboutPage = () => {

  const handleButtonClick = () => {
    window.open('https://docs.google.com/document/d/1uzjtTt8RkFNyq36AShMT16yGJzospGjbJgT0kAzpSrw/edit?usp=sharing', '_blank')
  }

  return (
    <>
      <NavBar />
      <div className='bg-bgPrimary rounded-md p-2 m-2 xsm:mt-24 pl-4 pr-4'>
        <h1 className='uppercase text-center p-1 font-semibold 
        '> About</h1>
        <p> I am a passionate junior Software developer, <strong> <i> a problem solving-enthusiast. </i></strong>I am passionate
          of developing efficient, performance base and complex Web applications.
          I enjoy finding solutions to problems by writing codes.

        </p>
        <p>
          I use Front-end technology frameworks like <strong> Reactjs, Figma & Tailwindcss. </strong>
          I am passionte about full stack development which I hope
          to add to my stack in the coming years.
        </p>
      </div>

      <div className='flex bg-bgPrimary m-2 rounded-md p-3'>
      <h3 className='uppercase text-center p-1 font-bold '>Technologies </h3>
        <ul className='flex justify-center xsm:flex-wrap space-x-2 space-y-1  h-auto '>
          <li className='bg-[#fff] p-1'> <h3>Html</h3></li>
          <li className='bg-[#fff] p-1'> <h3>Css</h3></li>
          <li className='bg-[#fff] p-1'> <h3>Javascript</h3></li>
          <li className='bg-[#fff] p-1'> <h3>React</h3></li>
          <li className='bg-[#fff] p-1'> <h3>Tailwindcss</h3></li>
          <li className='bg-[#fff] p-1'> <h3>Figma</h3></li>
        </ul>
      </div>
      <div className='flex  bg-bgPrimary m-2 rounded-md p-3'>
      <h3 className='uppercase text-center p-1 font-bold '>Languages </h3>
        <ul className='flex justify-center xsm:flex-wrap space-x-2 space-y-1  h-auto '>
          <li className='bg-[#fff] p-1'> <h3>English</h3></li>
          <li className='bg-[#fff] p-1'> <h3>Twi</h3></li>
          
        </ul>
      </div>

      <div className=' w-full flex bg-bgPrimary rounded-md p-3 m-2'>
        <h3 className='uppercase text-center p-1 font-bold w-3/4'>Soft Skills</h3>
        <ul className='flex xsm:flex-wrap space-x-2 space-y-1  h-auto'>
          <li className='bg-[#fff] p-1 '>Patience & Perseverance ,</li>
          <li className='bg-[#fff] p-1 '>Problem Solving,</li>
          <li className='bg-[#fff] p-1 '>Anatical Reasoning,</li>
          <li className='bg-[#fff] p-1 '>Communication ,</li>
          <li className='bg-[#fff] p-1 '>Collaboration.</li>
        </ul>
      </div>
      <div className='w-full flex bg-bgPrimary rounded-md p-3 m-2'>
        <h3 className='uppercase  p-1 font-bold'> Technical Skills</h3>
        <ul className='flex xsm:flex-wrap space-x-2 space-y-1  h-auto'>
          <li className='bg-[#fff] p-1 '>Programming fundamentals,</li>
          <li className='bg-[#fff] p-1 '>Algorithms,</li>
          <li className='bg-[#fff] p-1 '>Git & Github,</li>
          <li className='bg-[#fff] p-1 '>Data Structures.</li>
        </ul>
      </div>
      <div className='flex w-full bg-bgPrimary rounded-md p-3 m-2'>
        <h3 className='uppercase text-center p-1 font-bold'> Interest & Hobbies</h3>
        <ul className='flex xsm:flex-wrap space-x-2 space-y-1 h-auto'>
          <li className='bg-[#fff] p-1 '>Coding,</li>
          <li className='bg-[#fff] p-1 '>Football,</li>
          <li className='bg-[#fff] p-1 '>Video Games,</li>
          <li className='bg-[#fff] p-1 '>Music.</li>
        </ul>
      </div>
      
      
      <div className=' flex justify-center'>
        <button className=' bg-btnPrimary hover:bg-btnHover hover:text-[#000000] text-[#fff]
         p-2 rounded m-2 font-mono'
          type='button'
          onClick={handleButtonClick}
        >
          View Resume</button>

      </div>

      <div className=' bg-bgPrimary rounded-md p-3 m-2'>
        <h3 className='uppercase text-center p-1 font-bold'> Portfolio</h3>
        <ul className='flex justify-center xsm:flex-wrap space-x-2 h-auto'>
         
        </ul>
      </div>

      <div className=' bg-bgPrimary rounded-md p-3 m-2'>
        <h3 className='uppercase text-center p-1 font-bold'> Testimonials</h3>
        <ul className='flex justify-center xsm:flex-wrap space-x-2 h-auto'>
         
        </ul>
      </div>

      <Footer />
    </>
  )
}

export default AboutPage;