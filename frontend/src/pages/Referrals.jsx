import React from 'react'
import banner from '../assets/images/banner.webp'
import { LuCopy } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";


const Referrals = () => {
    return (
        <>
            <div className='px-3 lg:px-20 mt-5'>
                <div className='rounded-b-xl overflow-hidden border border-[#262626]'>
                    <div className=''>
                        <img src={banner} className='md:w-full md:h-56' alt="banner" />
                    </div>
                    <div className='bg-[#1F1F1F] flex gap-4 px-10 h-28 md:h-24'>
                        <div className='mt-[-40px] lg:mt-[-45px]'>
                            <div className='overflow-hidden rounded-2xl  border border-black'>
                                <img className="w-32 " src="https://res.cloudinary.com/glide/image/fetch/f_auto,h_150,c_limit/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fglide-prod.appspot.com%2Fo%2Ficon-images%252Fanonymous-b8b74b04-83a5-46d6-a2cc-25e0559d33df.png%3Falt%3Dmedia%26token%3D633ff17b-72a8-49f5-8f96-a06e64af4679" alt="logo" />
                            </div>
                        </div>
                        <div className='flex justify-between  w-full  mt-2 '>
                            <div className=''>
                                <h2 className='text-white font-bold md:text-2xl'>My Referrals</h2>
                                <p className='text-white md:text-[12px] text-[14px] mt-1'>See how many people you've referred.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#1F1F1F] text-[#ce9600] rounded-xl mt-7 py-3 px-3 md:px-10 border border-[#262626]'>
                    <div className='flex items-center text-[#ce9600] justify-between   hover:bg-[#262626] pr-1 pl-2 py-1 cursor-pointer rounded-lg transition-colors duration-100'>
                        <div className='flex flex-col'>
                            <h6 className='text-white text-[14px]'>Refer Friends</h6>
                            <p className='text-white text-[11px]'>Invite your friends to join CoinMath. Tap to copy your code or select it below.</p>
                        </div>
                        <div className=' bg-[#2c281d] rounded-2xl px-3 py-1.5   flex gap-2 items-center'>
                            <div><IoShareSocialOutline /></div>
                            <span className='text-[12px]'>Copy</span>
                        </div>
                    </div>
                    <div className='flex items-center text-[#ce9600] justify-between mt-7  hover:bg-[#262626] pr-1 pl-2 py-1 cursor-pointer rounded-lg transition-colors duration-100'>
                        <h6 className='text-white text-[14px]'>Copy Referral Code</h6>
                        <div className=' bg-[#2c281d] rounded-2xl px-3 py-1.5  flex gap-2 items-center'>
                            <div><LuCopy /></div>
                            <span className='text-[12px]'>Copy</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex md:flex-row items-center gap-6 bg-[#1F1F1F] rounded-xl my-7 py-8 px-0 md:px-10 border border-[#262626]'>
                    <div className='overflow-hidden rounded-lg border border-[#262626] px-6 w-[80%] md:w-[50%] py-2'>
                        <span className='text-white text-[12px]'>You've referred</span>
                        <h6 className='text-white text-xl font-bold'>0</h6>
                        <span className='text-white text-[12px]'>people to CoinMath.</span>
                    </div>
                    <div className='rounded-lg border border-[#262626] px-6 w-[80%] md:w-[50%] py-2'>
                        <span className='text-[12px] text-[#ce9600]'>Resulting in a</span>
                        <h3 className='text-2xl font-bold text-[#fff]'>0.00%</h3>
                        <p className='text-sm text-gray-800'>Rate multiplier</p>
                    </div>
                </div>
                <div className=' bg-[#1F1F1F]  rounded-xl my-7 pt-2 px-10 border border-[#262626]'>
                    <h2 className='text-center w-full text-blue-400 font-bold text-xl pt-2 pb-5'>Refer a Friend & Boost Your COIM Mining Rate!</h2>
                    <h6 className='text-[13px] text-white pb-5'>Maximise your <span className='font-bold'>COIM mining rate</span> effortlessly through our Refer a Friend program. Here's how:</h6>
                    <div className='text-white text-sm pb-5 pl-4 border-b bo border-dotted border-[#262626]' >
                        <p>1. Tap the <span className='text-blue-400'>Refer a friend</span> button to grab your unique referral code.</p>
                        <p>2. Paste and send this code in a message to a friend.</p>
                        <p>3. When your friend signs up with your code, your mining rate increases by 10% per hour!</p>
                    </div>
                    <p className='text-white text-center py-3 text-sm italic'>Start referring and boost your earnings today!</p>
                </div>
            </div>



        </>
    )
}

export default Referrals



// <form onSubmit={handleProfileDetails} className='  bg-[#1F1F1F]'>
// <div className='border border-[#262626]'>
//     <div className=''>
//         <div className="relative px-6 pt-6 mb-3 flex text-white">
//             <h6 className="font-bold text-[16px]">First Name</h6>
//         </div>
//         <div className="pb-5 px-6">
//             <input
//                 type="text"
//                 onChange={(e) => setFname(e.target.value)}
//                 value={Fname}
//                 required
//                 className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
//             />
//         </div>
//     </div>
//     <div className=''>
//         <div className="relative px-6 pt-2 mb-3 flex text-white">
//             <h6 className="font-bold text-[16px]">Surname</h6>
//         </div>
//         <div className="pb-5 px-6">
//             <input
//                 type="text"
//                 onChange={(e) => setSurname(e.target.value)}
//                 value={surName}
//                 required
//                 className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
//             />
//         </div>
//     </div>
//     <div className=''>
//         <div className="relative px-6 pt-2 mb-3 flex text-white">
//             <h6 className="font-bold text-[16px]">Email</h6>
//         </div>
//         <div className="pb-5 px-6">
//             <input
//                 type="text"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 required
//                 className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
//             />
//         </div>
//     </div>
//     <div className=''>
//         <div className="relative px-6 pt-2 mb-3 flex text-white">
//             <h6 className="font-bold text-[16px]">Pin</h6>
//         </div>
//         <div className="pb-5 px-6">
//             <input
//                 type="text"
//                 onChange={(e) => setPin(e.target.value)}
//                 value={pin}
//                 required
//                 className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
//             />
//         </div>
//     </div>
//     <div className=''>
//         <div className="relative px-6 pt-2 mb-3 flex text-white">
//             <h6 className="font-bold text-[16px]">Phone Number</h6>
//         </div>
//         <div className="pb-5 px-6">
//             <input
//                 type="number"
//                 onChange={(e) => setPhone(e.target.value)}
//                 value={phone}
//                 required
//                 className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
//             />
//         </div>
//     </div>
//     <div className='border-b-2 border-[#262626] mx-5 mb-2'></div>
//     <div>
//         <div className="relative px-6 pt-2 mb-3 flex text-white">
//             <h6 className="font-bold text-[16px]">Referred by a friend?</h6>
//         </div>
//         <div className="pb-5 px-6">
//             <input
//                 type="text"
//                 onChange={(e) => setRefCode(e.target.value)}
//                 value={refCode}
//                 required
//                 placeholder='Enter your referral code here...'
//                 className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
//             />
//         </div>
//     </div>
//     <div className='border-b-2 border-[#262626] mx-5 '></div>
//     <div className='flex md:items-center gap-5 px-5 mx-4 py-3 my-5 rounded-xl bg-[#443919]'>
//         <div><LuLink /></div>
//         <h6 className='text-white'>Your referral code will be a randomly generated string of characters. If you'd like to create your own unique code instead, please use the text box below.</h6>
//     </div>
//     <div className=''>
//         <div className="relative px-6 pt-2 mb-3 flex text-white">
//             <h6 className="font-bold text-[16px]">Change My Custom Referral Code</h6>
//         </div>
//         <div className="pb-5 px-6">
//             <input
//                 type="text"
//                 onChange={(e) => setCusCode(e.target.value)}
//                 value={cusCode}
//                 required
//                 placeholder='Enter your custom referral code here...'
//                 className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
//             />
//         </div>
//     </div>

//     <div className="mb-10 mt-4">
//         {/* <Link to='/profile'> */}
//         <div className="flex items-center bg-[#CE9600] hover:bg-[#CE9600]/90 justify-center mx-5 md:mx-0  my-3 lg:mx-80 rounded-lg cursor-pointer  border-solid border-blueGray-200">
//             <button
//                 className="text-white flex items-center gap-2 background-transparent font-bold  px-6 py-2.5 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                 type="submit"
//             >
//                 <SiTicktick />Onboard me!
//             </button>
//         </div>
//         {/* </Link> */}
//     </div>
//     <p className='text-[11px] md:text-[13px] text-center mt-2'>Already have an account? <Link to="/signin"><span className='text-gray-700 hover:underline cursor-pointer font-bold'>Sign In</span></Link></p>

// </div>
// </form>