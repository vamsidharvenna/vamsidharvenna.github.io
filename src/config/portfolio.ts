// Portfolio configuration file
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  bio: string;
  avatar: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number; // 0-100 proficiency indicator
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null; // null for current position
  description: string;
  responsibilities: string[];
  technologies: string[];
  location: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export interface PortfolioConfig {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  navigation: string[];
}

// Portfolio Data
export const portfolioConfig: PortfolioConfig = {
  personalInfo: {
    name: "Venna Vamsidhar Reddy",
    title: "Conversational AI Developer | Gen AI Engineer | Prompt Engineer",
    location: "Edmond, Oklahoma, US",
    email: "vennavamsidharreddy@gmail.com",
    phone: "+1 (405)-861-6529",
    bio:"I’m a Conversational AI Developer focused on creating intelligent virtual assistants that think, learn, and engage like humans. My work blends Gen AI, NLP, and automation to design conversational experiences that simplify customer interactions across web, mobile, and voice channels. I specialize in Dialogflow CX, Kore.ai XO11, IBM Watson Assistant, and Vertex AI, using prompt engineering, Playbooks, and contextual logic to build adaptive, human-centric chat and voice bots. At Verizon, I design Agentic AI-driven assistants that improve accuracy, personalization, and automation, reducing fallback rates and enhancing self-service resolution. Earlier, at Vitech Systems Group, I built Kore.ai chatbots for U.S. pension systems, integrating APIs, SQL databases, and real-time data pipelines to streamline policy inquiries and automate workflows. Skilled in GCP, BigQuery, Cloud Functions, Firestore, and REST APIs, I combine AI development expertise with strong problem-solving and system design abilities to bridge the gap between technology and user experience while delivering scalable, intuitive, and impactful conversational solutions.",
    avatar: "/assets/images/avatar.jpg",
  },

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/vennavamsidharreddy-cell",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/vamsidharreddyvenna/",
      icon: "linkedin",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/venna_reddy",
      icon: "twitter",
    },
    {
      platform: "Email",
      url: "mailto:vennavamsidharreddy@gmail.com",
      icon: "mail",
    },
  ],

  skills: [
   // Conversational AI
  { name: "Dialogflow CX", category: "Conversational AI", level: 92 },
  { name: "Kore.ai XO11", category: "Conversational AI", level: 88 },
  { name: "IBM Watson Assistant", category: "Conversational AI", level: 80 },
  { name: "Intent Recognition & NLP Training", category: "Conversational AI", level: 90 },
  { name: "Entity Extraction", category: "Conversational AI", level: 88 },
  { name: "Playbooks & Agent Flows", category: "Conversational AI", level: 85 },
  { name: "Omnichannel Voice & Chat Design", category: "Conversational AI", level: 84 },

  // AI & LLMs
  { name: "Prompt Engineering", category: "AI & LLMs", level: 92 },
  { name: "Large Language Models (Gemini, GPT-4o, Azure OpenAI)", category: "AI & LLMs", level: 88 },
  { name: "Agentic AI Design", category: "AI & LLMs", level: 86 },
  { name: "Multi-Intent Detection", category: "AI & LLMs", level: 85 },
  { name: "Context Handling & Dialogue Generation", category: "AI & LLMs", level: 87 },

  // Cloud & Automation
  { name: "Google Cloud Platform (GCP)", category: "Cloud & Automation", level: 85 },
  { name: "Vertex AI & CCAI", category: "Cloud & Automation", level: 84 },
  { name: "Cloud Functions & Firestore", category: "Cloud & Automation", level: 82 },
  { name: "REST APIs & Webhooks", category: "Cloud & Automation", level: 86 },
  { name: "API Integration & Automation", category: "Cloud & Automation", level: 86 },
  { name: "Git & GitHub", category: "Cloud & Automation", level: 90 },

  // Programming & Data
  { name: "Python", category: "Programming & Data", level: 88 },
  { name: "SQL", category: "Programming & Data", level: 86 },
  { name: "Node.js", category: "Programming & Data", level: 80 },
  { name: "JavaScript", category: "Programming & Data", level: 88 },
  { name: "Shell Scripting", category: "Programming & Data", level: 78 },
  ],

  projects: [
    {
      id: "enterprise-chatbot",
      title: "Enterprise Customer Service Chatbot",
      description:
        "Advanced conversational AI system built with Dialogflow CX for enterprise customer support",
      longDescription:
        "A comprehensive enterprise-grade chatbot solution featuring multi-intent handling, context management, sentiment analysis, and seamless human handoff. Reduced customer service response time by 70% and improved customer satisfaction scores by 40%.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Dialogflow CX",
        "Google Cloud",
        "Python",
        "Webhook Integration",
        "BigQuery",
      ],
      demoUrl: "https://chatbot-demo.example.com",
      githubUrl:
        "https://github.com/vennavamsidharreddy-cell/enterprise-chatbot",
      featured: true,
    },
    {
      id: "rag-knowledge-assistant",
      title: "RAG-Powered Knowledge Assistant",
      description:
        "Intelligent knowledge retrieval system using RAG architecture with LLMs",
      longDescription:
        "A sophisticated knowledge assistant that combines retrieval-augmented generation with vector databases to provide accurate, contextual responses. Features document ingestion, semantic search, and real-time knowledge updates with 95% accuracy in domain-specific queries.",
      image: "/api/placeholder/600/400",
      technologies: [
        "LangChain",
        "OpenAI GPT",
        "Vector Database",
        "Python",
        "FastAPI",
      ],
      demoUrl: "https://knowledge-assistant.example.com",
      githubUrl: "https://github.com/vennavamsidharreddy-cell/rag-assistant",
      featured: true,
    },
    {
      id: "kore-ai-banking-bot",
      title: "Banking Virtual Assistant",
      description: "Omnichannel banking assistant built with Kore.ai platform",
      longDescription:
        "A comprehensive banking virtual assistant handling account inquiries, transaction history, loan applications, and financial advice. Deployed across web, mobile, and voice channels with 24/7 availability and 90% automation rate.",
      image: "/api/placeholder/600/400",
      technologies: ["Kore.ai", "NLU", "Banking APIs", "OAuth", "Analytics"],
      demoUrl: "https://banking-bot.example.com",
      githubUrl:
        "https://github.com/vennavamsidharreddy-cell/banking-assistant",
      featured: true,
    },
    {
      id: "data-pipeline-automation",
      title: "Conversational Data Pipeline",
      description:
        "ETL pipeline with conversational interface for data queries",
      longDescription:
        "An innovative data engineering solution that combines traditional ETL processes with conversational AI, allowing business users to query complex datasets using natural language. Features real-time data processing and intelligent query optimization.",
      image: "/api/placeholder/600/400",
      technologies: ["Apache Spark", "Python", "Dialogflow", "SQL", "GCP"],
      demoUrl: "https://data-pipeline.example.com",
      githubUrl:
        "https://github.com/vennavamsidharreddy-cell/conversational-etl",
      featured: false,
    },
  ],

  experience: [
    {
      id: "senior-ai-engineer",
      company: "Verizon",
      position: "CCAI Dialogflow Developer(Agentic AI)",
      startDate: "2023-01",
      endDate: null,
      description:
        "Developed enterprise-grade conversational AI systems for Verizon using Dialogflow CX, Playbooks, and agentic AI techniques to deliver intelligent, scalable customer experiences.",
      responsibilities: [
        "Designed and optimized Verizon Assistant in Dialogflow CX using Conversational Agents, Chat with data stores, and Playbooks with prompt engineering, conditional logic, and Python scripting, creating adaptive virtual agents aligned with Agentic AI principles that improved contextual accuracy, increased self-service resolution by 20%, and reduced fallback rates by 25%.", 
        "Implemented omnichannel conversational flows in Dialogflow CX, building both chat agents and voice agents with Speech-toText, Text-to-Speech, and SSML to ensure natural, consistent user experiences across web, mobile, and IVR channels.", 
        "Trained NLP models in Dialogflow CX—including intents, entities, and multi-turn conversational flows with advanced context handling—leveraging Vertex AI features to enhance training and improve overall model performance.",
        "Integrated Dialogflow CX and Playbooks with back-end APIs and external systems, using webhooks, Playbook tools, Google Cloud Functions, Firestore, and Cloud SQL for fulfillment to enable real-time data retrieval and automate customer workflows.",
        "Partnered with cross-functional teams to define business requirements and deliver scalable Google CCAI solutions, while continuously refining NLU models and conversational flows using analytics, logs, and customer feedback to drive higher accuracy, responsiveness, and user experience.",
      ],
      technologies: [
        "Dialogflow CX",
        "Playbooks",
        "Vertex AI",
        "Prompt engineering",
        "Google CCAI",
        "GCP",
        "NLP", 
      ],
      location: "New Jersey, USA",
    },
    {
      id: "data-ai-engineer",
      company: "Vitech Systems Group ",
      position: "Chatbot Developer (Kore.ai)",
      startDate: "2020-06",
      endDate: "2021-12",
      description:
        "Built AI-powered chatbot solutions and data integrations for US pension systems using Kore.ai, SQL, and custom APIs to automate workflows and enhance service efficiency.",
      responsibilities: [
        "Developed a Kore.ai chatbot for US pension providers, automating routine data retrieval, compliance checks, and policy inquiries, reducing manual effort by 40% and improving workflow efficiency.",
        "Built end-to-end Dialog Tasks in Kore.ai, implementing custom business logic, workflow automation, multi-intent detection, multi-turn conversational design, and entity amendment to support dynamic and adaptive user interactions.",
        "Trained NLP models in Kore.ai by building intents, entities, and bot synonyms, and validated performance through utterance testing, sentiment management, and batch testing, achieving 92% intent recognition accuracy and minimizing fallback responses.",
        "Engineered custom API endpoints for pension record retrieval, benefit calculations, and contribution tracking, enabling seamless data exchange between the chatbot and internal pension systems, reducing manual intervention by 30%.",
        "Architected a middle layer to integrate the chatbot with Teradata and SQL databases using Node.js and Python, enabling real-time pension data access, automated reporting, and self-service tools that improved case resolution by 35%.",  
      ],
      technologies: [
        "NLP",
        "Kore.ai",
        "SQL",
        "Dialog Tasks",
        "Node.js",
        "Python",
      ],
      location: "Hyderbad, India",
    },
    {
      id: "conversation-designer",
      company: "Vitech Systems Group ",
      position: "Associate Data Engineer Intern",
      startDate: "2020-01",
      endDate: "2020-05",
      description:
        "Assisted in integrating multi-source pension data through ETL pipelines, optimized SQL performance, and strengthened data quality for reliable client reporting.",
      responsibilities: [
        "Assisted in building ETL pipelines to integrate data from 12+ legacy systems into Teradata, improving data accessibility and reporting accuracy for 15 U.S. pension clients managing $2B+ in assets.",
        "Developed and optimized SQL queries to analyze large datasets (up to 1TB), improving query performance by 30% and accelerating data retrieval for pension management insights.",
        "Worked closely with data scientists and analysts to define data requirements, validate ETL processes, and ensure SOC2-compliant data quality, enhancing data reliability for client reporting.",
      ],
      technologies: [
        "Teradata",
        "Sql",
        "ETL pipelines",
        "Teradta warehouse",
        "Analytics",
      ],
      location: "Hyderbad, India",
    },
  ],

  education: [
    {
      id: "cs-degree",
      institution: "Cleveland State Universtity",
      degree: "Master of Information Systems",
      field: "Information Science",
      startDate: "2022-01",
      endDate: "2023-05",
      gpa: "3.6",
      description:
        "Built advanced expertise in enterprise systems, data management, and emerging technologies, with hands-on experience in project management and network security. Worked on academic projects and system design tasks, strengthening analytical and technical implementation skills.",
    },
    {
      id: "engineering-degree",
      institution: "Vellore Institute of Technology",
      degree: "Bachelor of Technology",
      field: "Information Technology",
      startDate: "2016-06",
      endDate: "2020-06",
      gpa: "3.2",
      description:
        "Comprehensive foundation in information technology, software engineering, and database systems. Completed academic projects focused on web development, system design, and networking concepts.",
    },
  ],

  navigation: ["Resume", "About", "Projects", "Certifications"],
};
