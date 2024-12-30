        import React from 'react'
        import Link from "next/link";
        import Image from "next/image";


        function BlogCard({title, imageSrc, description, previewLink, }) {
            return (
            <>
            <div className='px-12'>

            <div className="border-b border-gray-500  h-max shadow-md rounded-lg p-8 max-w-md w-full hover:shadow-lg transition duration-200 cursor-pointer mb-10 rounded-xl">
            <div className="flex justify-center mb-6 border-b border-gray-300">
                <Image src={imageSrc} alt={title} className="h-40 w-auto rounded-xl mb-4" />
            </div>
            <h1 className="text-xl text-center mb-2">{title}</h1>
            <div className="text-center">
                <p className="text-lg text-gray-600 mb-6">{description}</p>
            </div>
            <div className="flex justify-around mt-4">
                <Link href={previewLink} target='_blank'>
                <button className="hover:scale-105 transition duration-200 hover:underline">
                    Preview
                </button>
                </Link>
            
            </div>

            </div>
            </div>
            </>   
            )
        }

        export default BlogCard
