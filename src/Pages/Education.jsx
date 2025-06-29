import React from 'react'

const Education = () => {
    return (
        <>

            <div className='flex gap-4 group mb-6' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>
                <div className='bg-black w-3 h-3 rounded-full mt-2 group-hover:scale-125 group-hover:bg-[#F6D663]  duration-200'></div>
                <div>
                    <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800 }} className='text-xl'>Rai University</h1>
                    <h2 className='mb-1 font-semibold'>Bachelor of Technology in Computer Science with AI and ML (B.Tech)</h2>
                    <h2>Ahmedabad, Gujarat</h2>
                    <h2 className='my-2 text-gray-800'>2024-2028</h2>
                    <div className='gap-2 flex flex-col'>
                        <li className='hover:font-bold duration-300'>
                            Scored 9.95 CGPA
                        </li>
                    </div>
                </div>
            </div>


            <div className='flex gap-4 group' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>
                <div className='bg-black w-3 h-3 rounded-full mt-2 group-hover:scale-125 group-hover:bg-[#F6D663]  duration-200'></div>
                <div>
                    <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800 }} className='text-xl'>Shree Swaminarayan Gurukul Internationl School</h1>
                    <h2 className='mb-1 font-semibold'>+2 MPC</h2>
                    <h2>Hyderabad, Telangana</h2>
                    <h2 className='my-2 text-gray-800'>2022-2024</h2>
                    <div className='gap-2 flex flex-col'>
                        <li className='hover:font-bold duration-300'>
                            Achieved 90% in CBSE Examination
                        </li>
                        <li className='hover:font-bold duration-300'>
                            Served as Head Boy
                        </li>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Education