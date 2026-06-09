// server/site/siteServer.ts
import data from "./data.json";
// server/site/type.ts
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
  resume?: Resume; // Optional resume section
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

export type Resume = {
  googleDriveId: string;
  title: string;
  subtitle: string;
  stats: ResumeStat[];
  quickInfo: QuickInfo;
  coreSkills: string[];
  additionalInfo: AdditionalInfo;
};

export type ResumeStat = {
  label: string;
  value: string;
  icon: string;
};

export type QuickInfo = {
  experience: string;
  location: string;
  availability: string;
  languages: string[];
  timezone: string;
};

export type AdditionalInfo = {
  title: string;
  description: string;
};

export function parseData(): SiteInfo[] {
  return data.map((item: any) => ({
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
    skills: item.skills || [],
    sourceCode: item.sourceCode,
    keywords: item.keywords || [],
    outloookURL: item.outloookURL,
    language: item.language,
    theme: item.theme,
    isOpenToWork: item.isOpenToWork,
    resume: item.resume
      ? {
          googleDriveId: item.resume.googleDriveId,
          title: item.resume.title,
          subtitle: item.resume.subtitle,
          stats: item.resume.stats || [],
          quickInfo: {
            experience: item.resume.quickInfo?.experience || "",
            location: item.resume.quickInfo?.location || "",
            availability: item.resume.quickInfo?.availability || "",
            languages: item.resume.quickInfo?.languages || [],
            timezone: item.resume.quickInfo?.timezone || "",
          },
          coreSkills: item.resume.coreSkills || [],
          additionalInfo: {
            title: item.resume.additionalInfo?.title || "",
            description: item.resume.additionalInfo?.description || "",
          },
        }
      : undefined,
  }));
}

export function getSiteInfo(): SiteInfo[] {
  return parseData();
}
