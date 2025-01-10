import { NextResponse } from 'next/server';
const dummyBlogs = [
  {
    id: 1,
    title: 'Mastering React for Modern Web Development',
    description: 'In this blog, we will dive deep into React, one of the most popular JavaScript libraries for building modern user interfaces. We will discuss the fundamentals of React, including JSX, components, state, and props, and how to structure a React application efficiently. Additionally, we will explore advanced concepts like React hooks, context API, and performance optimization techniques. By the end of this blog, you will have a solid understanding of React and be able to build scalable, maintainable web applications. Whether you are a beginner or an experienced developer, mastering React will enhance your development skills and allow you to stay ahead of the competition in the rapidly evolving world of web development.',
    author: 'Ravi Kumar',
    publishedDate: '2025-01-02',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Building Scalable Applications with Node.js',
    description: 'Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to build fast and scalable applications. In this blog, we will explore how to use Node.js to build server-side applications that can handle large amounts of traffic. We will cover the core features of Node.js, such as event-driven architecture, non-blocking I/O, and how to manage application performance. You will also learn about Express, a minimal web application framework for Node.js, and how to structure your code in a scalable manner. By the end of this blog, you will be equipped with the knowledge to create highly efficient and scalable applications using Node.js, which is a must-have skill in modern software development.',
    author: 'Priya Sharma',
    publishedDate: '2025-01-04',
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Understanding Machine Learning Algorithms',
    description: 'Machine learning has revolutionized how we approach data analysis and prediction. In this blog, we will explore the different types of machine learning algorithms, including supervised, unsupervised, and reinforcement learning. We will also cover popular algorithms like linear regression, decision trees, and neural networks, and discuss their practical applications in real-world problems. Additionally, we will provide code examples and resources for implementing these algorithms using popular Python libraries such as Scikit-Learn and TensorFlow. Whether you are a data science beginner or an experienced machine learning engineer, this blog will provide you with valuable insights and hands-on experience to implement machine learning solutions effectively.',
    author: 'Amit Patel',
    publishedDate: '2025-01-06',
    thumbnail: 'https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=1327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'The Future of Artificial Intelligence in India',
    description: 'Artificial Intelligence (AI) is rapidly transforming various industries across the world, and India is no exception. In this blog, we will discuss the role of AI in shaping India’s future and its impact on various sectors such as healthcare, agriculture, education, and finance. We will also highlight key AI initiatives by the Indian government and leading tech companies in the country. The blog will cover how AI is being leveraged to solve some of India’s most pressing challenges, from improving healthcare access to automating agricultural processes. By the end of this blog, you will gain a deeper understanding of the potential of AI in India and its prospects for economic growth and development.',
    author: 'Sanya Desai',
    publishedDate: '2025-01-08',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Introduction to Cloud Computing and Its Benefits',
    description: 'Cloud computing has become an essential part of modern technology infrastructure. In this blog, we will provide an introduction to cloud computing, its models, and its various service offerings such as Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). We will also discuss the benefits of cloud computing, such as cost-efficiency, scalability, flexibility, and improved collaboration. Additionally, we will look at how major cloud providers like AWS, Google Cloud, and Microsoft Azure are shaping the cloud computing landscape. By the end of this blog, you will understand how cloud computing can revolutionize the way businesses operate and how it can be leveraged for digital transformation.',
    author: 'Vikram Rao',
    publishedDate: '2025-01-10',
    thumbnail: 'https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // Additional blogs
  {
    id: 6,
    title: 'Exploring the Power of Vue.js for Modern Web Apps',
    description: 'Vue.js is a progressive JavaScript framework for building user interfaces. This blog will take you through the key features and principles of Vue.js, including its easy-to-use templating syntax, component-based architecture, and reactivity system. We will explore how Vue.js compares to other frameworks like React and Angular, and why it’s quickly becoming a go-to choice for developers. Additionally, we will demonstrate how to create dynamic, single-page applications (SPAs) with Vue.js and integrate it with other technologies such as Vuex for state management and Vue Router for handling application routing. By the end of this blog, you will have the skills needed to create modern web applications with Vue.js.',
    author: 'Rajesh Gupta',
    publishedDate: '2025-01-12',
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    title: 'Demystifying Blockchain Technology and Its Applications',
    description: 'Blockchain technology has gained significant traction in recent years, particularly in the areas of cryptocurrencies like Bitcoin. In this blog, we will break down the concept of blockchain and explain how it works, including the decentralized ledger, hashing, and consensus algorithms. We will explore the different types of blockchains, including public, private, and hybrid blockchains, and dive into its wide-ranging applications beyond cryptocurrency, such as in supply chain management, voting systems, and digital identity management. By the end of this blog, you will understand how blockchain is revolutionizing industries and the future potential it holds for various sectors.',
    author: 'Meera Joshi',
    publishedDate: '2025-01-14',
    thumbnail: 'https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    title: 'Getting Started with Data Science and Analytics',
    description: 'Data science is a multidisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data. In this blog, we will provide an introduction to data science, including the skills required, tools commonly used (such as Python, R, and SQL), and the key stages of a data science project, such as data collection, cleaning, exploration, modeling, and visualization. We will also discuss real-world applications of data science in various industries, including healthcare, finance, and marketing. By the end of this blog, you will have the foundational knowledge needed to embark on your own data science journey.',
    author: 'Neha Reddy',
    publishedDate: '2025-01-16',
    thumbnail: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    title: 'Getting to Grips with Kubernetes for Container Orchestration',
    description: 'Kubernetes has become the industry standard for container orchestration, enabling organizations to manage large-scale, distributed applications with ease. In this blog, we will explain the core concepts of Kubernetes, including pods, nodes, services, and deployments, and show you how to set up and configure a Kubernetes cluster. We will also explore best practices for deploying and managing applications on Kubernetes, and provide tips for scaling, monitoring, and securing your clusters. By the end of this blog, you will be well-equipped to take advantage of Kubernetes to manage containerized applications in production environments.',
    author: 'Suresh Singh',
    publishedDate: '2025-01-18',
    thumbnail: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    title: 'Understanding the Importance of Cybersecurity in the Digital Age',
    description: 'As businesses and individuals continue to rely on digital technologies, cybersecurity has become a critical concern. In this blog, we will explore the importance of cybersecurity, the various types of cyber threats (such as phishing, ransomware, and malware), and best practices to mitigate them. We will also discuss the role of encryption, multi-factor authentication, and other security measures to protect sensitive data and networks. Furthermore, we will cover the growing field of ethical hacking and penetration testing, and how cybersecurity professionals are working to stay ahead of cybercriminals. By the end of this blog, you will have a solid understanding of the cybersecurity landscape and how to protect yourself and your business.',
    author: 'Karthik Rao',
    publishedDate: '2025-01-20',
    thumbnail: 'https://media.istockphoto.com/id/2123116979/photo/businessman-holding-web-development-icon-and-global-network-with-analyzing-technological-data.jpg?s=1024x1024&w=is&k=20&c=RfQeAJkFXnQhiJSBdDLlPJDRGhRDLpJhJ0M2H79exNM=',
  }
];


export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return NextResponse.json(dummyBlogs);
  }
  
