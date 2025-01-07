import React from 'react';
import Link from "next/link";
import Image from "next/image";

function BlogCard({ title, imageSrc, description, previewLink }) {
  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/4 p-4">
      <div className="flex flex-col py-3 px-6 rounded-xl shadow-md border-gray-700 font-mono transition-transform transform">
        <div className="border-b py-4 border-gray-600 mb-4">
          <h1 className="text-xl font-semibold text-center  ">{title}</h1>
        </div>
        <p className="text-md  text-center mb-4">{description}</p>
        <div className="flex justify-center">
          <Link href={previewLink} target='_blank'>
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
