import { parseData, SiteInfo } from "./type";

export function getSiteInfo(): SiteInfo[] {
  const siteData = parseData();
  return siteData;
}
