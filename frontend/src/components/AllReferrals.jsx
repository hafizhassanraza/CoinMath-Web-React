import React, { useState, useEffect } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdRoomPreferences } from "react-icons/md";
import { db } from '../components/firebase';
import { RxCross2 } from "react-icons/rx";
import { doc, getDoc, getDocs } from 'firebase/firestore';


const AllReferrals = () => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [totalReferrals, setTotalReferrals] = useState(0);

    const fetchUserProfile = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const docRef = doc(db, 'profiles', userId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProfileData(docSnap.data());
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
    };

    const fetchTotalReferrals = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const userRef = doc(db, 'profiles', userId);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const refCode = userSnap.data().referralCode;
                const q = query(collection(db, 'profiles'), where('referralCode', '==', refCode));
                const querySnapshot = await getDocs(q);
                setTotalReferrals(querySnapshot.size);
            } else {
                console.log('No such user document!');
            }
        } catch (error) {
            console.error('Error fetching total referrals:', error);
        }
    };


    useEffect(() => {
        fetchTotalReferrals()
        fetchUserProfile();
    }, []);


    return (
        <div className='px-3 lg:px-20 mt-5'>
            {profileData && (
                <>
                    <div className='rounded-xl border border-[#262626] bg-[#1F1F1F]'>
                        <div className='text-[130px]  flex justify-center items-center mt-14 mb-3'>
                            <div>
                                {profileData.imageUrl ? (
                                    <img src={profileData.imageUrl} className='rounded-full w-32 h-32' alt="user" />
                                ) : (
                                    <FaRegUserCircle className='text-white' />
                                )}
                            </div>
                        </div>
                        <div className='mb-8'>
                            <div className='pb-4'>
                                <h2 className='text-white font-bold text-2xl text-center '>My Referrals</h2>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#1F1F1F] rounded-xl mt-8 pb-4 px-10 border border-[#262626]'>








                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
                            <div className='bg-[#363636] rounded-xl p-2 cursor-pointer'>
                                <div className='flex flex-col gap-8 md:flex md:flex-row lg:items-center'>
                                    <div className=''>
                                        <p className='text-[14px] text-white w-10 h-10 bg-red-400 rounded-full'>gh</p>
                                    </div>
                                    <div className='text-white flex flex-col gap-1'>
                                        <p>Name</p>
                                        <p className='text-sm'>surname</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#363636] rounded-xl p-2 cursor-pointer'>
                                <div className='flex flex-col gap-8 md:flex md:flex-row lg:items-center'>
                                    <div className=''>
                                        <p className='text-[14px] text-white w-10 h-10 bg-red-400 rounded-full'>gh</p>
                                    </div>
                                    <div className='text-white flex flex-col gap-1'>
                                        <p>Name</p>
                                        <p className='text-sm'>surname</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#363636] rounded-xl p-2 cursor-pointer'>
                                <div className='flex flex-col gap-8 md:flex md:flex-row lg:items-center'>
                                    <div className=''>
                                        <p className='text-[14px] text-white w-10 h-10 bg-red-400 rounded-full'>gh</p>
                                    </div>
                                    <div className='text-white flex flex-col gap-1'>
                                        <p>Name</p>
                                        <p className='text-sm'>surname</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#363636] rounded-xl p-2 cursor-pointer'>
                                <div className='flex flex-col gap-8 md:flex md:flex-row lg:items-center '>
                                    <div className=''>
                                        <p className='text-[14px] text-white w-10 h-10 bg-red-400 rounded-full'>gh</p>
                                    </div>
                                    <div className='text-white flex flex-col gap-1'>
                                        <p>Name</p>
                                        <p className='text-sm'>surname</p>
                                    </div>
                                </div>
                            </div>
                        </div>






                    </div>
                </>
            )}
        </div>
    );
};

export default AllReferrals;

