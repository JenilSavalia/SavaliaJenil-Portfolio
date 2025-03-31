import React, { useState } from 'react';
import NavDrawer from './NavDrawer';
import { Link } from 'react-router-dom';
import { Menu,X } from 'lucide-react';



const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <nav className='sticky top-0 z-50 w-full bg-white'>
                <div className='mx-auto lg:w-[80%] max-lg:w-[95%] w-full px-6 py-4 border-1 shadow-lg flex justify-between items-center'>
                    <Link to="/">
                        <div
                            className='text-xl flex items-center gap-2 group cursor-pointer relative'
                            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}
                        >
                            {/* Default visible memoji */}
                            <img
                                src="https://devakshay.vercel.app/assets/img/memoji-1.png"
                                alt="Jenil's memoji"
                                width={30}
                                height={30}
                                className='transition-all duration-300 group-hover:opacity-0'
                            />

                            {/* Hand-raised memoji (appears on hover) */}
                            <img
                                src="https://devakshay.vercel.app/assets/img/head-hand.png"
                                alt="Jenil waving"
                                width={50}
                                height={50}
                                className='absolute left-0 transition-all duration-300 opacity-0 group-hover:opacity-100'
                            />

                            <span className='ml-2'>
                                JENIL SAVALIA
                            </span>
                        </div>
                    </Link>

                    {/* Hamburger menu button */}
                    <button
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                        className='p-2 focus:outline-none'
                        aria-label="Toggle navigation menu"
                    >
                        {isDrawerOpen ? (
                            <span className='text-lg font-medium cursor-pointer'><X/></span>
                        ) : (
                            <span className='text-lg font-medium cursor-pointer'><Menu/></span>
                        )}
                    </button>
                </div>
                <NavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            </nav>

        </>
    );
};

export default Navbar;