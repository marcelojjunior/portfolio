import React from 'react'

import servicesData from '@/data/services.json';
import ServiceCard, { ServiceCardIcons } from '../ServiceCard';

export default function Services() {
    return (
        <section className='bg-gray-100 pt-20 pb-28'>
            <div className='flex flex-col gap-14 max-w-4xl mx-auto px-4 md:px-5 xl:px-0'>
                <div className='flex flex-col items-center justify-center gap-2 text-center'>
                    <span className='text-main-red text-xl'>
                        Meus serviços
                    </span>
                    <h2 className='text-2xl font-bold text-gray-600'>
                        Como posso ajudar o seu negócio
                    </h2>
                </div>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-3 w-full'>
                    {servicesData.data.services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.type as keyof typeof ServiceCardIcons}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
