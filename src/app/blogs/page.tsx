import React from 'react';

export default function Page() {
  const blogs = [
    {
      name: "Build Projects on Etherium Blockchain",
    },
    {
      name: "Let's build projects utilizing huggingface..",
    },
    
  ];

  let count = 1;

  return (
    <div className="p-4 te min-h-screen">
      <h2 className="text-2xl mb-4 text-center">Blog Posts</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-400 rounded py-3 px-3 flex flex-col md:flex-row gap-5 text-black w-full md:w-auto"
          >
            <h1 className="text-lg">{blog.name}</h1>
            <span className="self-end md:self-center">{count++}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
