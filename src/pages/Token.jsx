import React from 'react'
import banner from '../assets/images/banner.webp'
import { FaArrowRight } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiYoutubeFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Token = () => {
    return (
        <>
            <div className='px-3 lg:px-20 mt-5'>
                <div className='rounded-b-xl overflow-hidden border border-[#262626]'>
                    <div className=''>
                        <img src={banner} className='w-full h-56' alt="banner" />
                    </div>
                    <div className='bg-[#1F1F1F] flex gap-4 px-10 h-28'>
                        <div className='mt-[-40px] lg:mt-[-60px]'>
                            <div className='overflow-hidden rounded-2xl  border border-black'>
                                <img className="w-32 " src="https://res.cloudinary.com/glide/image/fetch/f_auto,h_150,c_limit/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fglide-prod.appspot.com%2Fo%2Ficon-images%252Fanonymous-b8b74b04-83a5-46d6-a2cc-25e0559d33df.png%3Falt%3Dmedia%26token%3D633ff17b-72a8-49f5-8f96-a06e64af4679" alt="logo" />
                            </div>
                        </div>
                        <div className='flex justify-between  w-full  mt-2 '>
                            <div className=''>
                                <h2 className='text-white font-bold text-2xl'>COIM Generate</h2>
                                <p className='text-white text-[12px] mt-1'>Generate COIM Tokens!</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className=' bg-[#1F1F1F] text-[#ce9600] rounded-xl my-10 py-8 px-10 border border-[#262626]'>
                    <div className='flex items-center justify-between hover:bg-[#262626] cursor-pointer pr-1 pl-2 py-1 rounded-lg transition-colors duration-100'>
                        <h6 className='text-white'>COIM Generation</h6>
                        <div className=' bg-[#2c281d] rounded-2xl px-2 py-1  flex gap-2 items-center'>
                            <div><FaArrowRight /></div>
                            <span>Minnnig</span>
                        </div>
                    </div>
                </div> */}
                <div className=' bg-[#1F1F1F] rounded-xl mt-8 mb-16 py-4 px-10 border border-[#262626]'>
                    <div className='flex justify-between w-full text-white'>
                        <p className='text-[12px]'>Generation Progress</p>
                        <span className='text-[12px]'>0.14%</span>
                    </div>
                    <div className='mt-4'>
                        <div className='bg-[#2c281d]  overflow-hidden rounded-md h-2 ' >
                            <div className='bg-[#ce9600] w-1 h-2 '></div>
                        </div>
                    </div>
                    <div className='flex items-center mt-7'>
                        <div className='pr-40'>
                            <span className='text-[13px] text-white'>Session Start</span>
                            <p className='text-[14px] text-white'>May 30, 2024 at 3:07 AM</p>
                        </div>
                        <div className='pr-40'>
                            <span className='text-[13px] text-white'>Session Start</span>
                            <p className='text-[14px] text-white'>May 30, 2024 at 3:07 AM</p>
                        </div>
                        <div className='pr-40'>
                            <span className='text-[13px] text-white'>Session Start</span>
                            <p className='text-[14px] text-white'>May 30, 2024 at 3:07 AM</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-4'>
                        <div className='pr-40'>
                            <span className='text-[13px] text-white'>Hourly Rate</span>
                            <p className='text-[14px] text-white'>0.140 COIM</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Token
