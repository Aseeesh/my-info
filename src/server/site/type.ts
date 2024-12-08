export type SiteInfo = {
  id: string;
  title: string;
  description: string;
  applicationName: string;
  headerTitle: string;
  author: Author;
  social: SocialLinks;
  sourceCode: string;
  skills: string[];
  keywords: string[];
  outloookURL: string;
  language: string;
  theme: "system" | string; // Allows for future theme expansion
  isOpenToWork: boolean;
};

export type Author = {
  name: string;
  nickname: string;
  url: string;
  role: string;
  role_rough_notation: string[];
  about: string;
  background: string;
  strengths: string[];
};

export type SocialLinks = {
  email: string;
  github: string;
  linkedin: string;
  instagram?: string; // Optional property
  threads?: string; // Optional property
  devto?: string; // Optional property
};
import data from "./data.json";
export function parseData(): SiteInfo[] {
  return data.map((item: SiteInfo) => ({
    id: item.id,
    title: item.title,
    applicationName: item.applicationName,
    headerTitle: item.headerTitle,
    description: item.description,
    author: {
      name: item.author.name,
      nickname: item.author.nickname,
      url: item.author.url,
      role: item.author.role,
      role_rough_notation: item.author.role_rough_notation,
      about: item.author.about,
      background: item.author.background,
      strengths: item.author.strengths,
    },
    social: {
      email: item.social.email,
      github: item.social.github,
      linkedin: item.social.linkedin,
      instagram: item.social.instagram,
      threads: item.social.threads,
      devto: item.social.devto,
    },
    sourceCode: item.sourceCode,
    keywords: item.keywords,
    skills: item.skills,
    outloookURL: item.outloookURL,
    language: item.language,
    theme: item.theme,
    isOpenToWork: item.isOpenToWork,
  }));
}
