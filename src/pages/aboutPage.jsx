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
      <div className='tablet:m-5 '>
        <div className='bg-bgPrimary rounded-md p-2 m-2 xsm:mt-24 pl-4 pr-4 tablet:text-xl '>
          <h1 className='uppercase text-center p-1 font-bold 
        '> About</h1>
          <p className=' p-2 rounded-md tablet:text-xl'> I am a passionate junior Software developer, <strong> <i> a problem solving-enthusiast. </i></strong>I am passionate
            of developing efficient, performance base and complex Web applications.
            I enjoy finding solutions to problems by writing codes.
          </p>
        </div>

        <div className='flex bg-bgPrimary m-2 rounded-md p-3  tablet:text-xl '>
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
        <div className='flex  bg-bgPrimary m-2 rounded-md p-3 tablet:text-xl '>
          <h3 className='uppercase text-center p-1 font-bold '>Languages </h3>
          <ul className='flex justify-center xsm:flex-wrap space-x-2 space-y-1  h-auto '>
            <li className='bg-[#fff] p-1'> <h3>English</h3></li>
            <li className='bg-[#fff] p-1'> <h3>Twi</h3></li>

          </ul>
        </div>

        <div className=' flex bg-bgPrimary rounded-md p-3 m-2 tablet:text-xl '>
          <h3 className='uppercase text-center p-1 font-bold tablet:text'>Soft Skills</h3>
          <ul className='flex xsm:flex-wrap space-x-2 space-y-1  h-auto'>
            <li className='bg-[#fff] p-1 '>Patience & Perseverance ,</li>
            <li className='bg-[#fff] p-1 '>Problem Solving,</li>
            <li className='bg-[#fff] p-1 '>Anatical Reasoning,</li>
            <li className='bg-[#fff] p-1 '>Communication ,</li>
            <li className='bg-[#fff] p-1 '>Collaboration.</li>
          </ul>
        </div>
        <div className=' flex bg-bgPrimary rounded-md p-3 m-2 tablet:text-xl '>
          <h3 className='uppercase  p-1 font-bold'> Technical Skills</h3>
          <ul className='flex xsm:flex-wrap space-x-2 space-y-1  h-auto'>
            <li className='bg-[#fff] p-1 '>Programming fundamentals,</li>
            <li className='bg-[#fff] p-1 '>Algorithms,</li>
            <li className='bg-[#fff] p-1 '>Git & Github,</li>
            <li className='bg-[#fff] p-1 '>Data Structures.</li>
          </ul>
        </div>
        <div className='flex bg-bgPrimary rounded-md p-3 m-2 tablet:text-xl '>
          <h3 className='uppercase text-center p-1 font-bold'> Interest & Hobbies</h3>
          <ul className='flex xsm:flex-wrap space-x-2 space-y-1 h-auto'>
            <li className='bg-[#fff] p-1 '>Coding,</li>
            <li className='bg-[#fff] p-1 '>Football,</li>
            <li className='bg-[#fff] p-1 '>Video Games,</li>
            <li className='bg-[#fff] p-1 '>Music.</li>
          </ul>
        </div>


        <div className=' flex justify-center pb-5'>
          <button className=' bg-btnPrimary hover:bg-btnHover hover:text-[#000000] text-[#fff]
         p-2 rounded m-2 font-mono tablet:text-xl '
            type='button'
            onClick={handleButtonClick}
          >
            View Resume</button>

        </div>


      </div>
      <Footer />
    </>
  )
}

export default AboutPage;