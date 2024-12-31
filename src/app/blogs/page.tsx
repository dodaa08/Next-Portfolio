import appwrite from "../../imgs/appwrite.jpg";
import react from "../../imgs/redux.jpg";
import BlogCard from "../../components/BlogCard";

export default function Page() {
  const blogs = [
    {
      title: "Context API & Recoil",
      description: "Learn State Management from Scratch and Build Projects, We'll Slowly move to advance state management Recoil",
      imageSrc: react,
      previewLink: "https://readyy.hashnode.dev/context-api-simplified",
    },
    {
      title: "Recoil",
      description: "Get Started with Advance State Management with Recoils (Will post Soon)",
      imageSrc: react,
      previewLink: "/blogs",
    },
    {
      title: "Build projects using BaaS Appwrite",
      description: "Get started with building full-stack projects using Appwrite",
      imageSrc: appwrite,
      previewLink: "https://readyy.hashnode.dev/appwrite-a-beginners-guide",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            imageSrc={blog.imageSrc}
            previewLink={blog.previewLink}
          />
        ))}
      </div>
    </div>
  );
}
