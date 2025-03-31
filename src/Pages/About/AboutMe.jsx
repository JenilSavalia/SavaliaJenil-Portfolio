import React from 'react'
import Navbar from '../Navbar'
import JenilGilbil from '../../../src/assets/JenilGilbil.png'
import JenilNormal from '../../../src/assets/JenilNormal.png'
import { ChevronRight } from 'lucide-react';
import Experience from '../Experience';
import Education from '../Education';
import Footer from '../Footer';


const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto bg-gray-50 lg:w-[80%] max-lg:w-[95%] border-x-1 h-full'>

        <div className='flex flex-wrap border-b-1 w-full bg-amber-50 p-20 items-center justify-center'>

          <div>
            <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 460 }} className='text-3xl max-[570px]:text-xl max-[370px]:w-full cursor-pointer bg-[#F6D663] p-1 m-4 w-fit hover:shadow-xl hover:shadow-amber-300/50 shadow-2xl hover:scale-110 transition-discrete duration-300'>Full Stack Developer</h1>
            <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 460 }} className='text-3xl max-[570px]:text-xl max-[370px]:w-full  cursor-pointer bg-[#F6D663] p-1 m-8 w-fit hover:shadow-xl hover:shadow-amber-300/50 shadow-2xl hover:scale-110 transition-discrete duration-300'>Curiosity is My Power</h1>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer relative w-fit">
            {/* Image container with fixed dimensions to prevent layout shift */}
            <div className="relative w-[250px] h-[250px]">
              {/* Default visible image */}
              <img
                src={JenilGilbil}
                alt="Jenil's creative avatar"
                width={250}
                height={250}
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 object-cover rounded-lg"
              />

              {/* Hover state image */}
              <img
                src={JenilNormal}
                alt="Jenil's professional photo"
                width={250}
                height={250}
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 object-cover rounded-lg"
              />
            </div>
          </div>

          <div>
            <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 460 }} className='text-3xl max-[570px]:text-xl max-[370px]:w-full cursor-pointer bg-[#F6D663] p-1 m-10 w-fit hover:shadow-xl hover:shadow-amber-300/50 shadow-2xl hover:scale-110 transition-discrete duration-300'>Eager to Learn AI</h1>
            <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 460 }} className='text-3xl max-[570px]:text-xl max-[370px]:w-full cursor-pointer bg-[#F6D663] p-1 m-3 w-fit hover:shadow-xl hover:shadow-amber-300/50 shadow-2xl hover:scale-110 transition-discrete duration-300'>Graphic Designer</h1>
          </div>

          <a href='https://drive.google.com/file/d/1itGSrnWZeLb3QGcrjfI8eBaXHOelDyLE/view?usp=sharing' target='_blank' className='border-1 w-fit p-3 flex mt-4 hover:bg-[#F6D663] cursor-pointer duration-200 group bg-gray-100 ' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800 }}>
            Resume
            <div className='group-hover:translate-x-2 duration-300'>
              <ChevronRight />
            </div>
          </a>
        </div>

        <div className='p-7 bg-gradient-to-l from-slate-50 to-orange-50 border-y-1 hover:bg-gradient-to-r duration-1000'>
          <h1 className='text-3xl text-gray-700 pb-8' style={{ fontFamily: 'Hanson, sans-serif', fontWeight: 800 }}>📗Education</h1>
          <Education />
        </div>

        <div className='p-7 bg-gradient-to-l from-slate-50 to-lime-50 border-b-1 hover:bg-gradient-to-r duration-1000'>
          <h1 className='text-3xl text-gray-700 pb-8' style={{ fontFamily: 'Hanson, sans-serif', fontWeight: 800 }}>Experience</h1>
          <Experience />
        </div>

        <Footer />



      </div>
    </>
  )
}

export default AboutMe