"use client";
import Link from 'next/link';
import React from 'react';

function Page() {
  return (
    <>
      <div className='h-screen'>
        <div className='flex justify-center mt-10'>
          <h1 className='text-2xl'>Tags</h1>
        </div>

        <div className='flex flex-col space-y-10 mt-10'>
          <div className='flex justify-evenly'>
            <div className='bg-gray-300 text-black py-3 px-4 rounded-xl cursor-pointer hover:bg-gray-400'>
              <h1 className='text-xl py-3 text-center'>Blockchain</h1>
            </div>
            <div className='bg-gray-300 text-black py-3 px-4 rounded-xl cursor-pointer hover:bg-gray-400'>
              <h1 className='text-xl py-3 text-center'>Let's Build Projects Using AI</h1>
            </div>
            <div className='bg-gray-300 text-black py-3 px-4 rounded-xl cursor-pointer hover:bg-gray-400'>
              <h1 className='text-xl py-3 text-center'>Add Authentication to your projects</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
