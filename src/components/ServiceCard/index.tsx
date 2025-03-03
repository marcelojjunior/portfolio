import React from 'react';

import databaseIcon from "@/assets/icons/database.svg";
import devopsIcon from "@/assets/icons/devops.svg";
import webdevelopmentIcon from "@/assets/icons/webdevelopment.svg";
import Image from 'next/image';

export const ServiceCardIcons = {
    webdevelopment: webdevelopmentIcon,
    database: databaseIcon,
    devops: devopsIcon,
} as const;

interface ServiceCardProps {
    title: string;
    description: string;
    icon: keyof typeof ServiceCardIcons;
}

export default function ServiceCard({
    title,
    description,
    icon,
}: ServiceCardProps) {

    return (
        <div className='flex flex-col gap-5 p-5 rounded-xl border-2 border-gray-200 w-full'>
            <Image
                className='size-12'
                src={ServiceCardIcons[icon]}
                alt={title}
                width={48}
                height={48}
            />
            <div className='flex flex-col gap-2'>
                <h3 className='text-base font-bold text-gray-600'>
                    {title}
                </h3>
                <p className='text-sm text-gray-500'>
                    {description}
                </p>
            </div>
        </div>
    )
}
