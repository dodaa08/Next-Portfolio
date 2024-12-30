import React from 'react';
import BlogCard from "../../components/BlogCard"
import appwrite from "../../imgs/appwrite.jpg"
import react from "../../imgs/redux.jpg"

export default function Page() {
  const blogs = [
    {
     title : "Context API & Recoil",
     discription  : "Introduction to state Management",
     imageSrc : react,
     previewLink : "https://readyy.hashnode.dev/context-api-simplified"
    }, 
    
     {
      title : "Build projects using BaaS Appwrite",
      discription  : "Get Started with building fullStack projects using Appwrite",
      imageSrc : appwrite,
      previewLink : "https://readyy.hashnode.dev/appwrite-a-beginners-guide"
     }, 
     
  ];

  return (
    <>
    <main className="flex flex-col items-center space-y-8 px-4 py-10">
    <div className='mb-10 border-b  border-gray-400'>
            <h1 className='text-3xl  font-mono '>Blogs</h1>
            </div>
    <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-8'>
           {
             blogs.map((blog, index)=>(
               <div key={index}>
                 <BlogCard title={blog.title} description={blog.discription} imageSrc={blog.imageSrc} previewLink={blog.previewLink} />
              </div>
            ))
          }
          </div>
            
        </main>
    </>
  );
}
