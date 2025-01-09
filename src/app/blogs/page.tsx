import appwrite from "../../imgs/appwrite.jpg";
import react from "../../imgs/redux.jpg";
import BlogCard from "../../components/BlogCard";

export default function Page() {
  const blogs = [
    {
      title: "Recoil",
      description: "Get Started with Advance State Management with Recoil",
      imageSrc: react,
      previewLink: "https://panoptic08.hashnode.dev/recoil",
    },
    {
      title: "Context API & Recoil",
      description: "Learn State Management from Scratch and Build Projects, We'll Slowly move to advance state management Recoil",
      imageSrc: react,
      previewLink: "https://readyy.hashnode.dev/context-api-simplified",
    },
    
    {
      title: "Build projects using BaaS Appwrite",
      description: "Get started with building full-stack projects using Appwrite",
      imageSrc: appwrite,
      previewLink: "https://readyy.hashnode.dev/appwrite-a-beginners-guide",
    },
    {
      title: "Figma",
      description: "Design your first project using Figma and UI/UX Principles (In Progress)",
      imageSrc: appwrite,
      previewLink: "",
    },
    {
      title: "Linux",
      description: "Learn Ubuntu, all commands and info here will be enough to get you started (In Progress)",
      imageSrc: appwrite,
      previewLink: "",
    },
    
  ];



  return (
    <div className="container mx-auto transform -translate-y-20 sm:py-20">  
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
