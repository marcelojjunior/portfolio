import React from 'react'

export default function Header() {
    return (
        <header className='container mx-auto w-max px-8 py-4 backdrop-blur-3xl rounded-4xl fixed top-4 left-0 right-0 z-10'>
            <nav>
                <ul className='flex gap-4 text-gray-500 font-semibold'>
                    <li>
                        <a href="#about">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contato
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Lorem
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
