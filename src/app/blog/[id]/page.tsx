"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

// Blog posts data
const blogPosts: Record<
  number,
  { title: string; content: string; date: string; image?: string }
> = {
  1: {
    title: "What is AI?",
    content:
      "Artificial Intelligence (AI) is a transformative technology that mimics human intelligence to perform tasks such as learning, problem-solving, and decision-making. It leverages algorithms and vast datasets to identify patterns, make predictions, and automate processes. AI has become integral to industries like healthcare, education, and entertainment, revolutionizing how we interact with technology. From virtual assistants like Siri and Alexa to self-driving cars and personalized recommendations, AI is shaping our daily lives.The core of AI lies in machine learning and deep learning, where systems improve themselves based on data. For instance, in healthcare, AI helps in early disease detection by analyzing medical images and patient histories. In business, it streamlines operations through chatbots, predictive analytics, and fraud detection. Education has also benefited, with AI creating personalized learning paths for students.Despite its advantages, AI raises ethical concerns about job displacement, data privacy, and decision-making transparency. As technology evolves, addressing these challenges is crucial to ensure AI remains a force for good. With ongoing advancements, AI continues to push boundaries, promising a future where machines enhance human capabilities and drive innovation....",
    date: "25 December 2024",
    image: "/Ai.webp",
  },
  2: {
    title: "What is Agentic AI?",
    content:
      "Agentic AI refers to artificial intelligence systems designed to act as autonomous agents, capable of making decisions, taking actions, and achieving goals independently. These systems possess a high level of adaptability and can interact dynamically with their environment. Unlike traditional AI, which requires direct input or predefined rules, agentic AI can learn from its surroundings, assess situations, and execute tasks with minimal human intervention.The core feature of agentic AI is its ability to function with agency, meaning it can set objectives, plan strategies, and modify its behavior to meet changing conditions. For example, in robotics, an agentic AI can navigate a new environment, avoiding obstacles and completing tasks without explicit programming. Similarly, in customer service, it can proactively assist users by understanding their needs and offering solutions.Agentic AI relies heavily on advanced algorithms, reinforcement learning, and neural networks. These technologies enable it to process vast amounts of data, predict outcomes, and improve performance over time. While it opens new possibilities in automation and efficiency, it also poses ethical concerns about control, accountability, and the potential for unintended consequences. As agentic AI continues to evolve.....",
    date: "25 December 2024",
    image: "/agentic.webp",
  },
  3: {
    title: "What is Next.js?",
    content:
      "Next.js is a popular open-source React framework that simplifies the development of modern web applications. Built on top of React, it provides powerful features like server-side rendering (SSR), static site generation (SSG), and dynamic routing, making it ideal for building high-performance websites and applications. With Next.js, developers can create seamless, user-friendly interfaces while optimizing for speed and scalability.One of the standout features of Next.js is its ability to render pages on the server, which improves search engine optimization (SEO) and provides faster page load times. It also supports hybrid applications, allowing developers to combine server-side and static rendering within the same project. This flexibility makes it suitable for various use cases, from e-commerce platforms to content management systems.Next.js comes with built-in routing, automatic code splitting, and easy integration of APIs. It also supports incremental static regeneration (ISR), enabling websites to update static content without redeployment. Moreover, its hot reloading feature speeds up the development process by instantly reflecting changes in the browser.With a robust community and comprehensive documentation, Next.js continues to grow as a go-to framework for modern web development....",
    date: "25 December 2024",
    image: "/next.jpeg",
  },
  4: {
    title: "What is Python?",
    content:
      "Python is a high-level versatile programming language widely recognized for its simplicity and readability. Created by Guido van Rossum in 1991. Python has grown into one of the most popular languages in the world. Its clean syntax makes it beginner-friendly while its powerful libraries and frameworks make it suitable for advanced programming tasks. Python is applications are vast ranging from web development with frameworks like Django and Flask to data analysis and visualization with libraries like Pandas, NumPy and Matplotlib. In artificial intelligence and machine learning Python shines with tools like TensorFlow and PyTorch. It is also used for automation, scripting and game development. Python is cross-platform compatibility allows developers to write code that runs seamlessly on different operating systems. The language supports multiple programming paradigms, including object-oriented procedural, and functional programming, offering flexibility for various projects. Its interactive interpreter makes it ideal for prototyping and experimentation. Python is extensive standard library simplifies common tasks like file handling web scraping and database management. Additionally its vibrant community provides vast resources tutorials and support, making it an excellent choice for learners and professionals alike. Python is not only a tool for building software but also a catalyst for innovation enabling developers to turn their ideas into reality efficiently and effectively....",
    date: "25 December 2024",
    image: "/python.webp",
  },
  5: {
    title: "What is Cloud Computing?",
    content:
     `Cloud computing refers to the delivery of computing services, such as storage, processing power, networking, software, and databases, over the internet (the "cloud"). Instead of owning and maintaining physical servers or infrastructure, businesses and individuals can rent or access these services from cloud providers like Amazon Web Services (AWS), Microsoft Azure, or Google Cloud.

There are three main types of cloud computing:

1. **Infrastructure as a Service (IaaS)** – Provides virtualized computing resources over the internet. It includes virtual machines, storage, and networking, allowing users to manage and run applications without owning physical hardware.

2. **Platform as a Service (PaaS)** – Offers a platform that allows developers to build, deploy, and manage applications without worrying about the underlying infrastructure. Examples include Google App Engine and Microsoft Azure.

3. **Software as a Service (SaaS)** – Delivers software applications over the internet, eliminating the need for users to install or maintain software on their devices. Examples include Google Workspace, Dropbox, and Microsoft 365.

Cloud computing offers benefits like scalability, flexibility, cost-efficiency, and ease of access, enabling users to access resources and data from anywhere, at any time, on any device.`,
    date: "25 December 2024",
    image: "/cloud.webp",
  },
  6: {
    title: "React.js",
    content:
      `**React** is a **JavaScript library** used for building user interfaces, particularly for single-page applications. It is developed and maintained by Facebook and a community of developers. React focuses on creating interactive, reusable UI components that efficiently update and render as the data changes.

### Key Features of React:
1. **Component-Based Architecture**:  
   React applications are built using components, which are independent, reusable pieces of UI. Components can be nested and combined to create complex user interfaces.

2. **Virtual DOM**:  
   React uses a Virtual DOM to enhance performance. Instead of directly manipulating the DOM, React creates a lightweight copy of the DOM and only updates the parts of the actual DOM that have changed.

3. **Declarative Syntax**:  
   React allows developers to describe what the UI should look like for a given state, and it takes care of updating the UI when the state changes.

4. **JSX (JavaScript XML)**:  
   React uses JSX, a syntax extension that allows developers to write HTML-like code inside JavaScript. JSX makes it easier to visualize the structure of the UI components.

5. **Unidirectional Data Flow**:  
   React enforces a one-way data binding approach, meaning data flows from parent to child components. This makes applications predictable and easier to debug.

6. **Rich Ecosystem**:  
   React has a large ecosystem, including tools like React Router for routing, and state management libraries like Redux and Context API.

### Why Use React?
- **Fast Development**: Component reusability and a vast library of third-party components speed up development.
- **High Performance**: The Virtual DOM ensures efficient updates and rendering.
- **Cross-Platform Development**: With frameworks like React Native, React can be used for mobile app development.
- **Scalability**: Suitable for both small applications and large-scale, complex projects.

### Use Case Examples:
- Single-page applications (e.g., Gmail, Trello)
- Dynamic websites with frequent content updates
- Interactive dashboards and data visualization tools
- Mobile applications (using React Native)

React is widely adopted due to its flexibility, ease of use, and ability to create robust and dynamic applications efficiently.`,
    date: "25 December 2024",
    image: "react.webp",
  },
};

const BlogPost = () => {
  const params = useParams();
  const id = params?.id;

  // Get the post based on the ID from the URL
  const post = blogPosts[Number(id) as keyof typeof blogPosts];

  // State for comments
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );
  const [newName, setNewName] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  // Add a new comment
  const addComment = () => {
    if (newName.trim() && newComment.trim()) {
      setComments([...comments, { name: newName, comment: newComment }]);
      setNewName("");
      setNewComment("");
    }
  };

  // If post is not found
  if (!post) {
    return <p className="text-center text-red-500">Blog post not found.</p>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto text-center bg-slate-100">
      {/* Blog Post Content */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto font-sans mt-6">
        <div className="p-6">
          <h3 className="text-gray-900 text-2xl font-bold mb-4 hover:text-orange-400 hover:underline transition-colors duration-200">
            {post.title}
          </h3>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto mb-4 rounded-md"
            />
          )}
          <p className="text-sm text-gray-800 leading-relaxed mb-4">
            {post.content}
          </p>
          <p className="text-sm text-orange-500 font-semibold">
            Published on: {post.date}
          </p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto p-6 mt-8 max-w-3xl">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500 italic">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded shadow-sm text-left"
              >
                <p className="font-bold text-gray-700">{comment.name}:</p>
                <p className="text-gray-600">{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Add Comment Form */}
        <div className="mt-6">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Your name..."
            className="border border-gray-300 p-2 rounded w-full mb-3 focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            className="border border-gray-300 p-2 rounded w-full mb-3 h-20 focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            onClick={addComment}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
