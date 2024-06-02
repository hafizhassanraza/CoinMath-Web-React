import React from 'react'
import banner from '../assets/images/banner.webp'
import { FaImage } from "react-icons/fa6";
import { AiOutlineShareAlt } from "react-icons/ai";
import { SiTicktick } from "react-icons/si";
import { LuLink } from "react-icons/lu";
import { Link } from 'react-router-dom';


const ProfileDetail = () => {
    return (
        <div className='px-10 lg:px-52 pb-10'>
            <div className='rounded-b-xl overflow-hidden border border-[#262626] '>
                <div className=''>
                    <img src={banner} className='w-full md:h-56' alt="banner" />
                </div>
                <div className='bg-[#1F1F1F] flex flex-col justify-center items-center gap-4 px-10 '>
                    <div className='mt-[-40px] lg:mt-[-60px]'>
                        <div className='overflow-hidden rounded-full  md:border border-black'>
                            <img className="md:w-32 w-20" src="https://res.cloudinary.com/glide/image/fetch/f_auto,h_150,c_limit/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fglide-prod.appspot.com%2Fo%2Ficon-images%252Fanonymous-b8b74b04-83a5-46d6-a2cc-25e0559d33df.png%3Falt%3Dmedia%26token%3D633ff17b-72a8-49f5-8f96-a06e64af4679" alt="logo" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h2 className='text-white text-center font-bold text-2xl'>CoinMath</h2>
                        <p className='text-[#5F5F5F] text-center py-2'>Welcome to CoinMath. Fill out the required details below to complete your onboarding and start generate $COIM!</p>
                    </div>
                </div>
            </div>
            <div className=' bg-[#1F1F1F] rounded-xl my-7  md:px-10 border border-[#262626]'>
                <div className=''>
                    <div className="relative px-6 pt-6 mb-3 flex text-white">
                        <h6 className="font-bold text-[16px]">First Name</h6>
                    </div>
                    <div className="pb-5 px-6">
                        <input
                            type="text"
                            className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                        />
                    </div>
                </div>
                <div className=''>
                    <div className="relative px-6 pt-2 mb-3 flex text-white">
                        <h6 className="font-bold text-[16px]">Surname</h6>
                    </div>
                    <div className="pb-5 px-6">
                        <input
                            type="text"
                            className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                        />
                    </div>
                </div>
                <div className=''>
                    <div className="relative px-6 pt-2 mb-3 flex text-white">
                        <h6 className="font-bold text-[16px]">Phone Number</h6>
                    </div>
                    <div className="pb-5 px-6">
                        <input
                            type="text"
                            className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                        />
                    </div>
                </div>
                <div>
                    <div className="relative px-6 pt-2 mb-3 flex text-white">
                        <h6 className="font-bold text-[16px]">Profile Image</h6>
                    </div>
                    <div className="pb-5 px-6">
                        <div className="flex items-center justify-center">
                            <label className="w-full flex gap-3 items-center px-3 py-2 bg-[#363636] text-white rounded-lg cursor-pointer hover:bg-[#4a4a4a] focus-within:ring-2 focus-within:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 transition-all ease-in-out">
                                <FaImage className="text-xl mb-1 text-[#5F5F5F]" />
                                <span className="text-[#5F5F5F]">Choose an image...</span>
                                <input
                                    type="file"
                                    className="opacity-0 w-0 h-0"
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='border-b-2 border-[#262626] mx-5 mb-2'></div>
                <div>
                    <div className="relative px-6 pt-2 mb-3 flex text-white">
                        <h6 className="font-bold text-[16px]">Referred by a friend?</h6>
                    </div>
                    <div className="pb-5 px-6">
                        <input
                            type="text"
                            placeholder='Enter your referrel code here...'
                            className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                        />
                    </div>
                </div>
                <div className='border-b-2 border-[#262626] mx-5 '></div>
                <div className='flex md:items-center gap-5 px-5 mx-4 py-3 my-5 rounded-xl bg-[#443919]'>
                    <div><LuLink /></div>
                    <h6 className='text-white'>Your referral code will be an randomly generated string of characters. If you'd like to create your own unique code instead, please use the text box below. </h6>
                </div>
                <div className=''>
                    <div className="relative px-6 pt-2 mb-3 flex text-white">
                        <h6 className="font-bold text-[16px]">Change My Custom Referral Code</h6>
                    </div>
                    <div className="pb-5 px-6">
                        <input
                            type="text"
                            placeholder='Enter your custom referrel code here...'
                            className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                        />
                    </div>
                </div>
                <div className="mb-10 mt-4">
                    <Link to='/profile'>
                        <div className="flex items-center bg-[#CE9600] hover:bg-[#CE9600]/90 justify-center mx-5 md:mx-0  my-3 lg:mx-80 rounded-lg cursor-pointer  border-solid border-blueGray-200">
                            <button
                                className="text-white flex items-center gap-2 background-transparent font-bold  px-6 py-2.5 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                <SiTicktick />Onboard me!
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetail
