"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ProjectCard({ title, imageSrc, description, previewLink, githubLink }) {
    return (
        <div className='h-max shadow-md rounded-lg p-8 max-w-md w-full hover:shadow-lg transition duration-200 cursor-pointer mb-10'>
            <h1 className='text-xl text-center mb-4'>{title}</h1>
            <div className='flex justify-center mb-6'>
                <Image src={imageSrc} alt={title} className="h-40 w-auto" />
            </div>
            <div className='text-center'>
                <p className='text-lg text-gray-600 mb-6'>{description}</p>
            </div>
            <div className='flex justify-around mt-4'>
                <Link href={previewLink}>
                    <button className='hover:scale-105 transition duration-200 hover:underline'>Preview</button>
                </Link>
                <Link href={githubLink}>
                    <button className='hover:scale-105 transition duration-200 hover:underline'>Github</button>
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;
