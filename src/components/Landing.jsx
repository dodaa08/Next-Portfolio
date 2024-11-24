"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube, Instagram, File } from "lucide-react";

function Landing() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 lg:px-24 translate-y-[-4%]">
            <div className="w-full max-w-3xl space-y-10">
                {/* Introduction Section */}
                <div className="space-y-4 text-left">
                    <h1 className="text-3xl font-mono font-bold">Hi, I am Kartik</h1>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                        I am a Fullstack Web3 developer. I build web applications and smart contracts using Ethereum and other blockchain technologies.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                        I enjoy contributing to open-source projects and collaborating with like-minded individuals to create meaningful solutions.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                        I am currently learning Solana Development and I am open to Freelance work.
                    </p>
                </div>

                {/* Social Links Section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Connect with me:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link href="https://github.com/dodaa08" className="flex items-center gap-2">
                            <Github />
                            <span>@dodaa08</span>
                        </Link>
                        <Link href="https://x.com/kartik___doda" className="flex items-center gap-2">
                            <Twitter />
                            <span>@kartik___doda</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/kartikd4152g/" className="flex items-center gap-2">
                            <Linkedin />
                            <span>@Kartik Doda</span>
                        </Link>
                        <Link href="https://www.youtube.com/@Kartik_Doda" className="flex items-center gap-2">
                            <Youtube />
                            <span>@kartik__doda</span>
                        </Link>
                        <Link href="https://www.instagram.com/kartik__doda/" className="flex items-center gap-2">
                            <Instagram />
                            <span>@kartik__doda</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <File />
                            <span>Resume</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
