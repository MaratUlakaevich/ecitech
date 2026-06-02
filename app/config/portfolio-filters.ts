export type IndustrySlug =
  | "fintech"
  | "ai"
  | "enterprise"
  | "ecommerce"
  | "realestate";

export type StackSlug = "web" | "mobile" | "ai" | "devops" | "blockchain";

export interface FilterOption<T extends string> {
  slug: T;
  label: string;
}

export const industryFilters: FilterOption<IndustrySlug>[] = [
  { slug: "ai", label: "AI & Automation" },
  { slug: "enterprise", label: "Enterprise" },
  { slug: "fintech", label: "Fintech & Blockchain" },
  { slug: "ecommerce", label: "E-commerce" },
  { slug: "realestate", label: "Real Estate" },
];

export const stackFilters: FilterOption<StackSlug>[] = [
  { slug: "web", label: "Web" },
  { slug: "mobile", label: "Mobile" },
  { slug: "ai", label: "AI" },
  { slug: "devops", label: "DevOps" },
  { slug: "blockchain", label: "Blockchain" },
];

export interface TaggedCase {
  image: string;
  title: string;
  description: string;
  link: string;
  challenge: string;
  solution: string;
  results: string[];
  industry: IndustrySlug;
  stacks: StackSlug[];
}

export const caseTags: Record<string, { industry: IndustrySlug; stacks: StackSlug[] }> = {
  "/portfolio/bcg-co2ai": { industry: "ai", stacks: ["web", "ai", "devops"] },
  "/portfolio/juniper-clover": { industry: "enterprise", stacks: ["web", "ai"] },
  "/portfolio/0xequity": { industry: "fintech", stacks: ["web", "mobile", "blockchain"] },
  "/portfolio/automation-anywhere": { industry: "ai", stacks: ["web", "ai"] },
  "/portfolio/vector-mind": { industry: "ai", stacks: ["web", "ai"] },
  "/portfolio/yota-scale": { industry: "ai", stacks: ["web", "ai", "devops"] },
  "/portfolio/flora": { industry: "ecommerce", stacks: ["mobile", "web"] },
  "/portfolio/1000hands": { industry: "realestate", stacks: ["web", "devops"] },
};
