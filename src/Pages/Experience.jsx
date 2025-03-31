import React from 'react';
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react';


const Experience = () => {
    return (
        <>
            <div className='flex gap-4 group' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>
                <div className='bg-black w-3 h-3 rounded-full mt-2 group-hover:scale-125 group-hover:bg-[#F6D663]  duration-200'></div>
                <div>
                    <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800 }} className='text-xl'>Full Stack Developer Intern</h1>
                    <h2>Carina Fashions • Ahemdabad, Gujarat</h2>
                    <h2 className='my-2 text-gray-800'>December, 2024 — Present</h2>
                    <div className='gap-2 flex flex-col'>
                        <li className='hover:font-bold duration-300'>Designed and developed the backend architecture of CARINA Fashion from scratch, ensuring scalability and efficiency.
                        </li>
                        <li className='hover:font-bold duration-300'>Created and optimized the database schema to handle product listings, user data, and transactions seamlessly.
                        </li>
                        <li className='hover:font-bold duration-300'>Integrated secure authentication and authorization mechanisms for users and sellers.
                        </li>
                        <li className='hover:font-bold duration-300'>Developed and implemented RESTful APIs for smooth frontend-backend communication.
                        </li>
                    </div>
                <Link to="/about">
                    <div className='border-1 w-fit p-2 flex mt-6 hover:bg-[#F6D663] cursor-pointer duration-200 group bg-gray-100' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800 }}>
                        Know More About Me
                        <div className='group-hover:translate-x-2 duration-300'>
                            <ChevronRight />
                        </div>
                    </div>
                </Link>
                </div>
            </div>
        </>
    )
}

export default Experience