import React from 'react'
import { Link } from 'react-router-dom'

const EmailChecker = () => {
    return (
        <div className="background">
            <form>
                <div className='flex justify-center rounded-full'>
                    <img className="w-14 rounded-2xl" src="https://res.cloudinary.com/glide/image/fetch/f_auto,h_150,c_limit/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fglide-prod.appspot.com%2Fo%2Ficon-images%252Fanonymous-b8b74b04-83a5-46d6-a2cc-25e0559d33df.png%3Falt%3Dmedia%26token%3D633ff17b-72a8-49f5-8f96-a06e64af4679" alt="logo" />
                </div>
                <h3 className='text-center pt-7 pb-3 md:pt-7 mt:pb-5 font-bold text-2xl lg:text-2xl'>Check your email</h3>
                <p className='py-6 mb-2 text-center text-sm'>We've sent a pin to example@gmail.com</p>
                <div className='mx-2'>
                    <input
                        type="text"
                        placeholder='0000'
                        className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                    />
                </div>
                <Link to="/details">
                    <div className='flex justify-center pb-5 pt-6'>
                        <button className='bg-[#ce9600] px-20 md:px-32 py-2 rounded-lg cursor-pointer text-white flex items-center gap-2 hover:bg-[#ce9600]/90 transition duration-200 ease-in-out'>Sign In</button>
                    </div>
                </Link>
                <p className="text-[#ce9600] font-semibold  text-[11px] md:text-[15px] text-center mt-3 mb-7 cursor-pointer">I need another pin</p>
                <p className='text-[11px] md:text-[13px] text-center mt-2'>Don't have an account yet?<Link to="/signin"><span className='text-gray-700 hover:underline cursor-pointer font-bold'>Sign Up</span></Link></p>
            </form>
        </div>
    )
}

export default EmailChecker
