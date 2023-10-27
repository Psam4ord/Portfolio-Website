import React from "react";
import Phone from "../contact/phone";
import Email from "../contact/email";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
//import location icon


const Footer = () => {
    return (
        <div className=" relative mt-10">

            <div className="xsm:w-full xsm:flex-col flex flex-wrap h-3/4 bg-[#0f172a] text-white pt-4">

                {/* Address information */}
                <div className="flex text-[#aaa4a4] text-lg">
                    <span className=" p-2 pt-10">
                        <h3 className="text-2xl">Contact Address</h3>
                        <ul>
                            <li className="flex items-center space-x-2 ">
                                <h3>Location details & icon here</h3>
                            </li>

                            <li className="flex items-center space-x-2 ">
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

                {/* Further information */}
                <hr className=" xsm:flex  h-2 text-[#2f335e] mt-4" />
                <div className="flex text-[#a4aaaa] text-lg">
                    <span className="p-2">
                        <h3 className="text-2xl">Futher Info</h3>
                        <ul>
                            <li> <a href="/"> </a>Home</li>
                            <li> <Link to='/about'>About </Link></li>
                            <li> <a href="#"> </a>Resume</li>
                            <li> <a href="#"> </a>Services</li>
                            <li> <a href="#"> </a>Contact</li>
                        </ul>

                    </span>
                </div>


                {/* Social handles */}
                <hr className=" h-2 text-[#2f335e]" />
                <div className="xsm:flex-col flex space-x-1 items-center">
                    <ul className=" flex space-x-4  list-none text-[#aaa4a4] p-2 mb-4">
                        <li><a href="#"><FaLinkedinIn /></a>  </li>
                        <li> <a href="#"><FaXTwitter />  </a> </li>
                        <li> <a href="#"><FaInstagram /> </a></li>
                        <li><a href="#"><FaWhatsapp /> </a>  </li>
                    </ul>
                    <span className="flex flex-row mb-4 ">
                        <input className=" bg-[#ccc] text-[#fff] rounded-l-lg" type="email" placeholder=" Email" />
                        <button className="xsm:bg-btnPrimary hover:bg-btnHover 
                    hover:text-[#080808] text-[#fffefe] p-1 rounded-r-lg">Send Email</button>
                    </span>
                </div>

                <span className=" bg-[#0e0d0daf] flex flex-row w-full p-2 pb-4 text-[#aaa4a4] text-sm">
                    <p className="flex flex-nowrap " translate="no">copyright &copy; 2023 | KerryInc&reg;</p>
                    <p className="flex flex-nowrap "> All Rights Reserved</p>


                </span>
            </div>

        </div>
    )

}


export default Footer;