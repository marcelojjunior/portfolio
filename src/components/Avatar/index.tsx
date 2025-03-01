import Image from 'next/image';
import React, { HTMLAttributes } from 'react';
import Code from '@/assets/icons/code.png';
import { twMerge } from 'tailwind-merge';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc?: string;
    borderColor?: string;
}

export default function Avatar({
    imageSrc,
    borderColor,
    ...props
}: AvatarProps) {
    return (
        <div
            className={`p-1 border-2 rounded-full w-max relative ${twMerge(borderColor ? borderColor : 'border-main-blue')}`}
        >
            <Image
                {...props}
                src={imageSrc || 'https://github.com/marcelojjunior.png'}
                className='rounded-full'
                alt='Avatar'
                width={87}
                height={87}
            />
            <Image
                src={Code}
                alt='Code Iconn'
                width={32}
                height={32}
                className='absolute -right-1 -bottom-1'
            />
        </div>
    )
}
