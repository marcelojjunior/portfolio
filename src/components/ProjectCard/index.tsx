import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

export default function ProjectCard({
    title,
    description,
    image,
}: ProjectCardProps) {
    return (
        <div
            className='rounded-xl bg-gray-300 p-3 flex flex-col gap-5 w-full'
        >
            <Image
                className='rounded-lg w-full h-40 object-cover'
                src={image}
                alt={title}
                width={306}
                height={156}
            />
            <div className='flex flex-col gap-2'>
                <h3 className='text-base text-gray-600 font-bold'>
                    {title}
                </h3>
                <p className='text-gray-500 text-sm'>
                    {description}
                </p>
            </div>
        </div>
    )
}
