"use client";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";
import { Moon } from 'lucide-react';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <html lang="en">
      <Head>
        <title>kartikdoda.tech</title>
        <meta name="kartikdoda.tech" content="Portfolio" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-black'} h-auto flex flex-col flex-grow`}
        >
          {/* Header Section */}
          <header className='flex-grow'>
            <div className='flex items-center py-4 px-4 md:px-10 justify-evenly border-b border-gray-900 font-mono'>

              <div className='flex items-center'>
                <h1 className='text-xl md:text-2xl'>kartikdoda.tech</h1>
                <button onClick={toggleDarkMode}>
                  <Moon className='hover:scale-125 ml-3 md:ml-5 transition duration-200 cursor-pointer' />
                </button>
              </div>

              <div className='flex space-x-6 md:space-x-12'>
                <button>
                  <Link href="/cat">
                    <h1 className='text-lg md:text-xl hover:scale-110 transition duration-200 hover:underline'>Categories</h1>
                  </Link>
                </button>
                <button>
                  <h1 className='text-lg md:text-xl hover:scale-110 transition duration-200 hover:underline'>Contact</h1>
                </button>
              </div>
            </div>
          </header>

          {children}

          <footer className="flex mt-10 justify-center">
            <h1 className="text-sm md:text-base">2024 @kartikdoda.tech</h1>
          </footer>
        </div>
      </body>
    </html>
  );
}
