"use client"; // Required for client-side interactivity

import { useRouter } from "next/navigation";
import React from "react";

// Dummy data for blog posts (replace with API fetch or database data)
const blogPosts = [
  {
    id: 1,
    title: "What is AI?",
    content:
      "AI has greatly evolved in recent years due to a massive increase in the amount of data available...",
    date: "08 April 2024",
    image: "/Ai.webp",
  },
  {
    id: 2,
    title: "What is Agentic AI?",
    content:
      "Agentic AI refers to AI systems capable of making autonomous decisions ...",
    date: "08 April 2024",
    image: "/agentic.webp",
  },
  {
    id: 3,
    title: "What is Next.js 15?",
    content:
      "Next.js 15 is a popular framework that is used for building web applications with React...",
    date: "08 April 2024",
    image: "/next.jpeg",
  },
  {
    id: 4,
    title: "What is python?",
    content:
      "Python is an object-oriented, high-level programming language. The main feature of python is that it comes with dynamic semantics.",
    date: "08 April 2024",
    image: "/python.webp",
  },
  {
    id: 5,
    title: "What is Cloud Computing?",

    content:
      "Cloud computing is the on-demand delivery of IT resources over the internet...",
    date: "08 April 2024",
    image: "/cloud.webp",
  },
  {
    id: 6,
    title: "React.js",
    content:
      "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it....",
    date: "08 April 2024",
    image: "/react.webp",
  },
];

const Card = () => {
  const router = useRouter();

  const handleReadMore = (id: number) => {
    // Navigate to the blog post
    router.push(`/blog/${id}`);
  };

  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm">{post.content}</p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">
                  {post.date}
                </p>
                <button
                  onClick={() => handleReadMore(post.id)}
                  className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;


