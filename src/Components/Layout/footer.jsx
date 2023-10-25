import React from "react";
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter, FaInstagram } from 'react-icons/fa6'



const Footer = () => {

    return (
        <div>

            <h1 class = " text-red-500"> SAMMORDUAH HAYFORD</h1>
            <ul class = " list-none">
                <li> <FaLinkedinIn /> LinkedIn  </li>
                <li> <FaWhatsapp /> WhatsApp </li>
                <li><FaXTwitter />Twitter  </li>
                <li> <FaInstagram />Instagram </li>
            </ul>
            <span>
                <p>KerryInc &reg;</p>
                <p translate="no"> &copy;2023</p>
                <p>All Rights Reserved</p>
            </span>
        </div>
    )

}


export default Footer;