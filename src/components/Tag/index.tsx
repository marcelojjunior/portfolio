import React, { ReactNode } from 'react';

interface TagProps {
    label: string;
    icon?: ReactNode;
}

export default function Tag({
    label,
    icon,
}: TagProps) {
    return (
        <div className='bg-gray-300 py-2 px-4 rounded-full flex items-center gap-2'>
            {icon}
            <span className='text-gray-500 text-base font-normal'>
                {label}
            </span>
        </div>
    )
}
