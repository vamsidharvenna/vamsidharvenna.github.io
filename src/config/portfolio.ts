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
  level: number; // 1-100
  category: string;
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
    title: "Conversational AI Engineer • Data Engineer • Prompt Engineering",
    location: "Edmond, Oklahoma, US",
    email: "venna@example.com",
    phone: "+1 (555) 123-4567",
    bio: "hiii ipsum dolor sit  primis augue nibh cgh malesuada. Morbi massa. Donec nec sapien vestibulumltrices eros pretium non. Mauris vel scelerisque lacus. Cras at semper arcu. Cras sed varius sapien. Fusce facilisis enim ut leo efficitur fringilla. Etiam interdum nulla in ex ultrices tincidunt. Quisque eget congue ante, ac maximus quam. Nunc faucibus nunc ipsum, sit amet mollis odio malesuada sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at felis elit. Fusce ut urna ac ex dignissim fringilla quis a odio. In hac habitasse platea dictumst. Ut sollicitudin malesuada consectetur. Ut volutpat pulvinar quam, a eleifend mauris aliquam nec. Maecenas non condimentum sem, eget viverra metus. Ut et turpis eget eros bibendum lacinia sed in orci.Integer augue est, cursus vel enim eget, ultrices bibendum lectus. Nunc fermentum massa in maximus rutrum. Mauris felis lorem, ultricies ac varius in, consectetur eget metus. In pretium tempor justo eget tempus. Inetus, non dapibus purus varius qu",
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
      url: "https://linkedin.com/in/venna-reddy",
      icon: "linkedin",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/venna_reddy",
      icon: "twitter",
    },
    {
      platform: "Email",
      url: "mailto:venna@example.com",
      icon: "mail",
    },
  ],

  skills: [
    // Conversational AI
    { name: "Dialogflow CX", level: 95, category: "Conversational AI" },
    { name: "Kore.ai", level: 90, category: "Conversational AI" },
    {
      name: "Natural Language Processing",
      level: 90,
      category: "Conversational AI",
    },
    { name: "Intent Recognition", level: 85, category: "Conversational AI" },
    { name: "Entity Extraction", level: 85, category: "Conversational AI" },
    { name: "Conversation Design", level: 90, category: "Conversational AI" },
    { name: "Voice User Interface", level: 80, category: "Conversational AI" },

    // AI & ML
    { name: "Large Language Models", level: 90, category: "AI & ML" },
    { name: "Prompt Engineering", level: 95, category: "AI & ML" },
    {
      name: "RAG (Retrieval Augmented Generation)",
      level: 90,
      category: "AI & ML",
    },
    { name: "OpenAI GPT", level: 85, category: "AI & ML" },
    { name: "Langchain", level: 80, category: "AI & ML" },
    { name: "Vector Databases", level: 75, category: "AI & ML" },

    // Data Engineering
    { name: "Python", level: 90, category: "Data Engineering" },
    { name: "Apache Spark", level: 80, category: "Data Engineering" },
    { name: "ETL Pipelines", level: 85, category: "Data Engineering" },
    { name: "SQL", level: 90, category: "Data Engineering" },
    { name: "NoSQL", level: 80, category: "Data Engineering" },
    { name: "Data Warehousing", level: 75, category: "Data Engineering" },

    // Cloud & Tools
    { name: "Google Cloud Platform", level: 85, category: "Cloud & Tools" },
    { name: "AWS", level: 80, category: "Cloud & Tools" },
    { name: "Docker", level: 75, category: "Cloud & Tools" },
    { name: "Git", level: 90, category: "Cloud & Tools" },
    { name: "REST APIs", level: 85, category: "Cloud & Tools" },
    { name: "Webhook Integration", level: 80, category: "Cloud & Tools" },
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
      company: "ConversAI Solutions",
      position: "Senior Conversational AI Engineer",
      startDate: "2022-08",
      endDate: null,
      description:
        "Leading development of enterprise conversational AI solutions and mentoring team on best practices",
      responsibilities: [
        "Architected and deployed 15+ enterprise chatbots using Dialogflow CX and Kore.ai",
        "Implemented RAG systems that improved response accuracy by 45% for domain-specific queries",
        "Led prompt engineering initiatives resulting in 60% reduction in hallucinations",
        "Established CI/CD pipelines for conversational AI deployment reducing time-to-market by 40%",
        "Mentored junior developers and conducted technical workshops on NLU best practices",
      ],
      technologies: [
        "Dialogflow CX",
        "Kore.ai",
        "LangChain",
        "OpenAI GPT",
        "Python",
        "GCP",
      ],
      location: "Edmond, Oklahoma, US",
    },
    {
      id: "data-ai-engineer",
      company: "DataFlow Technologies",
      position: "Data Engineer & AI Specialist",
      startDate: "2020-09",
      endDate: "2022-07",
      description:
        "Built data pipelines and integrated AI capabilities for business intelligence",
      responsibilities: [
        "Developed ETL pipelines processing 10TB+ daily data using Apache Spark and Python",
        "Integrated conversational interfaces with data warehouses for natural language querying",
        "Implemented vector databases for semantic search across enterprise knowledge bases",
        "Collaborated with ML teams to deploy LLM-based features in production",
        "Optimized data processing workflows reducing computation costs by 35%",
      ],
      technologies: [
        "Apache Spark",
        "Python",
        "SQL",
        "Vector Databases",
        "NLP",
        "AWS",
      ],
      location: "Remote",
    },
    {
      id: "conversation-designer",
      company: "ChatBot Innovations",
      position: "Conversation Designer",
      startDate: "2019-06",
      endDate: "2020-08",
      description:
        "Designed conversational flows and implemented chatbot solutions for various industries",
      responsibilities: [
        "Designed conversation flows for 20+ chatbots across retail, healthcare, and finance",
        "Implemented NLU models with 90%+ intent recognition accuracy",
        "Conducted user testing and A/B testing to optimize conversation experiences",
        "Integrated chatbots with CRM systems and third-party APIs",
        "Created documentation and training materials for conversation design best practices",
      ],
      technologies: [
        "Dialogflow",
        "NLU",
        "Conversation Design",
        "APIs",
        "Analytics",
      ],
      location: "Oklahoma City, OK",
    },
  ],

  education: [
    {
      id: "cs-degree",
      institution: "University of Central Oklahoma",
      degree: "Master of Science",
      field: "Computer Science - AI/ML Focus",
      startDate: "2017-08",
      endDate: "2019-05",
      gpa: "3.9",
      description:
        "Specialized in Artificial Intelligence and Machine Learning with focus on Natural Language Processing. Thesis on 'Improving Intent Recognition in Conversational Systems using Deep Learning'.",
    },
    {
      id: "engineering-degree",
      institution: "Jawaharlal Nehru Technological University",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      startDate: "2013-08",
      endDate: "2017-05",
      gpa: "3.7",
      description:
        "Comprehensive computer science foundation with projects in software engineering, algorithms, and database systems. Active member of AI/ML club and hackathon participant.",
    },
  ],

  navigation: ["Resume", "About", "Projects", "Certifications"],
};
