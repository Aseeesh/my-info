"use client";
import MobileNavLink from "@/components/shared/MobileNavLink";
import NavigationComponent from "@/components/shared/NavLink";
import OpenToWorkBadge from "@/components/ui/OpenToWorkBadge";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { useSiteInfo } from "@/hooks/context/SiteInfoContext";
import iconImage from "./icon.png";

import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function Header() {
  const { isLoading, siteInfo, error } = useSiteInfo();
  if (error) return <p>{error}</p>;
  if (isLoading) return <p>{isLoading}</p>;

  return (
    siteInfo != null && (
      <header className="relative flex items-center justify-between px-4 py-10 sm:px-0">
        <div className="align-center flex flex-row items-center">
          <Link href="/" aria-label={siteInfo[0].headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <ExportedImage
                  src={iconImage}
                  alt={siteInfo[0].headerTitle}
                  className="h-12 w-12 rounded-full"
                  width={50}
                  height={50}
                />
              </div>
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteInfo[0].headerTitle}
              </div>
            </div>
          </Link>

          {siteInfo[0].isOpenToWork && <OpenToWorkBadge />}
        </div>

        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <NavigationComponent />
          <ThemeSwitch />
          <MobileNavLink />
        </div>
      </header>
    )
  );
}
