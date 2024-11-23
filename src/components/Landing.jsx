"use client";

import React from "react";
import Link from "next/link";
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { File } from 'lucide-react';

function Landing() {
    return (
        <div className={`h-max translate-y-[-20%]`}>
            {/* Container for content */}
            <div className="flex flex-col items-center justify-center space-y-8">
                {/* Section 1 */}
                <div className="text-left translate-x-[-190%]">
                    <h1 className="text-xl font-mono">Hi, I am Kartik</h1>
                </div>

                {/* Section 2 */}
                <div className="text-left space-y-1 translate-x-[-3%]">
                    <h1 className="text-xl">
                        I am a Fullstack Web3 Developer, I&apos;ve been building a lot of products since past 1 year.
                    </h1>
                    <h1 className="text-xl">
                        I&apos;ve built projects like A Freelancing platform with automated Payment in POL(Crypto)
                    </h1>
                    <h1 className="text-xl">
                        An AI Email Writer and Sender, Send Emails one click, Building more cool stuff.
                    </h1>
                    <h1 className="text-xl">I am open to freelance work.</h1>
                </div>
                <div className="text-left flex space-x-5 translate-x-[-118%]">
                    <Link href="https://github.com/dodaa08">
                        <Github />
                    </Link>
                    <Link href="https://x.com/kartik___doda">
                        <Twitter />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kartikd4152g/">
                        <Linkedin />
                    </Link>
                    <Link href="https://www.youtube.com/@Kartik_Doda">
                        <Youtube />
                    </Link>
                    <Link href="https://www.instagram.com/kartik__doda/?next=%2F">
                        <Instagram />
                    </Link>
                    <Link href="">
                        <File />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;
