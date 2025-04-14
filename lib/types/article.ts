import { Category } from "./category";

export type Article = {
  id: number;
  title: string;
  locale: string;
  description: string;
  slug: string;
  img: {
    url: string;
  }[];
  seo: {
    img: {
      url: string;
    };
    metaTitle: string; 
    metaDescription: string;
    keywords: string;
  };
  categories: Category[];
  publishedAt: string;
  updatedAt: string;
};