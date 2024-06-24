import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../components/firebase';
import banner from '../assets/images/banner.webp';
import { FaImage } from 'react-icons/fa';

const News = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'blogs'));
                const blogsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setBlogs(blogsList);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blogs: ', error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

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
                                <h2 className='text-white font-bold md:text-2xl'>News Articles</h2>
                                <p className='text-white md:text-[12px] text-[14px] mt-1'>Check out recent news articles related to COIM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bg-[rgba(255, 255, 255, 0.07)] rounded-2xl mt-8 mb-16 py-4 px-10 border border-[#262626]'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            blogs.map(blog => (
                                <div key={blog.id} className='bg-[#363636] rounded-xl p-2 cursor-pointer'>
                                    <Link to={`${blog.link}`}>
                                        <div><img src={blog.blogImage} alt="news" className='rounded-lg mb-4' /></div>
                                        <div className='px-2 mb-6'>
                                            <p className='text-white font-bold text-[16px]'>{blog.title}</p>
                                            <p className='text-sm text-[#a4a4a4]'>{blog.date}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default News;
