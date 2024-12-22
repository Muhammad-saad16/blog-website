"use client"; 
import { useParams } from "next/navigation";
import Image from 'next/image'
import { useState } from "react";

interface BlogPost {
    title: string
    image?: string
    content: string
    date: string
}
// interface BlogPosts {
//     [key: string]: BlogPost
// }


const BlogPost = () => {
    const params = useParams()
    const { id } = params

    
    const blogPosts = {
        1: {
            title: "What is Ai",
            image: "/Ai.webp",
            content: `AI has greatly evolved in recent years due to a massive increase in the amount of data available and the benefits that AI brings to companies. Over the past several decades, we’ve seen technological advancements, economic development, and rapid growth of companies. These changes have caused a substantial increase in the amount of circulating data we have. Artificial intelligence (AI) has greatly evolved due to these large amounts of data. AI plays a huge role in our world today, but in 2017, when 1,500 senior executives were asked about their familiarity with AI, only 17% (250 respondents) were familiar with both the concept and its application for their companies [1]. Many people were not familiar with AI half a decade ago, but now people are much more familiar with the term, as it has entered the cultural zeitgeist. Despite this, many conceptually misunderstand how AI works and functions. So what exactly is AI? Father of AI, John McCarthy, defines AI as “the science and engineering of making intelligent machines.” [2] It is a computer program that performs tasks by simulating human intelligence. It does this by using advanced algorithms that allow software to format and process data. You may be familiar with Siri, a virtual assistant in Apple products. Siri uses AI to perform tasks such as answering questions, finding information, and performing actions for the user. Siri uses natural language processing (NLP) to understand requests from the user and respond in a human-like manner. It uses machine learning (ML) models and algorithms to analyze data. For example, if you ask Siri for information about the weather forecast, Siri will use ML to collect and analyze data from various weather sources and provide you with relevant and accurate information about the weather. [3] ML refers to the specific algorithms/technologies that computers use to make decisions, whereas AI is used to allow computers to think like a human. AI allows technology to become extremely advanced. Let’s take a closer look at its benefits and the role it plays in our world. AI has completely transformed the workplace by increasing the productivity of companies. Technology is now able to perform repetitive tasks quickly and with minimal errors. An example of this can be seen by chatbots, like ChatGPT. Chatbots interact with customers to provide immediate customer support (questions, complaints, etc), and this is a very important feature for companies that have daily interactions with their customers. The time needed to assist the customer is dramatically reduced with the chatbots. AI machines can help with other administrative tasks, such as maintaining records, pre-authorizing insurance, and more. [4] This increases efficiency by eliminating the need for humans to do this work by hand. AI has also resulted in smarter and faster decision making by processing data in a way that develops accurate probabilistic outcomes. Workers can use this saved time to complete more complex and creative tasks for the company. The emergence of AI has also allowed for immense progression in the medical field. Various ML models use elements of mathematics, statistics, and computer science in order to navigate medical data. AI can be used to detect diseases, provide treatment options, and consolidate medical data in a way that is easy for clinicians to find. Research has shown that AI is just as effective and accurate as human radiologists in detecting signs of breast cancer and other health conditions. [5] It also reduces healthcare costs, minimizes medical errors, and provides after hours services to patients.

While it is clear that AI plays a very beneficial role in the way we live and work, many people have expressed concerns with some of the potential drawbacks that the technology has. Firstly, it is extremely expensive — creating the machine itself requires a lot of time and money, and the software requires high costs as well in order to stay updated. That being said, this expense is understandable considering this technology is able to simulate human intelligence. Many people bring up the issue of unemployment and how technology will eventually “take all of our jobs.” Even though AI software is able to complete tasks done by humans, these only include basic, automated tasks. When Excel first came out, a lot of people thought the software would take away accountants’ jobs and were worried about job security, but Excel allowed accountants and other workers to streamline their work processes and accomplish tasks faster without taking away their jobs.

Although AI can perform some human tasks and may replace some jobs, humans have several skills that make them necessary in the workplace. There is a limit to what AI software can do, for multiple reasons: 1) AI does not have emotional intelligence. An emotional connection is very important in the workplace, especially when interacting with customers. 2) AI has limited creativity. It cannot think of new ideas or use its imagination. 3) AI doesn’t change with new experiences. The human brain has the power to improvise and invent, while AI does not. [6]

As humans we interact with AI technology on a daily basis without even realizing it. There is still a lot of research yet to be done on how to maximize AI benefits, but it is extremely prevalent in our world today and has the potential to continue growing in the future.

`,
            date: "08 April 2024",

        },
        2: {
            title: "What is Agentic AI?",
            image: "/agentic.webp",
            content:
                "In the current craze about AI, it’s sometimes easy to forget that AI can be used for more than creating chatbots or generating images. Agentic AI or ‘autonomous AI’ brings a different dimension in a sense that agents can make decisions, carry out tasks and learn from interactions. Whereas generative AI relies on human input in the form of prompts or set rules to create specific output, agentic AI is designed to make decisions independently and take proactive actions. Generative AI is focused on creative outputs like images or video. Agentic AI makes decisions or takes actions that are aligned with achieving a specific goal. “Chaining” an essential element of agentic AI, which enables the AI to perform a sequence of actions in response to a single request. Complex tasks can thus be broken down into smaller steps. Healthcare, for example, is an area where AI agents can introduce significant patient benefits and efficiencies by predicting patient health issues. This prediction is a complex task which the AI agent would tackle autonomously through specific steps:Collect patient data — Gathering patient data from electronic health records and combining this with data from other sources (e.g. wearables or genetic info).Risk factor analysis — Identifying known risk factors for certain diseases and analysing patient data to see if these risk factors are present.Pattern recognition — Using machine learning to detect patterns in patient data, and comparing individual patient data to large data sets of patients with similar patterns.Predictive modelling — Developing predictive models for specific diseases and applying these predictions to the individual patient.Longitudinal analysis — Tracking changes in patient health metrics over time and using this tracking to identify trends that might indicate decline or that require immediate attention.Medication and treatment analysis — Reviewing a patient’s current prescriptions and treatments. Suggesting alternative treatments based on the understanding of the patient medical history, risk factors and other factors. Examples of Agentic AI in the medical space are Biofourmis’ Biovitals solution which uses AI to analyse data from wearable sensors to detect signs of patient deterioration or Aidoc’s radiology AI platform which analyses medical images such as CT scans and MRI scans to automatically flag critical findings. Thus far a lot of innovations in the AI space have been based on a single AI Agent interacting with a task or a human. What if you have multiple agents working together to solve complex tasks?! The first step is to enable AI agents to behave more human-like; connecting different pieces of information and applying this information to specific context in which the AI agent operates. Researchers are working on an architectural environment called the Memory Stream which stores all the events that happen in an AI environment. By storing all events and making them easily accessible, the AI agent can use its previous interactions to inform its current actions.Main learning point: I’m genuinely excited about the promise of agentic AI and the promise that it holds for the automation of complex problem solving; agents autonomously working through complex tasks and working with other agents to connect different pieces of information to solve a complex problem.",
            date: "08 April 2024",
        },
        3: {
            title: "What is Next.js 15",
            image: "/next.jpeg",
            content:
                "Next.js 15 is a popular framework that is used for building web applications with React. Companies like Nike, OpenAI and even Spotify use it. And recently, a new version of Next.js was released. So, what is there in the new version? Let’s check that out. Before that, here’s the best part: Support for the react compiler is now provided in Next.js 15. Key Features in Next.js 15.1. Upgrade Tool — `@next/codemod CLI`:Next.js provides a tool to help you upgrade your app from older versions to Next.js 15. This tool, called `@next/codemod CLI`, can update your code and dependencies automatically to work with the latest version of Next.js. You can run it in your terminal by typing:npx @next/codemod@canary upgrade latest. This command fetches the latest codemod (a tool for automatic code changes) and guides you through upgrading. 2. Async Request APIs (Breaking Change):Async Request APIs change how Next.js handles requests and caching. This feature starts moving toward a simpler way of managing how data is fetched and stored temporarily.",
            date: "08 April 2024",
        },
        4: {
            title: "What is python?",
            image: "/python.webp",
            content: `Python is an object-oriented, high-level programming language. The main feature of python is that it comes with dynamic semantics. When its high-level built in data structures combine with dynamic typing and dynamic binding, they make it perfect for Rapid Application Development. Also it can be used as a scripting or glue language to connect existing components together.

Ease of use for any type of programmer

As I mentioned earlier, Python is one of the easiest programming languages to learn. It does not require any programming experience to start working with Python. The reason behind this easiness is that python has very simple syntax and coding rules which are very clear to any user.

Plenty of online learning resources

When it comes to learning something by yourself from the very beginning, most of the time it is really challenging to find good learning resources. Fortunately, OFFICIAL PYTHON DOCUMENTATION lets you know everything about the Python language and also it provides a well documented tutorial which makes it easier to get started.

Open source libraries

There are many open source libraries that python can use to extend its functionality. Also, installing them is not a big deal because you have to run a simple command from a terminal:

Demo: pip install [libraryName]

Many leading companies are using Python

Python is not just for casual programming. It’s being used by many popular leading companies. For example, big companies like Google, Instagram and Spotify also use Python for their developments.

“Python has been an important part of Google since the beginning, and remains so as the system grows and evolves. Today dozens of Google engineers use Python, and we’re looking for more people with skills in this language.”

-Peter Norvig, director of search quality at Google, Inc.
`,
            date: "08 April 2024",

        },
        5: {
            title: "What is Cloud Computing?",
            image: "/cloud.webp",
            content:
                `In the present world, the concept of cloud is no longer, hidden in obscurity. It has gained so much respect in terms of digital transformation that it now applies in everyday life. But here is a catch. The first one has to get a complete understanding of cloud infrastructure, its working, and the recent trends that will define the world of cloud computing.

Still, a long way to go, yet cloud computing services have now become an invincible part that everyone from a user to a business tycoon wants to avail themselves to ensure greater sustainability in their life (and not to forget their business).

In this guide, we will unravel some hidden and not-so-known facts about cloud computing. Moreover, we will also recognize how it will shape the future of working and living. Let’s go more deeply into the give exciting adventure!

Concept of Cloud Computing
First of all, what is cloud computing?

Technically speaking, cloud computing is the distribution of large infrastructural resources in digital format through the use of the internet for delivering a pool of hosted services for the customers.

In simple terms, cloud computing implies perfect felicitating on-demand computing services from storage to applications to networking. The only thing to keep in mind is the presence of a proper internet medium over the cloud through a payment processor called ‘pay as you go’.

Therefore one thing is clear: with cloud computing at the helm, customers can access five crucial aspects:

Data Management
Data Storage
Devices
Networking
Internet & Other Online Services
Why is Cloud Computing Important?
If you think that cloud computing is just a trendy topic that attracts people only to store their photos and videos online, then you are binging on the wrong concept. It is a new business model that has changed the way of thinking among enterprises. Not only is it helping companies (large, medium, and small) for storing and accessing data easily; it is also aiding in the smooth functioning of their business operation.

Technology has enabled even a small business to excel perfectly in this competitive world. Today, every cloud-native application development company is implementing cloud computing to have wide appeal to their customers through the digital transformation of their business. There are several reasons which show that cloud computing is essential for the effective conduction of a business. It has been explained through the following steps:

I. High-Cost Effectiveness
From a business point of view, cloud computing has come as a game-changer as cloud consulting services are provided on-demand to the users. It implies payment is done only for what the users utilize through a subscription-based technology which negates other costs (like maintenance, labor, and purchasing).

II. Great Flexibility
If your business is experiencing continuous bandwidth; then it is time to switch to cloud computing. It will make resource management easier than ever. Just, you have to pay for resources per month and get access to the flexible packages (that include cloud storage and VPS providers)!

III. Full Data Recovery
There is no threat of data loss in the cloud platform as they are stored in multiple locations. Even if one server fails to function well, data is safe at other locations. The given service will be fruitful for small businesses that lack high-tech infrastructure and often face data theft.

IV. No Need of Maintenance
Maintenance is a state of concern for a traditional setup. However, there is no need for maintenance for a cloud computing environment. No other cost is involved as everything is handled by the service providers!

V. Perfect Digital Transformation
Every business today aspires to have a complete digital transformation. It includes fully digital migration of data from the current system to the cloud. It is often a costly method, but cloud computing allows seamless transition with no consequences and that too, with great ease.

Top Benefits & Drawbacks of Cloud Computing
The arrival of the cloud has transformed the way of conduction business. Numerous benefits come with the cloud. So before switching to it, one must get acquainted with the profits that one avails from the given technology.

i. Significant Cost Reduction
The basic financial principle is to earn more than spend. With cloud computing at the helm, there is no need to waste thousands of dollars on maintenance, upgrading technology, and purchasing software licenses. All these issues are taken care of by cloud-based apps just at minimum cost.

ii. High-Level Security
Cloud computing is more secure than an in-house computing system. It’s because cloud computing service providers work under strict scrutiny and are obliged to provide sufficient care to their customers’ info through employing full-time digital security person.

iii. High Reliability
The best part of cloud service providers is that they remain aloof because of redundancy. How? It’s simple! The data is stored not just on a single but across multiple servers. So, there is superb reliability in accessing data and services without any effect even from the occurrence of hardware failure.

iv. No Hardware Requirement
There will be no requirement for physical storage as everything will get hosted in the cloud. Furthermore, the provision of backup will boost the company’s prospects in case of a disastrous event.

However, with every advantage, there are some disadvantages associated with any technology, and cloud computing is no such exception.

i. Downtime: The Biggest Disadvantage
Downtime is the greatest threat to the popularity of cloud computing, and it means going down internet access. Robust data plans with cellular service help one to get internet access even during power shortages. But they have limited life, and there is difficulty in accessing cloud services after it goes out.

ii. Control Going Out of Hand of Users
When someone transfers all their services to the cloud, they also had over their crucial data in their hand. Companies with in-house staff may find it difficult to handle the issues that will ultimately lead to the enlargement of the current issue.

iii. Lacks All Crucial Features
There is a limitation with services available from cloud computing. Some service providers tend to offer only limited services compromising some limited features only. The only solution for the customers is to make sure, they check the facilities offered by the cloud service providers.

What are the types of cloud and their services?
An interesting part about cloud computing is that multiple types segregate and provide basic cloud facilities. Whether they work in the form of deployment or services, they offer you different levels of flexibility, management, and control.

In terms of deployment, it comes in four types:

a. Public Cloud
It is the sharing of all cloud resources such as memory, networking, CPU, and others on the public platform via the internet. Some notable examples are Amazon Web Services and Microsoft Azure.

b. Private Cloud
It is a privately owned system where 3rd party offers services with a high level of security, and sole control on the internet lies in their hand.

c. Hybrid Cloud
A combined form of the private and public cloud allows seamless working on a virtual private network to get an innovative business solution.

d. Community Cloud
They offer cloud services in the same industry working for similar goals. A community cloud environment is created after meeting the basic requirements that will boost up the performance.

Likewise, there are further types of cloud computing in terms of services that offer a solution to numerous problems. They are of three types:

a) Infrastructure as a Service (IaaS)
IaaS offers flexible cloud services by full virtualization of data and server storage to meet the demands of the customers and users alike. Its examples are Azure Virtual Machine and Google Cloud VM Instance.

b) Platform as a Service (PaaS)
PaaS creates a platform for offering multiple services starting from developing to the delivery of software services on an on-demand basis. It includes Google App Engine and Microsoft Azure.

c) Software as a Service (SaaS)
It is a fully-developed and robust cloud solution that does not require installation and can be downloaded directly through the internet. Example: Microsoft 365, Salesforce, and Google Apps.`,
        },
        6: {
            title: "React Js",
            image: "/react.webp",
            content:
                "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used front-end libraries for web development. React offers various extensions for entire application architectural support, such as Flux and React Native, beyond more UI.",
            date: "08 April 2024",
        },
    };

      
  const post = blogPosts[Number(id) as keyof typeof blogPosts];


const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );
  const [newName, setNewName] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  
  const addComment = () => {
    if (newName.trim() && newComment.trim()) {
      setComments([...comments, { name: newName, comment: newComment }]);
      setNewName("");
      setNewComment("");
    }
  };


    if (!post) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <p className="text-lg text-gray-600">Blog post not found.</p>
            </div>
        )
    }

    return (
        <article className="relative bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50 min-h-screen">
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-300/20 to-purple-300/20 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
            </div>

            
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
                <header className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                        {post.title}
                    </h1>
                    
                    {post.image && (
                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl mb-12">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </header>

                <div className="prose prose-lg max-w-none">
                    {post.content.split('\n\n').map((paragraph: string, index: number) => (
                        <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
            <div className="bg-white shadow-lg w-full max-w-md mx-auto p-6 rounded-lg mt-6">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 p-3 rounded shadow-md text-gray-800"
              >
                <p className="font-bold">{comment.name}:</p>
                <p>{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Your name..."
            className="border border-gray-300 p-2 rounded w-full mb-2"
          />
  <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            className="border border-gray-300 p-2 rounded w-full mb-2"
          />
          <button
            onClick={addComment}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Add Comment
          </button>
        </div>
      </div>
   

        </article>
    )
}

export default BlogPost;

