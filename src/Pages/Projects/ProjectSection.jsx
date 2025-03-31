import React, { useState } from 'react';
import Navbar from '../Navbar';
import ProjectCard from './ProjectCard';
import { Projects } from '../../assets/metadata'

const ProjectSection = () => {
    const [category, setCategory] = useState("All");

    // Define your categories
    const categories = ["All", "Full Stack Project", "UI/UX Design", "AI"];


    // Filter projects based on selected category
    const filteredProjects = category === "All"
        ? Projects
        : Projects.filter(project => project.categories === category);

    return (
        <>
            <Navbar />
            <div className='container mx-auto bg-gray-50 lg:w-[80%] max-lg:w-[95%] border-x-1 h-full p-5'>
                <h1
                    className='text-3xl text-gray-700 pb-8'
                    style={{ fontFamily: 'Hanson, sans-serif', fontWeight: 800 }}
                >
                    Projects
                </h1>

                <div className='flex flex-wrap gap-5 mb-5'>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`bg-gray-100 p-4 border-1 cursor-pointer hover:bg-[#F6D663] duration-200 ${category === cat ? "bg-[#F6D663] font-medium" : ""
                                }`}
                            onClick={() => setCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className='flex flex-col items-center gap-7'>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    ) : (
                        <p className="text-gray-500">No projects found in this category.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProjectSection;