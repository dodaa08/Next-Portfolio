"use client";
import local from "next/font/local"; // Old import style
  // Correct import statement
import "./globals.css";
import Header from "../components/header"; // Import the Header component
import React, { useState } from "react";
import Head from "next/head";
import favicon from "./favicon.ico"

const geistSans = local({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = local({
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
        <title>Kartikdoda.tech</title>
        <meta name="Kartikdoda.tech" content="Kartik Doda's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden overflow-y-auto h-auto m-0 p-0`}>
        <div className={`${darkmode ? 'bg-stone-200 text-black' : ' bg-black/95 text-white'} flex flex-col min-h-screen`}>
          {/* Header Section */}
          <Header darkmode={darkmode} toggleDarkMode={toggleDarkMode} />

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="flex justify-center mt-auto py-4">
            <h1 className="text-sm md:text-base">2025 @kartikdoda.tech</h1>
          </footer>
        </div>
      </body>
    </html>
  );
}
