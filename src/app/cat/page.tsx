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
        <div className={`h-screen flex flex-col ${darkmode ? 'dark' : ''}`}>
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-start pt-10">
                {/* Container for the cards */}
                <div className="flex flex-col md:flex-row flex-wrap gap-8 mt-4 mx-4 md:mx-8 lg:mx-16 justify-center">
                    {/* Project Card */}
                    <Link href="/projects">
                        <div className="shadow-md rounded-lg hover:shadow-lg transition duration-200 cursor-pointer w-full md:w-3/4 lg:w-2/3">
                            <div className="p-6 h-full flex flex-col justify-between">
                                <h2 className="text-2xl font-bold mb-2">Projects</h2>
                                <p className="mb-4 flex-grow">
                                    I try to build a project every week. Here are some of them.
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <p className="text-sm">November 3, 2024</p>
                                    <p className="text-sm">Kartik Doda</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Blog Card */}
                    <Link href="/blogs">
                        <div className="shadow-md rounded-lg hover:shadow-lg transition duration-200 cursor-pointer w-full md:w-3/4 lg:w-2/3">
                            <div className="p-6 h-full flex flex-col justify-between">
                                <h2 className="text-2xl font-bold mb-2">Blogs</h2>
                                <p className="mb-4 flex-grow">
                                    I write about things I study, generally Web3, FullStack, Entrepreneurship, etc...
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <p className="text-sm">November 3, 2024</p>
                                    <p className="text-sm">Kartik Doda</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
