"use client";

import React from "react";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  File,
} from "lucide-react";

function Landing() {
  return (
    <div className="flex justify-center items-center h-screen md:translate-y-[-20%]">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        {/* Intro Section */}
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hi, I am Kartik
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl">
            I am a Fullstack Web3 developer. I build web applications and smart
            contracts.
          </p>
          <p className="text-lg sm:text-xl max-w-3xl">
            I enjoy contributing to open-source projects and collaborating with
            people. I am currently learning Solana Development. View my active
            projects on Twitter.
          </p>
          <p className="text-lg sm:text-xl max-w-3xl">
            Besides coding, I love traveling and playing sports.
          </p>
        </div>

        {/* Connect Section */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold  text-center">
            Connect with me:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 justify-items-center">
            <Link
              href="https://github.com/dodaa08"
              className="flex items-center gap-3 "
            >
              <Github />
              <span>@dodaa08</span>
            </Link>
            <Link
              href="https://x.com/kartik___doda"
              className="flex items-center gap-3  "
            >
              <Twitter />
              <span>@kartik___doda</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/kartikd4152g/"
              className="flex items-center gap-3 "
            >
              <Linkedin />
              <span>@Kartik Doda</span>
            </Link>
            <Link
              href="https://www.youtube.com/@Kartik_Doda"
              className="flex items-center gap-3 "
            >
              <Youtube />
              <span>@kartik__doda</span>
            </Link>
            <Link
              href="https://www.instagram.com/kartik__doda/"
              className="flex items-center gap-3  "
            >
              <Instagram />
              <span>@kartik__doda</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3  "
            >
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
