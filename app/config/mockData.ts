interface CaseStudy {
  image: string;
  title: string;
  description: string;
  link: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const cases: CaseStudy[] = [
  {
    image:
      "/img/portfolio/0c7fd31b0bbe5f0e3736693f4a6fff62758509f7bd7d4f3f0b90eb920ae31654-1x.webp",
    title: "Net Zero Pathways Dashboard for BCG Gamma",
    description:
      "An interactive analytics dashboard for BCG\u2019s CO2 AI product that helps enterprises measure, track, and reduce their carbon footprint at scale.",
    link: "/portfolio/bcg-co2ai",
    challenge:
      "BCG Gamma needed a real-time dashboard to calculate Net Zero Emission pathways across thousands of data points \u2014 the existing tooling was too slow and couldn\u2019t handle dynamic updates.",
    solution:
      "We built a Python-based real-time dashboard on AWS (Pandas, Dash, Plotly, S3, EC2) with dynamic pathway calculations and live footprint management.",
    results: [
      "130M+ tons of CO2e managed through the platform",
      "Development costs cut by 30%",
      "200+ engineering hours saved annually",
    ],
  },
  {
    image:
      "/img/portfolio/38512bd732d215412cdba3bd0c3308fa414863e52f55c27b041701013697dfd2-1x.webp",
    title: "Clover \u2014 Data Center Automation for Juniper Networks",
    description:
      "An internal automation platform that replaced weeks of manual BOM creation with an AI-guided, reference-architecture-driven workflow for Juniper\u2019s sales engineering team.",
    link: "/portfolio/juniper-clover",
    challenge:
      "Juniper\u2019s Sales Engineers spent weeks manually creating 30+ page proposals for data center fabric designs \u2014 a repetitive, error-prone process that couldn\u2019t scale.",
    solution:
      "We designed and built Clover \u2014 an intelligent platform powered by Juniper\u2019s reference architectures and AI-driven logic that automates BOM generation and proposal creation.",
    results: [
      "Proposal creation time reduced from weeks to hours",
      "Consistency across all customer-facing documents",
      "Adopted by sales engineering teams globally",
    ],
  },
  {
    image:
      "/img/portfolio/592859e354ffa07ba1c01bab17d1671dc22d9988df1b5c07d84e64c2161b7d2c-1x.webp",
    title: "0xEquity \u2014 Tokenized Real Estate Investment Platform",
    description:
      "A blockchain-based web and mobile application that lets small-scale investors access tokenized real estate, bonds, gold, and DeFi assets.",
    link: "/portfolio/0xequity",
    challenge:
      "Real estate investment was inaccessible to small investors due to high entry barriers and opaque processes. The client needed a platform that tokenizes assets while remaining transparent and compliant.",
    solution:
      "We built a blockchain-based platform with tokenized investment instruments, passive income streams, and full transparency for end users across web and mobile.",
    results: [
      "Multiple asset classes tokenized (property, gold, bonds, DeFi)",
      "Investor onboarding in under 10 minutes",
      "Platform live and processing investments",
    ],
  },
  {
    image:
      "/img/portfolio/c3515cf68ea9bfa97f586fbc91a84d85b213157a9b883e87e82ee1d5ccd6dd01-1x.webp",
    title: "Automation Anywhere \u2014 RPA Impact Dashboard",
    description:
      "An executive dashboard that visualizes how robotic process automation impacts business operations and financials across departments.",
    link: "/portfolio/automation-anywhere",
    challenge:
      "Teams using Automation Anywhere couldn\u2019t quantify ROI \u2014 without a clear view of time and cost savings per department, executives struggled to justify continued investment.",
    solution:
      "We built an actionable dashboard that turns complex automation data into clear per-department ROI metrics, enabling executive buy-in and scaling decisions.",
    results: [
      "Clear ROI visibility across all automated processes",
      "Per-department cost and time savings tracked in real time",
      "Used to justify scaling automation company-wide",
    ],
  },
  {
    image:
      "/img/portfolio/0c7fd31b0bbe5f0e3736693f4a6fff62758509f7bd7d4f3f0b90eb920ae31654-1x.webp",
    title: "Vector Mind \u2014 Enterprise AI Automation Platform",
    description:
      "A platform that lets organizations harness LLMs with their internal datasets \u2014 on-premise, cloud, or dedicated \u2014 with natural language querying.",
    link: "/portfolio/vector-mind",
    challenge:
      "Enterprises needed to leverage Large Language Models on proprietary data but lacked a secure, flexible way to ingest both structured and unstructured datasets.",
    solution:
      "We built Vector Mind \u2014 a platform with flexible deployment (on-premise, cloud, dedicated LLMs), supporting natural language queries over internal corpora with privacy controls.",
    results: [
      "Flexible deployment: on-prem, cloud, or dedicated LLM",
      "Natural language interface for non-technical users",
      "Privacy-first architecture for sensitive enterprise data",
    ],
  },
  {
    image:
      "/img/portfolio/38512bd732d215412cdba3bd0c3308fa414863e52f55c27b041701013697dfd2-1x.webp",
    title: "Yota Scale \u2014 AI-Powered Cloud Cost Management",
    description:
      "An AI-powered platform that automates cloud resource tagging, anomaly detection, and cost forecasting for enterprise infrastructure.",
    link: "/portfolio/yota-scale",
    challenge:
      "Enterprise cloud bills were spiraling with untagged resources, no anomaly detection, and manual cost tracking that couldn\u2019t keep up with infrastructure growth.",
    solution:
      "We built an AI-powered platform that automates resource tagging, detects cost anomalies in real time, and forecasts spend with time-series models.",
    results: [
      "Tagging accuracy improved by 80%",
      "Real-time anomaly detection for proactive issue resolution",
      "Measurable cloud cost reduction through automated optimization",
    ],
  },
  {
    image:
      "/img/portfolio/c3515cf68ea9bfa97f586fbc91a84d85b213157a9b883e87e82ee1d5ccd6dd01-1x.webp",
    title: "Flora \u2014 Premium Flower Delivery Platform",
    description:
      "A full-stack e-commerce platform for the floral industry with a premium mobile app, real-time logistics, and a centralized admin dashboard.",
    link: "/portfolio/flora",
    challenge:
      "A floral business needed to digitize the entire journey \u2014 from curated selection to doorstep delivery \u2014 with real-time inventory sync across multiple locations.",
    solution:
      "We delivered a cross-platform mobile app with a premium design system, real-time chat, push notifications, multi-location inventory sync, and a full admin dashboard.",
    results: [
      "Thousands of orders processed through the platform",
      "Real-time inventory sync across all locations",
      "Centralized business management dashboard",
    ],
  },
  {
    image:
      "/img/portfolio/592859e354ffa07ba1c01bab17d1671dc22d9988df1b5c07d84e64c2161b7d2c-1x.webp",
    title: "1000Hands AG \u2014 Digital Management for Real Estate",
    description:
      "A project and order management platform for Germany\u2019s leading real estate digitization provider, processing 75,000+ building plans annually.",
    link: "/portfolio/1000hands",
    challenge:
      "Germany\u2019s largest real estate digitization company needed to modernize their project management and automate floor plan data processing at scale.",
    solution:
      "We built a management platform with CAD integration, automated floor plan validation, and a streamlined project/order workflow handling 75K+ plans per year.",
    results: [
      "75,000+ building plans processed annually",
      "Automated floor plan data validation pipeline",
      "CAD system integration for architectural workflows",
    ],
  },
];

interface Service {
  title: string;
  description: string;
  icon: string;
  keywords: string[];
  metric: string;
}

export const servicesData: Service[] = [
  {
    title: "Launch your MVP in 8\u201312 weeks",
    description:
      "Fixed-scope mobile builds with a senior team, weekly demos, and a production-ready release \u2014 iOS, Android, React Native, or Flutter.",
    icon: "/img/services/mobile-dev.svg",
    keywords: [
      "iOS app development",
      "Android app development",
      "React Native",
      "Flutter",
    ],
    metric: "From idea to App Store in one quarter",
  },
  {
    title: "Scale your web product without rewrites",
    description:
      "Production-grade web apps on React, Next.js, and Node \u2014 architected for growth, shipped in two-week iterations with weekly demos.",
    icon: "/img/services/web-dev.svg",
    keywords: [
      "Next.js & React",
      "Progressive web apps",
      "API & backend engineering",
    ],
    metric: "Used by teams at Cisco, Juniper Networks, and BCG",
  },
  {
    title: "Design users actually convert on",
    description:
      "Product design that starts with a conversion goal: research, prototype, and ship a design system your engineers can build on day one.",
    icon: "/img/services/ui-ux.svg",
    keywords: ["UX research", "Prototyping", "Design systems"],
    metric: "Premium design systems for Flora, Relate, and more",
  },
  {
    title: "Ship confidently with automated QA",
    description:
      "We plug into your pipeline with manual and automated test suites so regressions get caught before customers do.",
    icon: "/img/services/qa.svg",
    keywords: ["Test automation", "Functional testing", "Performance testing"],
    metric: "End-to-end coverage across web, mobile, and API",
  },
  {
    title: "Cut cloud spend and deploy daily",
    description:
      "DevOps engineers who bring you from manual deploys to daily releases, with infrastructure-as-code and cost controls baked in.",
    icon: "/img/services/devops.svg",
    keywords: [
      "Cloud infrastructure",
      "CI/CD pipelines",
      "Cloud cost optimization",
    ],
    metric: "80% tagging accuracy lift \u00B7 real-time anomaly detection",
  },
  {
    title: "AI & automation that drives ROI",
    description:
      "From LLM-powered platforms to RPA dashboards \u2014 we build AI solutions that turn data into decisions and save hundreds of engineering hours.",
    icon: "/img/services/startup.svg",
    keywords: ["AI / ML development", "LLM platforms", "Process automation"],
    metric: "Delivered for BCG Gamma, Automation Anywhere, Juniper",
  },
];
