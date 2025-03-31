import React from 'react';
import { Link } from 'react-router-dom';


const NavDrawer = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className='flex justify-center'>
                <div className="fixed bg-amber-200 mx-auto lg:w-[80%] max-lg:w-[95%] w-full px-6 py-4 flex justify-between items-center z-50 bg-gradient-to-l from-slate-50 to-slate-200 border-b-1">
                    <div className='flex gap-5 flex-wrap'>
                        <Link to="/projects">
                            <div className='p-5 border-1 bg-gray-100 cursor-pointer hover:bg-[#F6D663] duration-200' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>
                                <h1>Projects</h1>
                            </div>
                        </Link>
                        <Link to="/about">
                            <div className='p-5 border-1 bg-gray-100 cursor-pointer hover:bg-[#F6D663] duration-200' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>
                                <h1>About Me</h1>
                            </div>
                        </Link>
                        <Link to="/blog">
                            <div className='p-5 border-1 bg-gray-100 cursor-pointer hover:bg-[#F6D663] duration-200' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>
                                <h1>Blog</h1>
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div className='p-5 border-1 bg-gray-100 cursor-pointer hover:bg-[#F6D663] duration-200' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>
                                <h1>Contact Me</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavDrawer