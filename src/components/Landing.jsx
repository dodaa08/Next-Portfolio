"use client";

import React, { useState } from 'react';
import { Github, Moon, Twitter, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

function Landing() {
    const [darkmode, setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode(!darkmode);
    };

    return (
        <div className={`${darkmode ? 'bg-black text-white' : 'text-black bg-white'} h-screen w-screen flex flex-col`}>
            {/* Header Section */}
            <header className='flex-grow'>
                <div className='flex items-center py-4 px-10'>
                    <h1 className='text-2xl'>Kartikdoda.tech</h1>
                    <button onClick={toggleDarkMode}>
                        <Moon className='hover:scale-125 ml-5 transition duration-200 cursor-pointer' />
                    </button>
                </div>
            </header>

            {/* Main Content Section */}
            <main className='flex-grow flex-col justify-center items-center'>
                <ul className='text-center'>
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
                            Generally, I work with Next.js, TS/JS, React, TailwindCSS, Solidity, Rust, and Java. <br /> I&apos;m more into Web3 Development and have been working on building a Decentralized Marketplace using Solidity Contracts. <br /> I look forward to building and contributing to great web3 products, participating in hackathons, and collaborating with other developers.
                        </p>

                        <br />
                        <ul>
                            <li>
                                Besides coding, I am a Movie geek and love to play sports.
                            </li>
                            <li>
                                I play Badminton and Football. Here are some of my clips: &quot;Soon!&quot;
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
            </div>

            {/* Footer Section */}
            <footer className='flex justify-evenly cursor-pointer py-3'>
                <button>
                    <Link href="/categories">
                        <h1 className='text-xl hover:scale-110 transition duration-200 mr-4'>Categories</h1>
                    </Link>
                </button>
                <button>
                    <h1 className='text-xl hover:scale-110 transition duration-200'>Contact</h1>
                </button>
            </footer>
        </div>
    );
}

export default Landing;
