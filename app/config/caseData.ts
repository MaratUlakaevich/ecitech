interface CaseStudy {
  image: string;
  title: string;
  description: string;
  link: string;
}

//change values of image to /img/portfolio/<img>.webp. AI!
export const cases: CaseStudy[] = [
  {
    image: "/img/peopleAI.svg",
    title: "AI-Powered Analytics",
    description: "A powerful analytics platform leveraging AI to uncover business insights.",
    link: "/portfolio/ai-powered-analytics",
  },
  {
    image: "/img/case2.jpg",
    title: "Ecosystem Integration",
    description: "A comprehensive ecosystem for seamless integration of services.",
    link: "/portfolio/ecosystem-integration",
  },
  {
    image: "/img/case3.jpg",
    title: "Blockchain Wallet",
    description: "A secure blockchain wallet with real-time transactions and analytics.",
    link: "/portfolio/blockchain-wallet",
  },
];