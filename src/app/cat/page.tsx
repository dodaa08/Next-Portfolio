"use client";
import { Github, Moon, Twitter, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Page() {
    const [darkmode, setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode(!darkmode);
    };

    return (
        <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-black'} h-screen w-screen flex flex-col`}>
            {/* Header Section */}
            <header className='flex items-center py-4 px-10'>
                <h1 className='text-2xl'>kartikdoda.tech</h1>
                <button onClick={toggleDarkMode} className="ml-5">
                    <Moon className='hover:scale-125 transition duration-200 cursor-pointer' />
                </button>
            </header>

            {/* Main Content */}
            <main className='flex-grow flex flex-col items-center'>
                <h1 className="text-2xl cursor-pointer hover:scale-110 transition duration-200">Categories</h1>

                <div className="flex justify-between gap-4 mt-8  mt-20">
                    <Link href="/projects">
                        <div className=" shadow-md rounded-lg hover:shadow-lg transition duration-200 cursor-pointer">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">Projects</h2>
                                <p className="text-gray-700 mb-4">
                                    I try to build a project every week. Here are some of them.
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-600 text-sm">November 3, 2024</p>
                                    <p className="text-gray-600 text-sm">Kartik Doda</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="">
                        <div className=" shadow-md rounded-lg hover:shadow-lg transition duration-200 cursor-pointer">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">I write</h2>
                                <p className="text-gray-700 mb-4">
                                    I write about things I study, generally Web3, FullStack, Entrepreneurship, etc...
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-600 text-sm">November 3, 2024</p>
                                    <p className="text-gray-600 text-sm">Kartik Doda</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
