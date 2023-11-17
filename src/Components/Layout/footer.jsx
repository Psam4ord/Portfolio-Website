import React from "react";
import Phone from "../contact/phone";
import Email from "../contact/email";
import { Link } from "react-router-dom";
import AddressCard from '../contact/Address'
import { FaLinkedinIn, FaWhatsapp, } from 'react-icons/fa';

import { FaXTwitter, FaGithub } from 'react-icons/fa6';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

//import location icon


const Footer = () => {
    return (
        <footer  id="footer" className=" w-full mt-10 bottom-0">
            <div className="xsm:w-full xsm:flex-col flex flex-wrap h-3/4 bg-[#0f172a] text-white pt-4">
                <div className="tablet:flex tablet:space-x-10 tablet:m-4  ">


                    <div className="flex text-[#aaa4a4] text-lg md">
                        <span className="  sm:pt-10 pb-2 p-2 tablet:pt-0 ">
                            <h3 className="text-2xl font-bold">Contact Address</h3>
                            <ul className=" space-y-1 pt-1">
                                <li className="flex items-center space-x-2 ">
                                    <AddressCard />
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
                            <h3 className="text-2xl font-bold">Futher Info</h3>
                            <ul>
                                <li className='hover:text-[#ccc]'> <Link to='/'>Home </Link></li>
                                <li className='hover:text-[#ccc]'> <Link to='/about'>About </Link></li>
                                <li className='hover:text-[#ccc]'> <Link to='/service'>Service </Link></li>
                                <li className='hover:text-[#ccc]'> <Link to='/contact'>Contact </Link></li>
                            </ul>


                        </span>
                    </div>
                </div>


                {/* Social handles */}
                <hr className=" h-2 text-[#2f335e]" />
                <div className="xsm:flex-col flex space-x-1 items-center">
                    <ul className=" flex space-x-4  list-none text-[#aaa4a4] p-2 mb-4">
                        <li className=' hover:text-[#fff]'><a href="http://www.linkedin.com/in/hayford-sammor-duah-7a8074186"
                            target="_blank" rel="noreferrer"><FaLinkedinIn /></a>  </li>
                        <li className=' hover:text-[#fff]' ><a href="http://github.com/Psam4ord"
                            target="_blank" rel="noreferrer"><FaGithub /></a>  </li>
                        <li className=' hover:text-[#fff]'> <a href="https://twitter.com/Kerry17_"
                            target="_blank" rel="noreferrer"><FaXTwitter />  </a> </li>
                        <li className=' hover:text-[#fff]'><a href="https://wa.me/233547411756"
                            target="_blank" rel="noreferrer"><FaWhatsapp /> </a>  </li>
                    </ul>
                    <span className="flex flex-row mb-4 ">
                        <input className=" bg-[#ccc] text-[#fff] rounded-l-lg" type="email" placeholder=" Email" />
                        <button className="xsm:bg-btnPrimary hover:bg-btnHover 
        hover:text-[#080808] text-[#fffefe] p-1 rounded-r-lg">Send Email</button>
                    </span>
                </div>


                <span className=" xsm:justify-center bg-[#0e0d0daf] flex flex-row w-full p-2 pb-4 text-[#aaa4a4] text-sm">
                    <p className="flex flex-nowrap " translate="no">copyright &copy; 2023 | KerryInc&reg;</p>
                    <p className="flex flex-nowrap "> All Rights Reserved</p>
                </span>
            </div>


        </footer>
    )

}


export default Footer;