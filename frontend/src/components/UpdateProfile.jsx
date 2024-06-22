import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, storage } from '../components/firebase';
import { SiTicktick } from 'react-icons/si';
import { FaImage } from 'react-icons/fa';
import banner from '../assets/images/banner.webp';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const UpdateProfile = () => {
    const [userId, setUserId] = useState('');
    const [Fname, setFname] = useState('');
    const [surName, setSurName] = useState('');
    const [chosenImage, setChosenImage] = useState('');
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState('');
    const [phone, setPhone] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const navigate = useNavigate();
    const [image, setImage] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
            fetchUserProfile(storedUserId);
        }
    }, []);

    const fetchUserProfile = async (userId) => {
        try {
            const docRef = doc(db, 'profiles', userId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userProfile = docSnap.data();
                setFname(userProfile.firstName || '');
                setSurName(userProfile.surname || '');
                setEmail(userProfile.email || '');
                setPin(userProfile.pin || '');
                setPhone(userProfile.phone || '');
                setChosenImage(userProfile.profileImage || '');
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setChosenImage(file ? file.name : '');
    };

    const uploadImage = async () => {
        if (!image) return '';

        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        const downloadUrl = await getDownloadURL(storageRef);
        return { downloadUrl, fileName: image.name };
    };

    const handleProfileDetails = async (e) => {
        e.preventDefault();
        try {
            const { downloadUrl, fileName } = await uploadImage();

            const userProfileUpdates = {};
            if (Fname !== '') userProfileUpdates.firstName = Fname;
            if (surName !== '') userProfileUpdates.surname = surName;
            if (email !== '') userProfileUpdates.email = email;
            if (pin !== '') userProfileUpdates.pin = pin;
            if (phone !== '') userProfileUpdates.phone = phone;
            if (downloadUrl) {
                userProfileUpdates.profileImage = downloadUrl;
            }

            const docRef = doc(db, 'profiles', userId);
            await setDoc(docRef, userProfileUpdates, { merge: true });
            navigate('/profile');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className=' lg:px-[100px]'>
            <div className='rounded-b-xl overflow-hidden border border-[#262626]'>
                <div className=''>
                    <img src={banner} className='w-full md:h-56' alt="banner" />
                </div>
                <div className='bg-[#1F1F1F] gap-4 px-10 '>
                    <div className='mt-[-40px] flex justify-center lg:mt-[-60px]'>
                        <div className='overflow-hidden md:rounded-full  md:border border-black'>
                            <img className="md:w-32 w-20" src="https://res.cloudinary.com/glide/image/fetch/f_auto,h_150,c_limit/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fglide-prod.appspot.com%2Fo%2Ficon-images%252Fanonymous-b8b74b04-83a5-46d6-a2cc-25e0559d33df.png%3Falt%3Dmedia%26token%3D633ff17b-72a8-49f5-8f96-a06e64af4679" alt="logo" />
                        </div>
                    </div>
                    <div className=' pb-9 w-full  mt-2 lg:mt-6'>
                        <div className=''>
                            <h2 className='text-white text-center font-bold text-2xl'>CoinMath</h2>
                            <p className='text-white text-center py-2'>Welcome to CoinMath. Fill out the required details below to complete your onboarding and start generate $COIM!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='  md:w-full gap-6 bg-[#1F1F1F] rounded-xl my-7 md:px-10  border border-[#262626]'>
                <form onSubmit={handleProfileDetails}>
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
                                placeholder='Enter Your First Name'
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
                                onChange={(e) => setSurName(e.target.value)}
                                value={surName}
                                required
                                placeholder='Enter Your Surname'
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
                                    <span className="text-[#5F5F5F]">
                                        {chosenImage ? chosenImage : 'Choose an image...'}
                                    </span>
                                    <input
                                        type="file"
                                        className="opacity-0 w-0 h-0"
                                        onClick={(e) => e.target.value = null}
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="relative px-6 pt-2 mb-3 flex text-white">
                            <h6 className="font-bold text-[16px]">Email</h6>
                        </div>
                        <div className="pb-5 px-6">
                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                placeholder='Enter Your Email'
                                className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                            />
                        </div>
                    </div>
                    <div className=''>
                        <div className="relative px-6 pt-2 mb-3 flex text-white">
                            <h6 className="font-bold text-[16px]">Pin</h6>
                        </div>
                        <div className="pb-5 px-6">
                            <input
                                type="password"
                                onChange={(e) => setPin(e.target.value)}
                                value={pin}
                                required
                                placeholder='Enter Your Pin'
                                className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                            />
                        </div>
                    </div>
                    <div className=''>
                        <div className="relative px-6 pt-2 mb-3 flex text-white">
                            <h6 className="font-bold text-[16px]">Phone</h6>
                        </div>
                        <div className="pb-5 px-6">
                            <input
                                type="text"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                required
                                placeholder='Enter Your Phone Number'
                                className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#CE9600] text-white font-bold rounded-full py-2 px-8 hover:bg-[#C67800] transition ease-in-out"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
