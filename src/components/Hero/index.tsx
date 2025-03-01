import React from 'react'
import Avatar from '@/components/Avatar'
import bgIntro from '@/assets/images/bg-intro.png';

export default function Hero() {
    return (
        <section
            className= 'mt-30 bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: `url(${bgIntro.src})`,
            }}
        >
            <div className='w-full container mx-auto flex flex-col justify-center items-center gap-14'>
                <Avatar />
                <div className='flex flex-col items-center gap-2 text-center max-w-3xl mx-auto'>
                    <span className='text-gray-500 text-xl '>
                        Hello World! Meu nome é <span className='text-main-red'>Marcelo Júnior</span> e sou
                    </span>
                    <h1 className='text-[3.5rem] font-bold text-gray-600'>
                        Desenvolvedor Full Stack
                    </h1>
                    <p className='text-gray-400 text-sm'>
                        Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha
                        paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
                    </p>
                </div>
            </div>
        </section>
    )
}
