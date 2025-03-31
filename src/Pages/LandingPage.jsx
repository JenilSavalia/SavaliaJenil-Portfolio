import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../../src/components/ui/hero-highlight";
import JenilGilbil from '../../src/assets/JenilGilbil.png'
import JenilNormal from '../../src/assets/JenilNormal.png'
import ProjectCard from './Projects/ProjectCard';
import Experience from './Experience';
import Education from './Education';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { MySkills, Projects } from '../../src/assets/metadata'

const FeaturedProjects = Projects.filter((proj) => proj.FeaturedProj == true)

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto bg-gray-50 lg:w-[80%] max-lg:w-[95%] border-x-1 h-full'>

                <div >
                    <HeroHighlight className="scheme-light">
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: [20, -5, 0],
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.4, 0.0, 0.2, 1],
                            }}
                            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-[#9F4EFF] max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                        >
                            Welcome to my corner of the internet!.
                            <br />
                            <Highlight className="text-black dark:text-white">
                                Hey, I'm Jenil Savalia!
                            </Highlight>
                        </motion.h1>
                    </HeroHighlight>
                </div>

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

                <div className='p-7'>
                    <h1 className='text-3xl text-gray-700 pb-8' style={{ fontFamily: 'Hanson, sans-serif', fontWeight: 800 }}>My Skill Set</h1>

                    <div className='flex flex-wrap gap-8'>

                        <div className='w-[324px] h-auto border-1 p-5'>
                            <h1 className='text-3xl text-gray-700 pb-3' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800 }}>Languages</h1>
                            <div className='flex flex-wrap'>
                                {MySkills.Languages.map((item, index) => (
                                    <div key={index} className='bg-blue-100 w-fit p-4 m-3'>
                                        <img
                                            src={item.imgLink}
                                            alt="JavaScript logo"
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-[324px] h-auto border-1 p-5'>
                            <h1 className='text-3xl text-gray-700 pb-3' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800 }}>Front-End</h1>
                            <div className='flex flex-wrap'>
                                {MySkills.FrontEnd.map((item, index) => (
                                    <div key={index} className='bg-blue-100 w-fit p-4 m-3'>
                                        <img
                                            src={item.imgLink}
                                            alt="JavaScript logo"
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-[324px] h-auto border-1 p-5'>
                            <h1 className='text-3xl text-gray-700 pb-3' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800 }}>Back-End</h1>
                            <div className='flex flex-wrap'>
                                {MySkills.Backend.map((item, index) => (
                                    <div key={index} className='bg-blue-100 w-fit p-4 m-3'>
                                        <img
                                            src={item.imgLink}
                                            alt="JavaScript logo"
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-[324px] h-auto border-1 p-5'>
                            <h1 className='text-3xl text-gray-700 pb-3' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800 }}>Databases</h1>
                            <div className='flex flex-wrap'>
                                {MySkills.Database.map((item, index) => (
                                    <div key={index} className='bg-blue-100 w-fit p-4 m-3'>
                                        <img
                                            src={item.imgLink}
                                            alt="JavaScript logo"
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>

                </div>


                <div className='p-7 max-[434px]:p-2'>
                    <h1 className='text-3xl text-gray-700 pb-8' style={{ fontFamily: 'Hanson, sans-serif', fontWeight: 800 }}>Featured Projects</h1>
                    <div className='flex flex-col items-center gap-6'>
                        {
                            FeaturedProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        }
                    </div>
                    <Link to="/projects">
                        <div className='border-1 w-fit p-3 flex mt-4 hover:bg-[#F6D663] cursor-pointer duration-200 group bg-gray-100 ' style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800 }}>
                            All Projects
                            <div className='group-hover:translate-x-2 duration-300'>
                                <ChevronRight />
                            </div>
                        </div>
                    </Link>
                </div>


                <div className='p-7 bg-gradient-to-l from-slate-50 to-orange-50 border-y-1 hover:bg-gradient-to-r duration-1000'>
                    <h1 className='text-3xl text-gray-700 pb-8' style={{ fontFamily: 'Hanson, sans-serif', fontWeight: 800 }}>📗Education</h1>
                    <Education />
                </div>

                <div className='p-7 bg-gradient-to-l from-slate-50 to-lime-50 border-b-1 hover:bg-gradient-to-r duration-1000'>
                    <h1 className='text-3xl text-gray-700 pb-8' style={{ fontFamily: 'Hanson, sans-serif', fontWeight: 800 }}>Experience</h1>
                    <Experience />
                </div>

                <div className='p-8 flex flex-wrap justify-around'>
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

                <Footer />

            </div>
        </>
    )
}

export default LandingPage