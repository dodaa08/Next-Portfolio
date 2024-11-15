"use client";
import Link from 'next/link';
import React from 'react';

function Page() {
  return (
    <div className='h-screen'>
      <div className='flex mt-10'>
        <h1 className='text-2xl px-8 md:px-96 font-bold'>Tags</h1>
      </div>

      <div className='flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 gap-10 mt-10'>
        {/* Tag 1 */}
        <div className='bg-gray-300 text-black py-3 px-4 rounded-xl cursor-pointer hover:bg-gray-400 w-full md:w-1/6  '>
          <h1 className='text-xl text-center'>Blockchain</h1>
        </div>

        {/* Tag 2 */}
        <div className='bg-gray-300 text-black py-3 px-4 rounded-xl cursor-pointer hover:bg-gray-400 w-full md:w-1/6  '>
          <h1 className='text-xl text-center'>Let&apos;s Build Projects Using AI</h1>
        </div>

        {/* Tag 3 */}
        <div className='bg-gray-300 text-black py-3 px-4 rounded-xl cursor-pointer hover:bg-gray-400 w-full md:w-1/6  '>
          <h1 className='text-xl text-center'>Add Authentication to your projects</h1>
        </div>
      </div>
    </div>
  );
}

export default Page;
