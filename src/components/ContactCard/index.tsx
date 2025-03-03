import React from 'react';

import linkedinIcon from "@/assets/icons/linkedin.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import githubIcon from "@/assets/icons/github-contact.svg";
import emailIcon from "@/assets/icons/email.svg";
import Image from 'next/image';

export const ContactCardIcons = {
    linkedin: linkedinIcon,
    instagram: instagramIcon,
    github: githubIcon,
    email: emailIcon,
} as const;

interface ContactCardProps {
    title: string;
    url: string;
    icon: keyof typeof ContactCardIcons;
}

export default function ContactCard({
    title,
    url,
    icon,
}: ContactCardProps) {

    return (
        <a href={url} target='_blank' className='flex justify-between items-center gap-5 p-5 rounded-lg bg-gray-300 w-full'>
            <div className='flex items-center gap-3'>
                <Image
                    className='size-12'
                    src={ContactCardIcons[icon]}
                    alt={title}
                    width={48}
                    height={48}
                />
                <span className='text-base font-medium text-gray-500'>
                    {title}
                </span>
            </div>
            <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.625 5V13.125C15.625 13.2908 15.5591 13.4497 15.4419 13.5669C15.3247 13.6842 15.1657 13.75 15 13.75C14.8342 13.75 14.6753 13.6842 14.558 13.5669C14.4408 13.4497 14.375 13.2908 14.375 13.125V6.50859L5.44217 15.4422C5.32489 15.5595 5.16583 15.6253 4.99998 15.6253C4.83413 15.6253 4.67507 15.5595 4.55779 15.4422C4.44052 15.3249 4.37463 15.1659 4.37463 15C4.37463 14.8341 4.44052 14.6751 4.55779 14.5578L13.4914 5.625H6.87498C6.70922 5.625 6.55025 5.55915 6.43304 5.44194C6.31583 5.32473 6.24998 5.16576 6.24998 5C6.24998 4.83424 6.31583 4.67527 6.43304 4.55806C6.55025 4.44085 6.70922 4.375 6.87498 4.375H15C15.1657 4.375 15.3247 4.44085 15.4419 4.55806C15.5591 4.67527 15.625 4.83424 15.625 5Z" fill="#3996DB" />
                </svg>
            </span>
        </a>
    )
}
