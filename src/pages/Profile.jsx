import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Modal from '../components/Modal';
import SideModal from '../components/SideModal';


const Profile = () => {
    const [showModal, setShowModal] = useState(false);
    const [showSideModal, setShowSideModal] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
    };

    const openSideModal = () => {
        setShowSideModal(true);
    };

    // Function to close the modal
    const closeSideModal = () => {
        setShowSideModal(false);
    };

    return (
        <>
            <div className='px-3 lg:px-20 mt-5'>
                <div className='rounded-xl border border-[#262626] bg-[#1F1F1F]'>
                    <div className='text-[130px] flex justify-center items-center mt-14 mb-3'>
                        <FaRegUserCircle className='text-white' />
                    </div>
                    <div className='mb-8'>
                        <div className='pb-4'>
                            <h2 className='text-white font-bold text-2xl text-center '>Rana Usman</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='flex gap-2 md:mt-2'>
                                <button className='bg-[#ce9600] px-3 py-2 rounded-lg cursor-pointer text-white flex items-center gap-2 hover:bg-[#ce9600]/90 transition duration-200 ease-in-out'>
                                    <AiOutlineQuestionCircle className='text-xl' />Update
                                </button>
                                <button className='bg-transparent border border-gray-500 px-3 py-1 rounded-lg text-white cursor-pointer hover:bg-white/10 transition duration-200 ease-in-out'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] rounded-xl mt-8 py-4 px-10 border border-[#262626]'>
                    <div className='text-white'>
                        <p className='text-2xl font-bold'>Details</p>
                    </div>
                    <div className='flex items-center mt-7'>
                        <div className='pr-40'>
                            <span className='text-[13px] text-white'>Email</span>
                            <p className='text-[14px] text-white'>usman4243ch@gmail.com</p>
                        </div>
                        <div className='pr-40'>
                            <span className='text-[13px] text-white'>First Name</span>
                            <p className='text-[14px] text-white'>Rana Usman</p>
                        </div>
                        <div className='pr-40'>
                            <span className='text-[13px] text-white'>Surname</span>
                            <p className='text-[14px] text-white'>Usman</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-4'>
                        <div className='pr-60'>
                            <span className='text-[13px] text-white'>Phone Number</span>
                            <p className='text-[14px] text-white'>03070590928</p>
                        </div>
                        <div className='pr-40'>
                            <span className='text-[13px] text-white'>Referral Code</span>
                            <p className='text-[14px] text-white'>5b94314d-2fab-4330-b339-0963d338bffb</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] text-[#ce9600] rounded-xl mt-7 mb-5 py-8 px-10 border border-[#262626]'>
                    <div className='flex items-center gap-5 px-5 py-3 rounded-xl bg-[#443919]'>
                        <div><FaArrowRight /></div>
                        <h6 className='text-white'>Want to change the referral code that your friends will receive?</h6>
                    </div>
                    <div className='flex items-center text-[#ce9600] justify-between mt-7 hover:bg-[#262626] pr-1 pl-2 py-1 cursor-pointer rounded-lg transition-colors duration-100'>
                        <h6 className='text-white'>Change my referral code</h6>
                        <div className='bg-[#2c281d] rounded-2xl px-2 py-3 flex gap-2 items-center'>
                            <div><FaArrowRight /></div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] text-[#ce9600] rounded-xl mt-7 mb-5 py-8 px-10 border border-[#262626]'>
                    <div onClick={openModal} className='flex items-center gap-5 px-5 py-3 rounded-xl bg-[#443919]'>
                        <div><FaArrowRight /></div>
                        <h6 className='text-white'>Forgot to include a referral code during onboarding? No problem!</h6>
                    </div>
                    <div onClick={openSideModal} className='flex items-center text-[#ce9600] justify-between mt-7 hover:bg-[#262626] pr-1 pl-2 py-1 cursor-pointer rounded-lg transition-colors duration-100'>
                        <h6 className='text-white'>Update Referral Code</h6>
                        <div className='bg-[#2c281d] rounded-2xl px-2 py-3 flex gap-2 items-center'>
                            <div><FaArrowRight /></div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <Modal closeModal={closeModal} />} 
            {showSideModal && <SideModal closeSideModal={closeSideModal} />}
            {/* {showModal && <SideModel closeModal={closeSideModal} />} */}
        </>
    );
};

export default Profile;
