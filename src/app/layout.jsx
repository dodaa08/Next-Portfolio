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
        <title>Create Next App</title>
        <meta name="kartikdoda.tech" content="Portfolio" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
      <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-black'} h-screen w-full flex flex-col flex-grow h-auto`}>
          {/* Header Section */}
          <header className='flex-grow '>
                <div className='flex items-center py-4 px-10 justify-between'>

                    <div className='flex'>

                    <h1 className='text-2xl'>kartikdoda.tech</h1>
                    <button onClick={toggleDarkMode}>
                        <Moon className='hover:scale-125 ml-5 transition duration-200 cursor-pointer' />
                    </button>
                   
                    </div>

                   <div className=' flex space-x-12'>

                    <button>
                    <Link href="/cat">
                        <h1 className='text-xl hover:scale-110 transition duration-200 mr-4 hover:underline '>Categories</h1>
                    </Link>
                </button>
                <button>
                    <h1 className='text-xl hover:scale-110 transition duration-200 hover:underline '>Contact</h1>
                </button>
                   </div>
                </div>
        </header>
          {children}
          <footer className="flex justify-center">
            <h1>2024 @kartikdoda.tech</h1>
          </footer>
        </div>
      </body>
    </html>
  );
}
