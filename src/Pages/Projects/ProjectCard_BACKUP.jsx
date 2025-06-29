import React from 'react'
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Server, Database, Brain, GraduationCap, Briefcase, Menu, X, ArrowUpRight, Youtube } from 'lucide-react';


const ProjectCard = ({ project }) => {
  return (
    <>
      <div className='flex flex-wrap h-[384px] max-[790px]:h-[600px] overflow-hidden border-1 justify-between p-8 max-[413px]:p-2 mx-8 w-full'>

        <div className='mt-12'>

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

          <h1 className='text-2xl border-b-1 border-gray-200 w-fit pb-4' style={{ fontFamily: 'Hanson, sans-serif', fontWeight: 800 }}>{project?.Name}</h1>

          <div className='w-fit'>
            {
              project?.keyPoints?.map((item) => (
                <p className='p-1 my-3 text-xl bg-[#f6d663]'>{item}</p>
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

        <div className='w-[621px] h-[400px] border-1 rounded-4xl mt-14 hover:mt-4 duration-200 max-[1272px]:w-[500px] max-[1146px]:w-[350px] max-[790px]:w-[621px]'>
          <div className='border-1 rounded-3xl m-3'>
            <img src={project.FeatureImage} alt="" className='rounded-3xl' />
          </div>
        </div>

      </div>
    </>
  )
}

export default ProjectCard