import React from 'react';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <div>
      <div className="w-full h-1/4 bg-bgSecondary">
        <span className='flex text-[#ccc] space-x-2 p-2 '>
          <ul className='flex space-x-2'>
            <li><a href='#'> <FaLinkedinIn /> </a> </li>
            <li><a href='#'> <FaXTwitter /> </a> </li>
            <li><a href='#'> <FaInstagram /> </a> </li>
            <li><a href='#'> <FaWhatsapp /> </a> </li>
          </ul>
        </span>
      </div>

      <div className='xsm:h-20  flex w-full items-center bg-bgPrimary '>
        <ul className='flex xsm:space-x-2'>
          <li> <a href='#'> Home</a></li>
          <li> <a href='#'> About</a></li>
          <li> <a href='#'> Resume</a></li>
          <li> <a href='#'> Services</a></li>
          <li> <a href='#'> Contact</a></li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar