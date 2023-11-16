import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaGithub, FaRegLightbulb } from 'react-icons/fa6';
// import MdDarkMode from 'react-icons/md'  -- Add dark mode --

const NavBar = () => {
  return (
    <div className=' fixed top-0 z-40 w-full tablet:text-xl '>
      <div className=" flex justify-end text-[#ccc] w-full 
      h-1/4 bg-bgSecondary space-x-2 p-2 laptop:h-[60px] laptop:pt-5">
        <span>
          <ul className='flex space-x-4 tablet:text-xl laptop:space-x-5'>
            <li className='hover:text-[#fff]'><a href='http://www.linkedin.com/in/hayford-sammor-duah-7a8074186'
              target="_blank" rel="noreferrer"> <FaLinkedinIn /> </a> </li>
               <li className=' hover:text-[#fff]'><a href="http://github.com/Psam4ord"
                            target="_blank" rel="noreferrer"><FaGithub /></a>  </li>
            <li className='hover:text-[#fff]'><a href='https://twitter.com/Kerry17_'
              target="_blank" rel="noreferrer"> <FaXTwitter /> </a> </li>
            <li className='hover:text-[#fff]'><a href='https://wa.me/233547411756'
              target="_blank" rel="noreferrer"> <FaWhatsapp /> </a> </li>
            {/* <li className='hover:text-[#fff]'
              target="_blank" rel="noreferrer"
            ><a href='#'> <FaInstagram /> </a> </li> */}
          </ul>
        </span>
      </div>

      <div className='xsm:h-12  flex  justify-center w-full p-2
        bg-[#fff] font-medium font-sans  shadow-sm'>
        <ul className='flex xsm:space-x-2 '>
          <li className='hover:text-[#ccc]'> <Link to='/'>Home </Link></li>
          <li className='hover:text-[#ccc]'> <Link to='/about'>About </Link></li>
          <li className='hover:text-[#ccc]'> <Link to='/service'>Service </Link></li>
          <li className='hover:text-[#ccc]'> <Link to='/contact'>Contact </Link></li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar