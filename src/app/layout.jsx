"use client";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header"; // Import the Header component
import React, { useState } from "react";
import Head from "next/head";

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
        <title>Kartik Doda | Portfolio</title>
        <meta name="description" content="Kartik Doda's Portfolio" />
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdjHccMvk0tXptYKvmhsNSK1wyKUXqoohOA&s" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden overflow-y-auto h-auto m-0 p-0`}>
        <div className={`${darkmode ? 'bg-white text-black' : ' bg-black/95 text-white'} flex flex-col min-h-screen`}>
          {/* Header Section */}
          <Header darkmode={darkmode} toggleDarkMode={toggleDarkMode} />

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="flex justify-center mt-auto py-4">
            <h1 className="text-sm md:text-base">2024 @kartikdoda.tech</h1>
          </footer>
        </div>
      </body>
    </html>
  );
}
