import React from 'react'
import Avatar from '@/components/Avatar'
import bgIntro from '@/assets/images/bg-intro.png';

import gitIcon from '@/assets/icons/github.svg';
import htmlIcon from '@/assets/icons/html.svg';
import cssIcon from '@/assets/icons/css.svg';
import javascriptIcon from '@/assets/icons/javascript.svg';
import reactIcon from '@/assets/icons/react.svg';

import caretDownIcon from '@/assets/icons/caret-double-down.svg';


import Tag from '../Tag';
import Image from 'next/image';

const tags = [
    {
        label: 'GitHub',
        icon: <img src={gitIcon.src} alt='GitHub Icon' />
    },
    {
        label: 'HTML',
        icon: <img src={htmlIcon.src} alt='HTML Icon' />
    },
    {
        label: 'CSS',
        icon: <img src={cssIcon.src} alt='CSS Icon' />
    },
    {
        label: 'JavaScript',
        icon: <img src={javascriptIcon.src} alt='JavaScript Icon' />
    },
    {
        label: 'React',
        icon: <img src={reactIcon.src} alt='React Icon' />
    },
]

export default function Hero() {
    return (
        <section
            className='mt-15 bg-cover bg-left md:bg-center bg-no-repeat'
            style={{
                backgroundImage: `url(${bgIntro.src})`,
            }}
        >
            <div className='w-full container mx-auto flex flex-col justify-center items-center gap-14 px-4 md:px-5 xl:px-0'>
                <Avatar />
                <div className='flex flex-col items-center gap-2 text-center max-w-3xl mx-auto'>
                    <span className='text-gray-500 text-base md:text-lg xl:text-xl flex flex-col items-center gap-0.5'>
                        <span>Hello World!</span>
                        <span>Meu nome é <span className='text-main-red'>Marcelo Júnior</span> e sou</span>
                    </span>
                    <h1 className='text-2xl md:text-5xl xl:text-[3.5rem] font-bold text-gray-600'>
                        Desenvolvedor Full Stack
                    </h1>
                    <p className='text-gray-400 text-sm'>
                        Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha
                        paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
                    </p>
                </div>
                <div className='flex flex-wrap justify-center gap-4 mt-4'>
                    {tags.map((tag, index) => (
                        <Tag key={index} label={tag.label} icon={tag.icon} />
                    ))}
                </div>

                <div className='flex justify-center mt-10 animate-bounce'>
                    <button className='cursor-pointer'>
                        <Image src={caretDownIcon} alt='Caret Down Icon' />
                    </button>
                </div>
            </div>
        </section>
    )
}
