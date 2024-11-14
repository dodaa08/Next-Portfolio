"use client";

import React, { useState } from 'react';
import { Github, Moon, Twitter, Linkedin, Youtube, FileUser } from 'lucide-react';
import Link from 'next/link';

function Landing() {
    const [darkmode, setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode(!darkmode);
    };

    return (
        <div className={`h-screen w-screen flex flex-col items-center justify-center space-y-20`}>
            <main className='flex flex-col items-center justify-center text-center'>
                <ul>
                    <li className=''>
                        <p className='text-xl font-mono'>Hi, I am Kartik</p>
                        <p className='text-xl font-mono'>I am a FullStack Web3 Developer..</p>
                        <p className='text-xl font-mono'>I&apos;ve worked with various projects in both Web and Android Development.</p>
                        <p className='text-xl font-mono'>Tech Stacks I generally work with:- <br />Next, React, Tailwind, Node.js, MongoDB, SQL, Java-xml, Solidity.</p>
                    </li>
                    <li className='mt-2'>
                        <br />
                        <p className='text-xl font-mono'> 
                          Building Spamurai, an AI cold Email Writer and Sender with data stored on Aptos blockchain.
                        </p>
                        <br />
                        <ul>
                            <li>
                                I also play Sports: <p className='text-blue-500 hover:text-blue-800 cursor-pointer'>Soon!</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </main>
            
            <div className="flex justify-center p-5 gap-6 mb-5">
                <Link href="https://github.com/dodaa08" target="_blank" rel="noopener noreferrer">
                    <Github className='hover:scale-110 transition duration-200 cursor-pointer' />
                </Link>

                <Link href="https://x.com/kartik___doda" target="_blank" rel="noopener noreferrer">
                    <Twitter className='hover:scale-110 transition duration-200 cursor-pointer' />
                </Link>

                <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className='hover:scale-110 transition duration-200 cursor-pointer' />
                </Link>

                <Link href="https://www.youtube.com/@Kartik_Doda" target="_blank" rel="noopener noreferrer">
                    <Youtube className='hover:scale-110 transition duration-200 cursor-pointer' />
                </Link>

                <Link href="https://www.youtube.com/@Kartik_Doda" target="_blank" rel="noopener noreferrer">
                    <FileUser className='hover:scale-110 transition duration-200 cursor-pointer' />
                </Link>
            </div>
        </div>
    );
}

export default Landing;