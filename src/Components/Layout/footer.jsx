import React from "react";
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter, FaInstagram } from 'react-icons/fa6'



const Footer = () => {

    return (
        <div class=" relative mt-10">

            <div class="xsm:w-full flex flex-wrap h-3/4 bg-[#0f172a] text-white pt-4">
                <span>
                    <ul class=" flex space-x-2 list-none text-[#aaa4a4] p-2">
                        <li> <FaLinkedinIn /> </li>
                        <li><FaXTwitter />  </li>
                        <li> <FaInstagram /></li>
                        <li> <FaWhatsapp /> </li>
                    </ul>
                    <span> 
                    <input type="email" />
                    </span>
                </span>

                <span class=" bg-[#0e0d0daf] flex flex-row w-full p-2 pb-4 text-[#aaa4a4]">
                    <p className="flex flex-nowrap" translate="no">copyright &copy; 2023 | KerryInc&reg;</p>
                    <p className="flex flex-nowrap"> All Rights Reserved</p>


                </span>
            </div>

        </div>
    )

}


export default Footer;