import React from 'react';

import projectsData from "@/utils/projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <section className='flex flex-col items-center justify-center gap-14 py-36 max-w-5xl mx-auto px-4 md:px-5 xl:px-0'>
            <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <span className='text-main-red text-xl'>
                    Meu trabalho
                </span>
                <h2 className='text-2xl font-bold text-gray-600'>
                    Veja os projetos em destaque
                </h2>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 w-full'>
                {projectsData.data.projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </div>
        </section>
    )
}
