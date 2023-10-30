import React from 'react'
import NavBar from '../Components/Layout/navBar';
import Footer from '../Components/Layout/footer';
import AddressCard from '../Components/contact/Address';
import Email from '../Components/contact/email';
import Phone from '../Components/contact/phone';
import { FaLinkedinIn, FaWhatsapp, } from 'react-icons/fa';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';



const Contact = () => {
  return (
    <div> 
      <NavBar />
      <div className='font-semibold bg-bgPrimary m-2 rounded-md 
      xsm:mt-24 p-2'> 
      <h1 className='text-center p-1  font-black'>ADDRESS</h1>
      <AddressCard />
      <Phone />
      <Email />
      </div>
      
      <div className='font-semibold bg-bgPrimary m-2 rounded-md mt-4 p-2' >
      <h1 className='text-center p-1 font-black'>SOCIAL MEDIA</h1>
      <ul className=" flex justify-center space-x-8 list-none p-2 mb-4">
            <li className=' hover:text-[#0174BE]'><a href="http://www.linkedin.com/in/hayford-sammor-duah-7a8074186"
                target="_blank" rel="noreferrer"><FaLinkedinIn /></a>  </li>
            <li className=' hover:text-[#0174BE]' ><a href="http://github.com/Psam4ord"
                target="_blank" rel="noreferrer"><FaGithub /></a>  </li>
            <li className=' hover:text-[#0174BE]'> <a href="https://twitter.com/Kerry17_"
                target="_blank" rel="noreferrer"><FaXTwitter />  </a> </li>
            <li className=' hover:text-[#0174BE]'><a href="https://wa.me/233547411756"
                target="_blank" rel="noreferrer"><FaWhatsapp /> </a>  </li>
        </ul>
      </div>
      
        <Footer />
    </div>
  )
}

export default Contact;