import React from 'react';
import NavBar from '../Components/Layout/navBar';
import Footer from '../Components/Layout/footer';


const AboutPage = () => {

 const handleButtonClick = ()=>{
  window.open('https://docs.google.com/document/d/1uzjtTt8RkFNyq36AShMT16yGJzospGjbJgT0kAzpSrw/edit?usp=sharing', '_blank')
 
 }

  return (
    <>
      <NavBar />
      <div className='bg-bgPrimary rounded-md p-2 m-2 xsm:mt-24'>
        <h1 className='uppercase text-center p-1 font-semibold 
        '> About</h1>
        <p> I am a Software developer, <strong> <i> a problem solving-enthusiast. </i></strong>I am passionate
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
        <ul className='flex justify-center xsm:flex-wrap space-x-2 h-auto '>
          <li className='bg-[#fff] p-1'> <h3>Html</h3></li>
          <li className='bg-[#fff] p-1'> <h3>Css</h3></li>
          <li className='bg-[#fff] p-1'> <h3>Javascript</h3></li>
          <li className='bg-[#fff] p-1'> <h3>React</h3></li>
          <li className='bg-[#fff] p-1'> <h3>Tailwindcss</h3></li>
          <li className='bg-[#fff] p-1'> <h3>Figma</h3></li>
        </ul>
      </div>
      <div className=' flex justify-center'>
        <button  className=' bg-btnPrimary hover:bg-btnHover hover:text-[#000000] text-[#fff]
         p-2 rounded m-2 font-mono'
         type='button'
         onClick={handleButtonClick}
         >
          View Resume</button>

      </div>

      <div className=''>

      </div>
      <Footer />
    </>
  )
}

export default AboutPage;