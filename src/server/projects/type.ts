export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  img: string;
  ProjectHeader: ProjectHeader;
  ProjectImages: ProjectImage[];
  ProjectInfo: ProjectInfo;
};

type ProjectHeader = {
  title: string;
  publishDate: string[];
  tags: string[];
};

type ProjectImage = {
  id: string;
  title: string;
  img: string;
};

type ProjectInfo = {
  ClientHeading: string;
  CompanyInfo: CompanyInfo[];
  Technologies: Technology[];
  KeyRoleHeading: string;
  KeyRoleDetails: ProjectDetail[];
  KeyAchievementHeading: string;
  KeyAchievementDetails: ProjectDetail[];
};

type CompanyInfo = {
  id: string;
  title: string;
  isURL: boolean;
  details: string;
};

type Technology = {
  title: string;
  techs: string[];
};

type ProjectDetail = {
  id: string;
  details: string;
};

import data from "./data.json";
export function parseData(): Project[] {
  return data.map((item: Project) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    url: item.url,
    category: item.category,
    img: item.img,
    ProjectHeader: {
      title: item.ProjectHeader.title,
      publishDate: Array.isArray(item.ProjectHeader.publishDate)
        ? item.ProjectHeader.publishDate
        : [item.ProjectHeader.publishDate],
      tags: item.ProjectHeader.tags,
    },
    ProjectImages: item.ProjectImages.map((img: ProjectImage) => ({
      id: img.id,
      title: img.title,
      img: img.img,
    })),
    ProjectInfo: {
      ClientHeading: item.ProjectInfo.ClientHeading,
      CompanyInfo: item.ProjectInfo.CompanyInfo.map((info: CompanyInfo) => ({
        id: info.id,
        title: info.title,
        isURL: info.isURL,
        details: info.details,
      })),
      Technologies: item.ProjectInfo.Technologies.map((info: Technology) => ({
        title: info.title,
        techs: info.techs,
      })),
      KeyRoleHeading: item.ProjectInfo.KeyRoleHeading,
      KeyRoleDetails: item.ProjectInfo.KeyRoleDetails.map(
        (item: ProjectDetail) => ({
          id: item.id,
          details: item.details,
        }),
      ),
      KeyAchievementHeading: item.ProjectInfo.KeyAchievementHeading,
      KeyAchievementDetails: item.ProjectInfo.KeyAchievementDetails.map(
        (item: ProjectDetail) => ({
          id: item.id,
          details: item.details,
        }),
      ),
    },
  }));
}
