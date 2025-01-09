"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube, Instagram, File } from "lucide-react";



function Landing() {
    return (
        <>
        <div className="flex justify-center items-center h-screen translate-y-[-8%]">
            <div className="flex flex-col items-center gap-5 ">
            <div className="md:translate-x-[-128%] translate-x-[-60%]">
               <ul>
                 <li>
                  <h1 className="text-4xl font-serif">Hi, I am Kartik</h1>
                 </li>
              </ul>
           </div>
                <div className="flex flex-col gap-2 sm:px-28">
                    <h1 className="text-2xl font-serif">I am a Fullstack Web3 developer. I build web applications and smart contracts.</h1>
                    <h1 className="text-2xl font-serif">I enjoy contributing to open-source projects and Collaborating with people, <br /> I am currently learning Solana Development, View my active projects on Twitter.</h1>
                </div>
                <div className="md:translate-x-[-28%] sm:translate-x-[1%]">
                <h1 className="text-2xl font-serif">Besides coding I love travelling and playing Sports.</h1>
                </div>

                <div className="space-y-4 md:translate-x-[-170%] sm:translate-x-[-40%]  py-10">
                    <h2 className="text-xl font-semibold">Connect with me:</h2>
                    <div className="flex flex-col sm:grid-cols-2 gap-4">
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
        </>
    );
}

export default Landing;


// service ID : service_8rvez7k
// template ID : template_opywhdt
// public key



{
    /*
    Hi, I am Kartik
  I am a Fullstack Web3 developer. I build web applications and smart contracts.
  
  I enjoy contributing to open-source projects and Collaborating with people, I am currently learning Solana Development, View my active projects on Twitter.
  
  Besides coding I love travelling and playing Sports.
  
  Connect with me:
  @dodaa08
  @kartik___doda
  @Kartik Doda
  @kartik__doda
  @kartik__doda
  Resume
    */ 
  } 