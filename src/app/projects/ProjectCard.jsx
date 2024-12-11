"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProjectCard({ title, imageSrc, description, previewLink, githubLink, techStack=[], status }) {
    
        const generteToast = ()=>{
            if(previewLink == ""){
                toast.error("Project in progress, view github..", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
            }

        }
      

    return (
        <div className='border-b border-gray-500 h-max shadow-md rounded-lg p-8 max-w-md w-full hover:shadow-lg transition duration-200 cursor-pointer mb-10 rounded-xl'>
            <div className='flex justify-center mb-6 border-b border-gray-300'>
                <Image src={imageSrc} alt={title} className="h-40 w-auto rounded-xl mb-4" />
            </div>
            <h1 className='text-xl text-center mb-2'>{title}</h1>
            <div className='text-center'>
                <p className='text-lg text-gray-600 mb-6'>{description}</p>
            </div>
            <div className='flex justify-around mt-4'>
                <Link href={previewLink}>
                    <button onClick={generteToast} className='hover:scale-105 transition duration-200 hover:underline'>Preview</button>
                </Link>
                <Link href={githubLink}>
                    <button className='hover:scale-105 transition duration-200 hover:underline'>Github</button>
                </Link>
            </div>
            <div className='flex justify-evenly flex-wrap'>
                {techStack.map((tech, index) => (
                    <span key={index} className='bg-gray-300 text-gray-700 px-2 py-1 rounded-l text-sm mt-4'>{tech}</span>
                ))}
            </div>
            <div className='text-center text-l mt-5'>
                {status}
            </div>
        </div>
    );
}

export default ProjectCard;
