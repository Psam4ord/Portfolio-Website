import React from 'react';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <>
      <div className=" flex justify-end text-[#ccc] w-full 
      h-1/4 bg-bgSecondary space-x-2 p-2 ">
        <span>
          <ul className='flex space-x-4'>
            <li className='hover:text-[#fff]'><a href='#'> <FaLinkedinIn /> </a> </li>
            <li className='hover:text-[#fff]'><a href='#'> <FaXTwitter /> </a> </li>
            <li className='hover:text-[#fff]'><a href='#'> <FaInstagram /> </a> </li>
            <li className='hover:text-[#fff]'><a href='#'> <FaWhatsapp /> </a> </li>
          </ul>
        </span>
      </div>

      <div className='xsm:h-12  flex  justify-center w-full mt-4
        bg-[#fff] font-medium font-sans  shadow-sm'>
        <ul className='flex xsm:space-x-2 '>
          <li className='hover:text-[#ccc]'> <a href='#'> Home</a></li>
          <li className='hover:text-[#ccc]'> <a href='#'> About</a></li>
          <li className='hover:text-[#ccc]'> <a href='#'> Resume</a></li>
          <li className='hover:text-[#ccc]'> <a href='#'> Services</a></li>
          <li className='hover:text-[#ccc]'> <a href='#'> Contact</a></li>
        </ul>
      </div>

    </>
  )
}

export default NavBar