"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { getNavigations } from "@/server/navigation/navigationServer";
import { useCallback, useEffect, Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationItem } from "@/server/navigation/type";

const MobileNavLink = () => {
  const [navLinks, setNavLinks] = useState<NavigationItem[] | null>(null);

  // Load data with a callback function
  const loadData = useCallback(async () => {
    try {
      const data = await getNavigations();
      if (data != null) {
        setNavLinks(data);
      } // Update the state
    } catch (error) {
      console.error(
        "Failed to fetch navigation data:" + (error as Error).message,
      );
      setNavLinks(null); // Set to an empty array on error
    }
  }, []);

  // Effect to fetch navigation data on component mount
  useEffect(() => {
    loadData();
  }, [loadData]);
  const pathname = usePathname();
  const [navShow, setNavShow] = useState<boolean>(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  const renderNavLinks = (navLinks: NavigationItem[]) => (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="sm:hidden"
      >
        <RxHamburgerMenu className="h-8 w-8 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400" />
      </button>

      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div className="fixed inset-0 z-60 bg-black/25" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-95"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-95"
            leaveTo="translate-x-full opacity-0"
            unmount={false}
          >
            <DialogPanel className="fixed left-0 top-0 z-70 h-full w-full bg-white opacity-95 duration-300 dark:bg-gray-800">
              <nav className="mt-8 flex h-full basis-0 flex-col items-start overflow-y-auto pl-12 pt-2 text-left">
                {navLinks.map((navLink) => (
                  <Link
                    key={navLink.title}
                    href={navLink.href}
                    className={`mb-4 flex items-center space-x-1 py-2 pr-4 text-2xl font-medium tracking-widest outline outline-0 hover:text-primary-500 dark:hover:text-primary-400 ${pathname === navLink.href ? "text-primary-500 dark:text-primary-400" : "text-gray-900 dark:text-gray-100"}`}
                    onClick={onToggleNav}
                  >
                    <span>{navLink.title}</span>
                  </Link>
                ))}
              </nav>

              <button
                className="fixed right-4 top-7 z-80 h-16 w-16 p-4 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                aria-label="Toggle Menu"
                onClick={onToggleNav}
              >
                <IoCloseOutline className="h-8 w-8" />
              </button>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );

  return navLinks ? renderNavLinks(navLinks) : <p>Loading navigation...</p>;
};

export default MobileNavLink;
