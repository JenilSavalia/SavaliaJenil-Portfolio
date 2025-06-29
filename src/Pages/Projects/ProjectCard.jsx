import React from 'react'
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Server, Database, Brain, GraduationCap, Briefcase, Menu, X, ArrowUpRight, Youtube } from 'lucide-react';
import videoFile from '../../../../../../../00 Video Projects/Portfolio/Sellar Cart.gif'

const videoId = "k0ADXyQbILQ"

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className='relative z-10 flex max-[1120px]:flex-wrap h-[384px] border-1 overflow-hidden justify-between  max-[413px]:p-2 mx-8 w-full max-[1386px]:h-auto'>

        <div className='p-8 max-[408px]:p-2'>

          <div className='flex gap-2 mb-2'>
            <div className='border-1 w-fit rounded-full p-2 hover:bg-gray-100 hover:border-gray-400 duration-200 '>
              <a
                href={project.github}
                aria-label="GitHub"
                target='_blank'
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className='border-1 w-fit rounded-full p-2 hover:bg-gray-100 hover:border-gray-400 duration-200 '>
              <a
                href={project.deployedLink}
                aria-label="GitHub"
                target='_blank'
              >
                <ArrowUpRight size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className='border-1 w-fit rounded-full p-2 hover:bg-gray-100 hover:border-gray-400 duration-200 '>
              <a
                href={project.VideoLink}
                aria-label="GitHub"
                target='_blank'
              >
                <Youtube size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <h1 className='text-2xl border-b-1 border-gray-200 w-[300px] pb-1' style={{ fontFamily: 'Hanson, sans-serif', fontWeight: 800 }}>{project?.Name}</h1>

          <p className='p-1 my-3 text-md duration-300 w-[300px]'>{project?.Description}</p>


          <div className='w-fit'>
            {
              project?.keyPoints?.map((item) => (
                <p className='p-1 my-3 text-md bg-[#f6d663] duration-300'>{item}</p>
              ))
            }

          </div>



          <div className='flex flex-wrap gap-3 mt-2'>

            {
              project?.Tags?.map((item) => (
                <div className='border-1 rounded-full w-fit p-1 text-xs px-2 hover:scale-105 duration-200 cursor-cell'>
                  {item}
                </div>
              ))
            }
          </div>
        </div>


        {/* <div className="video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-200 w-fit h-full object-cover"
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}


        {/* <h1 className='mt-7 mr-36 -z-20 border-1 p-1'>Click to View Live Demo</h1> */}


        {/* Boderframe for Larger Screens */}
        <a
          href={project.deployedLink}
          target='_blank'
          className='absolute top-0 left-100 -z-10 w-[500px] h-[400px] border-1 rounded-4xl mt-14 hover:mt-8 duration-200 cursor-pointer shadow-2xl hover:shadow-black bg-white max-[1712px]:bg-red-200 max-[1712px]:w-[350px] max-[1386px]:hidden '>
          <div className='border-1 rounded-3xl m-3'>
            <img src={project.FeatureImage} alt="" className='rounded-3xl' />
          </div>
        </a>


        {/* GIF FILE */}
        <img
          src={videoFile}
          alt="Background"
          className="-z-20 w-fit h-full object-cover border-l-1 hover:scale-105 duration-300 shadow-2xl max-[1386px]:w-xl max-[1386px]:border-b-1 max-[454px]:w-md "
        />


        {/* Boderframe for smaller Screens */}
        <a className='w-[621px] h-[400px] border-1 rounded-4xl mt-14 hover:mt-4 duration-200 max-[1272px]:w-[500px] max-[1146px]:w-[350px] max-[790px]:w-[621px] hidden max-[767px]:inline max-[454px]:h-[350px] max-[382px]:h-[300px] '>
          <div className='border-1 rounded-3xl m-3'>
            <img src={project.FeatureImage} alt="" className='rounded-3xl' />
          </div>
        </a>


      </div>
    </>
  )
}

export default ProjectCard