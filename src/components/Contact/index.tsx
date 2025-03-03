import React from 'react'
import bgContact from '@/assets/images/bg-contact.png';
import contactData from "@/data/contacts.json";
import ContactCard, { ContactCardIcons } from '../ContactCard';

export default function Contact() {
    return (
        <section
            className='my-15 pb-10 bg-cover bg-left md:bg-center bg-no-repeat'
            style={{
                backgroundImage: `url(${bgContact.src})`,
            }}
        >
            <div className='w-full container mx-auto flex flex-col justify-center items-center gap-12 px-4 md:px-5 xl:px-0'>
                <div className='flex flex-col items-center gap-2 text-center'>
                    <span className='text-main-purple text-xl'>
                        Contato
                    </span>
                    <h2 className='text-gray-600 text-2xl font-bold'>
                        Gostou do meu trabalho?
                    </h2>
                    <span className='text-gray-500 text-base'>
                        Entre em contato ou acompanhe as minhas redes sociais!
                    </span>
                </div>
                <div className='flex flex-col items-center gap-4 w-full max-w-96 mx-auto'>
                    {contactData.data.contacts.map((contact) => (
                        <ContactCard
                            key={contact.id}
                            title={contact.title}
                            url={contact.url}
                            icon={contact.type as keyof typeof ContactCardIcons}
                        />    
                    ))}
                </div>
            </div>
        </section>
    )
}
