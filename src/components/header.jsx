"use client"

import React, { useState } from 'react';
import { Github, Moon, Twitter, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';


export default function Header() {
    const [darkmode, setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode(!darkmode);
    };

    return (
        <>
        <div className={`${darkmode ? 'bg-black text-white' : 'text-black bg-white'} h-screen w-screen flex flex-col`}>

         <header className='flex-grow'>
                <div className='flex items-center py-4 px-10'>
                    <h1 className='text-2xl'>Kartikdoda.tech</h1>
                    <button onClick={toggleDarkMode}>
                        <Moon className='hover:scale-125 ml-5 transition duration-200 cursor-pointer' />
                    </button>
                </div>
            </header>
        </div>
        </>
    )
}


