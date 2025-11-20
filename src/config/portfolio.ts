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
  level: number;
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
  endDate: string | null;
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
    bio: "I'm a Conversational AI Developer focused on creating intelligent virtual assistants that think, learn, and engage like humans. My work blends Gen AI, NLP, and automation to design conversational experiences that simplify customer interactions across web, mobile, and voice channels. I specialize in Dialogflow CX, Kore.ai XO11, IBM Watson Assistant, and Vertex AI, using prompt engineering, Playbooks, and contextual logic to build adaptive, human-centric chat and voice bots. At Verizon, I design Agentic AI-driven assistants that improve accuracy, personalization, and automation, reducing fallback rates and enhancing self-service resolution. Earlier, at Vitech Systems Group, I built Kore.ai chatbots for U.S. pension systems, integrating APIs, SQL databases, and real-time data pipelines to streamline policy inquiries and automate workflows. Skilled in GCP, BigQuery, Cloud Functions, Firestore, and REST APIs, I combine AI development expertise with strong problem-solving and system design abilities to bridge the gap between technology and user experience while delivering scalable, intuitive, and impactful conversational solutions.",
    avatar: "/assets/images/avatar.jpg",
  },

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/vamsidharvenna",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/vamsidharreddyvenna/",
      icon: "linkedin",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/12163925578",
      icon: "whatsapp",
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
    {
      name: "Intent Recognition & NLP Training",
      category: "Conversational AI",
      level: 90,
    },
    { name: "Entity Extraction", category: "Conversational AI", level: 88 },
    {
      name: "Playbooks & Agent Flows",
      category: "Conversational AI",
      level: 85,
    },
    {
      name: "Omnichannel Voice & Chat Design",
      category: "Conversational AI",
      level: 84,
    },

    // AI & LLMs
    { name: "Prompt Engineering", category: "AI & LLMs", level: 92 },
    {
      name: "Large Language Models (Gemini, GPT-4o, Azure OpenAI)",
      category: "AI & LLMs",
      level: 88,
    },
    { name: "Agentic AI Design", category: "AI & LLMs", level: 86 },
    { name: "Multi-Intent Detection", category: "AI & LLMs", level: 85 },
    {
      name: "Context Handling & Dialogue Generation",
      category: "AI & LLMs",
      level: 87,
    },

    // Cloud & Automation
    {
      name: "Google Cloud Platform (GCP)",
      category: "Cloud & Automation",
      level: 85,
    },
    { name: "Vertex AI & CCAI", category: "Cloud & Automation", level: 84 },
    {
      name: "Cloud Functions & Firestore",
      category: "Cloud & Automation",
      level: 82,
    },
    { name: "REST APIs & Webhooks", category: "Cloud & Automation", level: 86 },
    {
      name: "API Integration & Automation",
      category: "Cloud & Automation",
      level: 86,
    },
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
      title: "HealthLink - Healthcare Provider Finder Chatbot",
      description:
        "AI-powered virtual assistant built with IBM Watson Assistant to help members find nearby doctors and specialists",
      longDescription:
        "A complete healthcare chatbot solution featuring secure member lookup, specialty detection, zip code validation, and provider search powered by cloud database integration. The system retrieves real-time member and provider data from IBM Cloud Databases (PostgreSQL) through a Node.js webhook service, prioritizes in-network providers, and returns the top three closest matches. Includes robust error handling, fallback responses, and partial zip code search logic for a smooth member experience.",
      image: "/api/placeholder/600/400",
      technologies: [
        "IBM Watson Assistant",
        "IBM Cloud Databases (PostgreSQL)",
        "Node.js",
        "Webhook Integration",
        "Rest APIs",
      ],
      demoUrl: "https://chatbot-demo.example.com",
      githubUrl:
        "https://github.com/vennavamsidharreddy-cell/enterprise-chatbot",
      featured: true,
    },
    {
      id: "rag-knowledge-assistant",
      title: "M3 Travel Assistant",
      description:
        "Intelligent travel booking assistant built using Kore.ai XO11 with Cloud Run & Cloud SQL",
      longDescription:
        "A Kore.ai-based virtual agent that enables users to book flights, fetch booking details, and resolve travel inquiries through natural conversation. The system uses agent nodes for structured data capture, sub-intents for entity amendments, multilingual prompts, and XO GPT for empathetic responses. Backend services are deployed on Cloud Run, with booking data stored in Cloud SQL, enabling secure real-time retrieval through REST APIs. Includes robust interruption handling, follow-up tasks, fallback flows, and analytics dashboards for dialog and FAQ performance insights.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Kore.ai XO11",
        "Agent Nodes",
        "NLP Training",
        "REST APIs",
        "Cloud SQL",
        "Cloud Run",
      ],
      demoUrl: "https://knowledge-assistant.example.com",
      githubUrl: "https://github.com/vennavamsidharreddy-cell/rag-assistant",
      featured: true,
    },
    {
      id: "kore-ai-banking-bot",
      title: "Personal Portfolio Assistant",
      description:
        "AI-powered portfolio chatbot built using Dialogflow CX, Generators, Tools, Prompting, Data Stores, Tawk.to and Cloud Run",
      longDescription:
        "A conversational AI portfolio assistant built with Dialogflow CX that allows users to explore my projects, certifications, skills, experience, and resume through dynamic, natural interactions. Gemini-powered Generators retrieve contextual answers from custom Google Data Stores and GCS Buckets, enabling fully adaptive and personalized responses across the site. Backend services run on Cloud Run (Node.js) through a custom REST integration, coordinating DetectIntent requests, session management, content retrieval, and triggering Twilio-powered email & Sms alerts for key user actions. A custom React chat widget powers the frontend, enabling multi-page orchestration, smooth live chat mode through Tawk.to, user detail collection, and robust fallback handling for an uninterrupted experience.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Dialogflow CX",
        "Generators (Gemini)",
        "Tools",
        "Prompting",
        "AI Applications(Data stores)",
        "Cloud Run",
        "REST API",
        "Tawk.to",
        "Twilio",
        "React + Tailwind CSS",
      ],
      demoUrl: "https://banking-bot.example.com",
      githubUrl:
        "https://github.com/vennavamsidharreddy-cell/banking-assistant",
      featured: true,
    },
    {
      id: "data-pipeline-automation",
      title: "Banking Assistant Bot",
      description:
        "AI-powered banking virtual assistant built using Kore.ai XO 10.1",
      longDescription:
        "A Kore.ai-based banking bot supporting 30+ retail banking workflows including balance checks, fund transfers, credit card services, loan information, fraud reporting, ATM/credit card activation, and transaction history. Built with multi-turn conversations, entity amendment flows, multi-intent handling, and Knowledge AI for FAQ retrieval. Integrated with REST APIs (MockAPI) to simulate real-time banking operations and provide dynamic responses. Includes fallback handling, contextual prompts, and customer verification steps for a realistic digital banking experience.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Kore.ai XO 10.1",
        "Dialog Tasks",
        "Knowledge AI",
        "REST APIs",
        "Multi-Intent",
        "Entity Amendment",
      ],
      demoUrl: "https://data-pipeline.example.com",
      githubUrl:
        "https://github.com/vennavamsidharreddy-cell/conversational-etl",
      featured: false,
    },
    {
      id: "data-pipeline-automation",
      title: "Verizon Assistant  - Omnichannel Virtual Assistant",
      description:
        "AI-powered customer support assistant built using Dialogflow CX, Playbooks & Vertex AI",
      longDescription:
        "I designed and optimized Verizon's omnichannel virtual assistant using Dialogflow CX, Playbooks, and Vertex AI, developing intelligent chat and voice flows across web, mobile, and IVR. I contributed to multi-turn conversational design, contextual prompts, and advanced NLU training, improving accuracy and reducing fallback rates. I implemented Playbooks with custom data stores to drive generative responses and integrated the assistant with Google Cloud Functions, Firestore, and Cloud SQL for real-time data retrieval and automated workflows. I also refined SSML-based voice output, strengthened fallback/error handling, and used analytics and logs to continuously enhance NLU performance, user experience, and overall automation efficiency.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Dialogflow CX",
        "Playbooks",
        "Vertex AI",
        "Cloud run",
        "Firestore",
        "Cloud SQL",
      ],
      featured: false,
    },
    {
      id: "data-pipeline-automation",
      title: "Vitech Systems Group - Pension Services Virtual Assistant",
      description:
        "AI-powered pension support chatbot built using Kore.ai XO for U.S. public sector clients",
      longDescription:
        "At Vitech Systems Group, I developed Kore.ai-based virtual assistants for U.S. pension providers, automating routine data retrieval, compliance checks, and policy inquiries to reduce manual effort and improve workflow efficiency. I designed end-to-end Dialog Tasks with custom business logic, workflow automation, multi-intent handling, multi-turn conversational flows, and entity amendment to support adaptive interactions. I trained and validated NLP models by creating intents, entities, synonyms, and conducting extensive utterance and batch testing to improve recognition accuracy and reduce fallbacks. I engineered custom API endpoints for pension data retrieval and benefit calculations, enabling seamless integration between the chatbot and internal pension systems. I also architected a Node.js- and Python-based middle layer connecting the bot with Teradata and SQL databases, enabling real-time pension data access, automated reporting, and self-service features that improved case resolution by 35%.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Kore.ai",
        "Dialog Tasks",
        "NLP Training",
        "Teradata",
        "SQL Databases",
        "Node.js",
        "Python",
      ],
      featured: false,
    },
    {
      id: "data-pipeline-automation",
      title:
        "Vitech Systems Group - Enterprise ETL & Pension Data Engineering Project",
      description:
        "ETL pipeline development and large-scale SQL analytics for U.S. pension data systems",
      longDescription:
        "Supported enterprise data engineering initiatives by building ETL pipelines to integrate data from 12+ legacy systems into Teradata, improving data accessibility and reporting accuracy for major U.S. pension clients. Developed and optimized high-performance SQL queries for large datasets (up to 1TB), accelerating data retrieval and improving query efficiency by 30%. Collaborated with data scientists and analysts to define data requirements, validate ETL processes, and ensure SOC2-compliant data quality for reliable client reporting.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Teradata",
        "SQL",
        "Python",
        "ETL Pipelines",
        "Data Warehousing",
        "Large-Scale Analytics",
      ],
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
        "Trained NLP models in Dialogflow CX,including intents, entities, and multi-turn conversational flows with advanced context handling,leveraging Vertex AI features to enhance training and improve overall model performance.",
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
