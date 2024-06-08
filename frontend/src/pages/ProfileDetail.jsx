// ProfileDetail.jsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../components/firebase'; // Adjust the path if necessary
import banner from '../assets/images/banner.webp';
import { FaImage } from 'react-icons/fa6';
import { SiTicktick } from 'react-icons/si';
import { LuLink } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const ProfileDetail = () => {
    const [Fname, setFname] = useState('');
    const [surName, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [refCode, setRefCode] = useState('');
    const [cusCode, setCusCode] = useState('');

    const handleProfileDetails = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'profiles'), {
                firstName: Fname,
                surname: surName,
                phone: phone,
                referralCode: refCode,
                customReferralCode: cusCode
            });
            console.log('Document written with ID: ', docRef.id);
            setFname('');
            setSurname('');
            setPhone('');
            setRefCode('');
            setCusCode('');
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return (
        <div className='px-10 lg:px-52 pb-10'>
            <form onSubmit={handleProfileDetails} className='w-full h-full bg-[#1F1F1F]'>
                <div className='border border-[#262626]'>
                    <div className=''>
                        <div className="relative px-6 pt-6 mb-3 flex text-white">
                            <h6 className="font-bold text-[16px]">First Name</h6>
                        </div>
                        <div className="pb-5 px-6">
                            <input
                                type="text"
                                onChange={(e) => setFname(e.target.value)}
                                value={Fname}
                                required
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
                                onChange={(e) => setSurname(e.target.value)}
                                value={surName}
                                required
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
                                type="number"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                required
                                className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                            />
                        </div>
                    </div>
                    {/* <div>
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
                    </div> */}
                    <div className='border-b-2 border-[#262626] mx-5 mb-2'></div>
                    <div>
                        <div className="relative px-6 pt-2 mb-3 flex text-white">
                            <h6 className="font-bold text-[16px]">Referred by a friend?</h6>
                        </div>
                        <div className="pb-5 px-6">
                            <input
                                type="text"
                                onChange={(e) => setRefCode(e.target.value)}
                                value={refCode}
                                required
                                placeholder='Enter your referral code here...'
                                className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                            />
                        </div>
                    </div>
                    <div className='border-b-2 border-[#262626] mx-5 '></div>
                    <div className='flex md:items-center gap-5 px-5 mx-4 py-3 my-5 rounded-xl bg-[#443919]'>
                        <div><LuLink /></div>
                        <h6 className='text-white'>Your referral code will be a randomly generated string of characters. If you'd like to create your own unique code instead, please use the text box below.</h6>
                    </div>
                    <div className=''>
                        <div className="relative px-6 pt-2 mb-3 flex text-white">
                            <h6 className="font-bold text-[16px]">Change My Custom Referral Code</h6>
                        </div>
                        <div className="pb-5 px-6">
                            <input
                                type="text"
                                onChange={(e) => setCusCode(e.target.value)}
                                value={cusCode}
                                required
                                placeholder='Enter your custom referral code here...'
                                className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                            />
                        </div>
                    </div>
                    <div className="mb-10 mt-4">
                        {/* <Link to='/profile'> */}
                        <div className="flex items-center bg-[#CE9600] hover:bg-[#CE9600]/90 justify-center mx-5 md:mx-0  my-3 lg:mx-80 rounded-lg cursor-pointer  border-solid border-blueGray-200">
                            <button
                                className="text-white flex items-center gap-2 background-transparent font-bold  px-6 py-2.5 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                            >
                                <SiTicktick />Onboard me!
                            </button>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProfileDetail;
