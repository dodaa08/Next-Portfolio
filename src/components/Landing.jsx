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
            <main className=' flex flex-col items-center justify-center text-center space-y-4'>
                <ul>
                    <li>
                        <p className='text-xl font-mono'>Hi, I am Kartik</p>
                        <p className='text-xl font-mono'>I am a FullStack Web3 Developer from India.</p>
                    </li>
                    <li className='mt-2'>
                        <p>
                            I&apos;ve currently been learning about Solana Development and have worked with various tech stacks in both Web and Android Development.
                        </p>
                        <br />
                        <p>
                            Generally, I work with Next.js, TS/JS, React, TailwindCSS, Solidity, Rust, and Java. <br /> I&apos;m more into Web3 Development and have been working on building a Decentralized Marketplace using Solidity Contracts.
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
            

            {/* Social Media Icons Section */}
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
