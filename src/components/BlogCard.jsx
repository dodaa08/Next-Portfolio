import React from 'react';
import Link from "next/link";
import Image from "next/image";

function BlogCard({ title, imageSrc, description, previewLink }) {
  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/4 p-4">
      <div className="text-white flex flex-col py-3 px-6 rounded-xl shadow-md border-2 border-gray-700 font-mono transition-transform transform">
        <div className="border-b py-4 border-gray-600 mb-4">
          <div className="flex justify-center mb-4">
            <Image
              src={imageSrc}
              alt={title}
              className="h-20 w-auto rounded-xl object-cover"
              width={96}
              height={96}
            />
          </div>
          <h1 className="text-xl font-semibold text-center text-gray-100 mb-2">{title}</h1>
        </div>
        <p className="text-md text-gray-400 text-center mb-4">{description}</p>
        <div className="flex justify-center">
          <Link href={previewLink}>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-xl border-2 border-gray-600 hover:bg-gray-700 transition duration-200 transform mb-2">
              Preview
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
