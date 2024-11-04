"use client";

import { Github, Moon, Twitter, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import quickgigs from '../../imgs/quickgigs.png';
import skillseva from "../../imgs/project2nd.jpg";
import dholo from "../../imgs/project3.png";
import Image from 'next/image';

export default function Page() {
    // State for Dark Mode Toggle
    const [darkmode, setDarkmode] = useState(false);

    // Dark Mode Toggle Function
    const toggleDarkMode = () => {
        setDarkmode(!darkmode);
    };

    return (
        <>
            <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-black'} h-full min-h-screen w-full flex flex-col`}>
                
                <header className='flex items-center py-4 px-10'>
                    <h1 className='text-2xl'>kartikdoda.tech</h1>
                    <button onClick={toggleDarkMode} className="ml-5">
                        <Moon className='hover:scale-125 transition duration-200 cursor-pointer' />
                    </button>
                </header>

                <main className='flex flex-col justify-center items-center mt-10 flex-grow'>
                    
                    <div className='shadow-md rounded-lg p-8 max-w-md w-full hover:shadow-lg transition duration-200 cursor-pointer mb-10'>
                        <h1 className='text-xl text-center mb-4'>Quick Gigs</h1>
                        <div className='flex justify-center mb-6'>
                            <Image src={quickgigs} alt="Quick Gigs" className="h-40 w-auto" />
                        </div>
                        <div className='text-center'>
                            <p className='text-lg text-gray-600 mb-6'>
                                A Decentralized Market Place, where users can come and post any sort of work. The Solidity contracts will automate the Payment (in crypto for now) once verified from both ends.
                            </p>
                        </div>
                        <div className='flex justify-around mt-4'>
                            <Link href="https://x.com/kartik___doda/status/1850478191934394825">
                                <button className='hover:scale-105 transition duration-200 hover:underline'>Preview</button>
                            </Link>
                            <Link href="https://github.com/dodaa08/Quick-gigs">
                                <button className='hover:scale-105 transition duration-200 hover:underline'>Github</button>
                            </Link>
                        </div>
                    </div>

                    <div className='shadow-md rounded-lg p-8 max-w-md w-full hover:shadow-lg transition duration-200 cursor-pointer mb-10'>
                        <h1 className='text-xl text-center mb-4'>Skill Seva</h1>
                        <div className='flex justify-center mb-6'>
                            <Image src={skillseva} alt="Skill Seva" className="h-40 w-auto" />
                        </div>
                        <div className='text-center'>
                            <p className='text-lg text-gray-600 mb-6'>
                                An end to end freelancing platform, Built using Next.JS, TypeScript, Supabase, Clerk, Stripe.
                                It&apos;s Ready and fully functional, Both the ends are connected with payment integration.
                            </p>
                        </div>
                        <div className='flex justify-around mt-4'>
                            <Link href="https://x.com/kartik___doda/status/1832169622386233410">
                                <button className='hover:scale-105 transition duration-200 hover:underline'>Preview</button>
                            </Link>
                            <Link href="https://github.com/dodaa08/SkillSeva-">
                                <button className='hover:scale-105 transition duration-200 hover:underline'>Github</button>
                            </Link>
                        </div>
                    </div>

                    <div className='shadow-md rounded-lg p-8 max-w-md w-full hover:shadow-lg transition duration-200 cursor-pointer mb-10'>
                        <h1 className='text-xl text-center mb-4'>Dholo</h1>
                        <div className='flex justify-center mb-6'>
                            <Image src={dholo} alt="Dholo" className="h-40 w-auto" />
                        </div>
                        <div className='text-center'>
                            <p className='text-lg text-gray-600 mb-6'>
                                An Android App built using Java, XML, Firebase. It&apos;s a Laundry Management app where users can book a laundry service, track their order, and get tokens online.
                            </p>
                        </div>
                        <div className='flex justify-around mt-4'>
                            <Link href="https://dholoapp.netlify.app/">
                                <button className='hover:scale-105 transition duration-200 hover:underline'>Preview</button>
                            </Link>
                            <Link href="https://github.com/dodaa08/DholoApp">
                                <button className='hover:scale-105 transition duration-200 hover:underline'>Github</button>
                            </Link>
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
}
