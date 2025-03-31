import React from 'react'
import { ChevronRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ContactMe = () => {
    return (
        <>
            <Navbar />
            <div className='p-8 flex flex-wrap justify-around border-b-1 container mx-auto bg-gray-50 lg:w-[80%] max-lg:w-[95%] border-x-1 h-screen'>
                <h1 className='text-5xl text-gray-700 pb-8 mt-5 max-[632px]:text-2xl' style={{ fontFamily: 'Hanson, sans-serif', fontWeight: 800 }}>CONTACT ME</h1>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>
                    <label htmlFor="" className=''>Email</label>
                    <input type="text" placeholder='jenil.savalia.cd@gmail.com' className='border-1 p-5 w-full mt-2 mb-5' />

                    <label htmlFor="" className=''>Message</label>
                    <textarea name="" id="" className='border-1 p-5 w-full mt-2'></textarea>
                    <div className='border-1 w-fit p-3 flex mt-5 hover:bg-[#F6D663] cursor-pointer duration-200 group bg-gray-100 ' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}>
                        Send
                        <div className='group-hover:translate-x-2 duration-300'>
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe