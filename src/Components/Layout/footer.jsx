import React from "react";
import Phone from "../contact/phone";
import Email from "../contact/email";

import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
//import location icon



const Footer = () => {

    return (
        <div class=" relative mt-10">

            <div class="xsm:w-full flex flex-wrap h-3/4 bg-[#0f172a] text-white pt-4">

                <div className="flex text-[#aaa4a4] text-lg">
                    <span className=" p-2">
                        <h3 className="text-2xl">Contact Address</h3>
                        <ul>


                            <li className="flex items-center space-x-2 ">
                                <li className="flex items-center space-x-2 ">

                                    <h3>Location icon here</h3>
                                </li>

                                <AiOutlinePhone />
                                < Phone />
                            </li>

                            <li className="flex items-center space-x-2" >
                                <AiOutlineMail />
                                <Email />
                            </li>
                        </ul>
                    </span>
                </div>

                <div className="flex text-[#a4aaaa] text-lg">
                    <span className="p-2">
                        <h3 className="text-2xl">Futher Info</h3>
                        <ul>Home</ul>
                        <ul>About</ul>
                        <ul>Resume</ul>
                        <ul>Services</ul>
                        <ul>Contact</ul>
                    </span>
                </div>
                <div className=" flex flex-row space-x-1">
                    <ul class=" flex space-x-2 list-none text-[#aaa4a4] p-2">
                        <li> <FaLinkedinIn /> </li>
                        <li><FaXTwitter />  </li>
                        <li> <FaInstagram /></li>
                        <li> <FaWhatsapp /> </li>
                    </ul>
                    <span className=" flex flex-row">
                        <input className=" rounded-l-lg h-auto" type="email  " placeholder=" Email" />
                        <button className="xsm:bg-btnPrimary hover:bg-btnHover 
                    hover:text-[#080808] text-[#fffefe] p-1 rounded-r-lg">Send Email</button>
                    </span>
                </div>

                <span class=" bg-[#0e0d0daf] flex flex-row w-full p-2 pb-4 text-[#aaa4a4] text-sm">
                    <p className="flex flex-nowrap " translate="no">copyright &copy; 2023 | KerryInc&reg;</p>
                    <p className="flex flex-nowrap "> All Rights Reserved</p>


                </span>
            </div>

        </div>
    )

}


export default Footer;