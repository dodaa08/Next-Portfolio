"use client";

import React from "react";


function BlogCard({ title, imageSrc, description, previewLink }) {
  
  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/4 p-4">
      <div className="flex flex-col py-3 px-6 rounded-xl shadow-md border-gray-700 font-mono transition-transform transform">
        <div className="border-b py-4 border-gray-600 mb-4">
          <h1 className="text-xl font-semibold text-center">{title}</h1>
        </div>
        <p className="text-md text-center mb-4">{description}</p>
        <div className="flex justify-center">
          <button
             // Attach the click handler here
            className={`bg-gray-800 text-white py-2 px-4 rounded-xl border-2 border-gray-600 hover:bg-gray-700 transition duration-200 transform mb-2 ${
              !previewLink ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={!previewLink} // Disable the button if no link is provided
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
} 

export default BlogCard;
