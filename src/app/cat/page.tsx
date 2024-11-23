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
        <div className={`h-max  flex flex-col    translate-y-[-20%]`}>
            <main className='flex-grow flex flex-col items-center'>
                {/* Container for the cards */}
                <div className="flex flex-col md:flex-row flex-wrap gap-8 mt-10 mx-4 md:mx-0 justify-center">
                    {/* Project Card */}
                    <Link href="/projects">
                        <div className="hadow-md rounded-lg hover:shadow-lg transition duration-200 cursor-pointer w-full md:w-4/10 lg:w-4/10     xl:w-4/10">
                            <div className="p-6 h-full flex flex-col justify-between">
                                <h2 className="text-2xl font-bold mb-2">Projects</h2>
                                <p className="text-gray-700 mb-4 flex-grow">
                                    I try to build a project every week. Here are some of them.
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <p className="text-gray-600 text-sm">November 3, 2024</p>
                                    <p className="text-gray-600 text-sm">Kartik Doda</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Blog Card */}
                    <Link href="/blogs">
                        <div className="shadow-md rounded-lg hover:shadow-lg transition duration-200 cursor-pointer w-full md:w-4/10 lg:w-4/10     xl:w-4/10">
                            <div className="p-6 h-full flex flex-col justify-between">
                                <h2 className="text-2xl font-bold mb-2">I write</h2>
                                <p className="text-gray-700 mb-4 flex-grow">
                                    I write about things I study, generally Web3, FullStack, Entrepreneurship, etc...
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <p className="text-gray-600 text-sm">November 3, 2024</p>
                                    <p className="text-gray-600 text-sm">Kartik Doda</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Achieve Card */}
                <div className="flex flex-col md:flex-row flex-wrap gap-8 mt-10 mx-4 md:mx-0 justify-center">
                    <Link href="">
                        <div className="shadow-md rounded-lg hover:shadow-lg transition duration-200 cursor-pointer w-full md:w-4/10 lg:w-4/10     xl:w-4/10">
                            <div className="p-6 h-full flex flex-col justify-between">
                                <h2 className="text-2xl font-bold mb-2">Achieve</h2>
                                <p className="text-gray-700 mb-4 flex-grow">
                                    Set of goals which I&apos;ve achieved and want to achieve.
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <p className="text-gray-600 text-sm">November 14, 2024</p>
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
