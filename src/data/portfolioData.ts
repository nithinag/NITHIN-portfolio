export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  metrics: string[];
  description: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  cgpa: string;
  location: string;
  highlights: string[];
}

export interface Article {
  id: string;
  number: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  link: string;
}

export interface Experiment {
  id: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  interactiveDemoType: "vector" | "tokens" | "dither" | "swarm";
}

export interface ToolkitCategory {
  category: string;
  items: {
    name: string;
    level: "Core" | "Advanced" | "Production";
    iconName?: string;
    description: string;
  }[];
}

export const portfolioData = {
  personal: {
    name: "NITHIN NAGABUSHANAM",
    shortName: "NITHIN",
    title: "AI ENGINEER",
    headline: "PRODUCT BUILDING • GENERATIVE AI • ENTREPRENEURSHIP",
    location: "CHENNAI, INDIA",
    coordinates: "13.0827° N, 80.2707° E",
    timezone: "GMT+5:30 (IST)",
    status: "AVAILABLE FOR PRODUCTION & PRODUCT ROLES",
    email: "nithinag1419@gmail.com",
    github: "https://github.com/nithinag",
    githubUsername: "nithinag",
    githubDisplay: "github.com/nithinag",
    linkedin: "https://www.linkedin.com/in/nithin-nagabushanam-39655627a/",
    linkedinUsername: "Nithin Nagabushanam",
    linkedinDisplay: "linkedin.com/in/nithin-nagabushanam",
    bioShort: "I'm a Computer Science graduate focused on AI-powered and full-stack applications, building intelligent, scalable solutions for real-world business challenges.",
    bioLong: [
      "I'm a Computer Science graduate focused on AI-powered and full-stack applications, building intelligent, scalable solutions for real-world business challenges."
    ],
    focusTags: [
      "GENERATIVE AI • LLMS • RAG",
      "MULTI-AGENT SYSTEMS • FASTAPI",
      "FULL-STACK • PRODUCT BUILDING"
    ],
    stats: [
      { label: "CGPA", value: "8.05" },
      { label: "DOC OVERHEAD REDUCED", value: "70%" },
      { label: "FASTER CRM QUERY RESPONSE", value: "60%" },
      { label: "MANUAL PROCESSING REDUCED", value: "40%" },
      { label: "MANUAL EFFORT REDUCED", value: "50%" }
    ]
  },

  marqueeItems: [
    "TECTRA TECHNOLOGIES",
    "1LYMINERALS",
    "SATHYABAMA",
    "VOLKSWAGEN",
    "IBM",
    "LANGCHAIN",
    "FASTAPI",
    "FLUTTER"
  ],

  projects: [
    {
      id: "sdlc-assistant",
      number: "01",
      title: "AI-Based SDLC Assistant with Multi-Agent Architecture",
      category: "AUTONOMOUS DEVTOOLS / LLM AGENTS",
      year: "03/01/2026 - 25/02/2026",
      metrics: [
        "AI-powered multi-agent system for requirements gathering, project planning and system design.",
        "70% documentation effort reduced."
      ],
      description: "AI-powered multi-agent system for requirements gathering, project planning and system design. 70% documentation effort reduced.",
      tech: ["Ollama", "LangChain", "LangGraph", "FastAPI"],
      image: "/images/sdlc-assistant.jpg",
      featured: true
    },
    {
      id: "demographic-analysis",
      number: "02",
      title: "Bridging Geographic and Statistical Data for Real-Time Demographic Analysis",
      category: "DATA VISUALIZATION / ANALYTICS",
      year: "03/10/2025 - 02/02/2026",
      metrics: [
        "Data-driven visualization system with 3D mapping, dashboards and forecasting.",
        "30-40% better decision-making efficiency."
      ],
      description: "Data-driven visualization system with 3D mapping, dashboards and forecasting. 30-40% better decision-making efficiency.",
      tech: ["Data Viz", "Analytics", "3D Mapping"],
      image: "/images/demographics.jpg",
      featured: true
    },
    {
      id: "rag-assistant",
      number: "03",
      title: "RAG-Based Conversational Chat Assistant",
      category: "KNOWLEDGE RETRIEVAL / VECTOR EMBEDDINGS",
      year: "15/10/2025 - 27/11/2025",
      metrics: [
        "Document conversational AI with PDF uploads, vector search and context-aware responses."
      ],
      description: "Document conversational AI with PDF uploads, vector search and context-aware responses.",
      tech: ["LangChain", "Azure OpenAI", "DeepLake", "Streamlit"],
      image: "/images/rag-assistant.jpg",
      featured: true
    }
  ] as Project[],

  experience: [
    {
      number: "01",
      company: "TECTRA TECHNOLOGIES",
      role: "Artificial Intelligence Intern",
      period: "08/12/2025 - 25/02/2026",
      location: "Chennai, India",
      description: "Designed and deployed a cross-platform mobile CRM using Flutter and Dart, improving customer data accessibility and lead management. Integrated LLMs for customer interactions, reducing response time by 60%. Automated repetitive processes, reducing manual effort by 50%.",
      achievements: [
        "Designed and deployed a cross-platform mobile CRM using Flutter and Dart.",
        "Integrated LLMs for customer interactions, reducing response time by 60%.",
        "Automated repetitive processes, reducing manual effort by 50%."
      ],
      technologies: ["Flutter", "Dart", "LLMs", "Conversational AI", "API Integration"]
    },
    {
      number: "02",
      company: "1LY MINERALS",
      role: "Product Engineer Consultant",
      period: "03/09/2025 - 03/12/2025",
      location: "Bangalore, India",
      description: "Developed and deployed the company website end-to-end. Implemented multi-agentic workflows for development and optimization. Managed digital marketing, customer deployments and field sales.",
      achievements: [
        "Developed and deployed the company website end-to-end.",
        "Implemented multi-agentic workflows for development and optimization.",
        "Managed digital marketing, customer deployments and field sales."
      ],
      technologies: ["Web Dev", "AI Agents", "Digital Marketing", "Product"]
    }
  ],

  blueprintToolkit: [
    {
      category: "Programming",
      skills: ["Python", "Java", "SQL", "JavaScript"]
    },
    {
      category: "AI / Generative AI",
      skills: ["LLMs", "RAG", "LangChain", "Prompt Engineering"]
    },
    {
      category: "Frameworks",
      skills: ["FastAPI", "TensorFlow", "PyTorch", "Streamlit"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "Oracle SQL"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Docker", "Postman"]
    },
    {
      category: "Product",
      skills: ["Product Management", "Prototyping", "Teamwork"]
    }
  ],

  education: {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science & Engineering",
    institution: "Sathyabama Institute of Science and Technology",
    period: "2021 — 2025",
    cgpa: "8.05 / 10.0",
    location: "Chennai, India",
    highlights: [
      "Specialized in Artificial Intelligence, Machine Learning & Distributed Systems",
      "Core coursework: Data Structures & Algorithms, Deep Learning, Database Systems, Computer Networks, Software Engineering",
      "Published technical explorations on Retrieval-Augmented Generation and Multi-Agent Orchestration"
    ]
  } as Education,

  articles: [
    {
      id: "01",
      number: "ART.01",
      title: "Architecting Multi-Agent LLM Pipelines for Enterprise SDLC",
      date: "FEB 2026",
      readTime: "7 MIN READ",
      category: "SYSTEMS / AGENTS",
      excerpt: "Why single-prompt LLMs fail at complex codebase documentation, and how stateful LangGraph graphs provide deterministic code reasoning.",
      link: "#"
    },
    {
      id: "02",
      number: "ART.02",
      title: "From Research to Production: Local LLMs with Ollama & LangChain",
      date: "JAN 2026",
      readTime: "5 MIN READ",
      category: "LOCAL AI / PRIVACY",
      excerpt: "Building high-throughput, air-gapped conversational intelligence using quantized open models and low-latency API wrappers.",
      link: "#"
    },
    {
      id: "03",
      number: "ART.03",
      title: "Optimizing Vector Store Retrieval Latency in Hybrid RAG Architectures",
      date: "NOV 2025",
      readTime: "8 MIN READ",
      category: "RAG / VECTOR ENGINES",
      excerpt: "Benchmarking DeepLake vs. ChromaDB for high-dimensional document chunks with reranking filters and contextual compression.",
      link: "#"
    },
    {
      id: "04",
      number: "ART.04",
      title: "Cross-Platform AI: Embedding Conversational Agents in Flutter Apps",
      date: "AUG 2025",
      readTime: "6 MIN READ",
      category: "MOBILE / FLUTTER",
      excerpt: "Architectural patterns for streaming LLM tokens smoothly on mobile clients without blocking UI threads or draining battery.",
      link: "#"
    }
  ] as Article[],

  experiments: [
    {
      id: "exp-1",
      title: "Vector Cosine Playground",
      type: "INTERACTIVE MATH",
      description: "Real-time 2D vector projection showing dot-product similarity between query embeddings and document clusters.",
      tags: ["Vectors", "Math", "Embeddings"],
      interactiveDemoType: "vector"
    },
    {
      id: "exp-2",
      title: "Token Stream Visualizer",
      type: "LLM SIMULATOR",
      description: "Interactive visualization of token probability generation, temperature tuning, and top-p sampling dynamics.",
      tags: ["Inference", "Probability", "Sampling"],
      interactiveDemoType: "tokens"
    },
    {
      id: "exp-3",
      title: "Dither Matrix Shader",
      type: "CREATIVE COMPUTING",
      description: "Floyd-Steinberg vs. Bayer 8x8 spatial error diffusion algorithm simulator in pure JavaScript canvas.",
      tags: ["Canvas", "Algorithms", "Monochrome"],
      interactiveDemoType: "dither"
    },
    {
      id: "exp-4",
      title: "Agent Swarm State Machine",
      type: "MULTI-AGENT LAB",
      description: "Simulating deterministic supervisor-worker agent message passing loops with self-correction retry steps.",
      tags: ["LangGraph", "State Machines", "Async"],
      interactiveDemoType: "swarm"
    }
  ] as Experiment[],

  caseStudy: {
    title: "Autonomous Multi-Agent SDLC Orchestrator",
    subtitle: "In-Depth Architectural Breakdown",
    overview: "Modern software development teams spend over 30% of engineering bandwidth on boilerplate documentation, PR summaries, and cross-team communication. We engineered an autonomous multi-agent pipeline that transforms raw git commits and AST diffs into verified architectural updates with zero human intervention.",
    pillars: [
      {
        title: "1. AST & Diff Ingestion",
        detail: "FastAPI webhook receives GitHub pull requests, parses abstract syntax trees, and isolates structural code changes from aesthetic formatting."
      },
      {
        title: "2. Stateful Agent Graph",
        detail: "LangGraph supervisor orchestrates specialized worker agents (Doc Generator, Security Auditor, Test Validator) operating in parallel."
      },
      {
        title: "3. Grounded Verification Loop",
        detail: "Synthesized markdown is checked against vector embeddings in DeepLake. If hallucination score > 0.05, the agent self-refines."
      },
      {
        title: "4. Automated PR Sync",
        detail: "Clean, formatted documentation is pushed back to documentation repositories and pull request comments within 12 seconds."
      }
    ],
    techStack: ["LangChain", "LangGraph", "FastAPI", "Azure OpenAI", "DeepLake", "Docker", "Python 3.11"],
    impactMetrics: [
      { label: "Documentation Time", value: "-70%" },
      { label: "Pipeline Latency", value: "<14s" },
      { label: "Hallucination Rate", value: "<0.1%" },
      { label: "Engineer Adoption", value: "100%" }
    ]
  },

  coreFoundations: [
    {
      number: "01",
      title: "HIGH AGENCY EXECUTION",
      description: "Taking full ownership from ambiguous requirement discovery to production deployment without requiring micromanagement."
    },
    {
      number: "02",
      title: "FIRST-PRINCIPLES AI",
      description: "Understanding raw transformer mechanics, embeddings math, and loss surfaces rather than treating LLMs as mystical black boxes."
    },
    {
      number: "03",
      title: "LATENCY & RELIABILITY OBSESSION",
      description: "Prioritizing deterministic fallbacks, streaming ergonomics, caching layers, and resilient error recovery over fragile prompt chains."
    },
    {
      number: "04",
      title: "PRODUCT & CUSTOMER CENTRICITY",
      description: "Engineering software that delivers tangible business ROI, quantifiable time savings, and exceptionally intuitive user journeys."
    }
  ],

  coreCompetencies: [
    { name: "AI Engineering", category: "Core", tag: "System Design" },
    { name: "Generative AI", category: "Core", tag: "LLMs / Multimodal" },
    { name: "RAG Architectures", category: "Core", tag: "Vector Indexing" },
    { name: "Multi-Agent Systems", category: "Core", tag: "LangGraph / Swarms" },
    { name: "FastAPI & Microservices", category: "Backend", tag: "High Throughput" },
    { name: "Product Management", category: "Strategy", tag: "Roadmapping" },
    { name: "Entrepreneurship", category: "Strategy", tag: "Business ROI" },
    { name: "Problem Solving", category: "Foundational", tag: "First Principles" },
    { name: "Client Requirement Discovery", category: "Client-Facing", tag: "Scoping" },
    { name: "Customer Facing Deployments", category: "Client-Facing", tag: "Rollouts" }
  ],

  toolkitCategories: [
    {
      category: "AI & MACHINE LEARNING",
      items: [
        { name: "LangChain", level: "Production", description: "Prompt chains, retrievers, document loaders" },
        { name: "LangGraph", level: "Production", description: "Stateful cyclical multi-agent workflows" },
        { name: "Ollama", level: "Advanced", description: "Local model quantization, inference serving" },
        { name: "TensorFlow", level: "Advanced", description: "Deep learning pipelines, CNNs & vision models" },
        { name: "PyTorch", level: "Advanced", description: "Neural network training & tensor math" },
        { name: "DeepLake & Chroma", level: "Production", description: "High-dimensional vector storage & search" }
      ]
    },
    {
      category: "LANGUAGES & FRAMEWORKS",
      items: [
        { name: "Python", level: "Production", description: "FastAPI, Asyncio, Pandas, NumPy, Scikit" },
        { name: "JavaScript / TypeScript", level: "Production", description: "Next.js, React, Node.js, modern ES6+" },
        { name: "Flutter & Dart", level: "Production", description: "Cross-platform iOS / Android mobile apps" },
        { name: "Java", level: "Advanced", description: "Object-oriented architectures & data structures" },
        { name: "HTML5 & Tailwind CSS", level: "Production", description: "Responsive brutalist layouts & animations" }
      ]
    },
    {
      category: "INFRASTRUCTURE & DEVOPS",
      items: [
        { name: "Docker", level: "Production", description: "Containerized deployment pipelines & microservices" },
        { name: "GitHub & Git Actions", level: "Production", description: "CI/CD automation, branch protection & hooks" },
        { name: "Postman", level: "Production", description: "API testing, automated collection runners" },
        { name: "Azure OpenAI", level: "Production", description: "Enterprise cognitive services & token management" }
      ]
    },
    {
      category: "AI-POWERED DEV TOOLS & ANALYTICS",
      items: [
        { name: "Cursor", level: "Production", description: "Agentic AI pair-programming & codebase indexing" },
        { name: "Antigravity", level: "Production", description: "Next-gen autonomous agent workflows & tools" },
        { name: "Claude 3.7 / 3.5 Sonnet", level: "Production", description: "Complex reasoning, system architecture & code" },
        { name: "Power BI", level: "Advanced", description: "Interactive executive BI dashboards & DAX" },
        { name: "Tableau", level: "Advanced", description: "Visual data storytelling & spatial analytics" },
        { name: "VS Code", level: "Production", description: "Daily driver IDE with customized linting & tooling" }
      ]
    }
  ] as ToolkitCategory[],

  languages: [
    {
      name: "English",
      proficiency: "Full Professional Proficiency",
      level: "C1/C2 - Fluent Technical & Business Communication"
    },
    {
      name: "Tamil",
      proficiency: "Native Proficiency",
      level: "Mother Tongue - Fluent Written & Spoken"
    }
  ],

  contact: {
    email: "nithinag1419@gmail.com",
    github: "https://github.com/nithinag",
    githubDisplay: "github.com/nithinag",
    linkedin: "https://www.linkedin.com/in/nithin-nagabushanam-39655627a/",
    linkedinDisplay: "linkedin.com/in/nithin-nagabushanam",
    location: "Chennai, Tamil Nadu, India",
    availability: "Immediate / Actively Exploring AI Engineering & Product Roles"
  }
};
