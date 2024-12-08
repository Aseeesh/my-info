import React from "react";
import { SiGmail, SiMicrosoftoutlook } from "react-icons/si";

function ContactDetails() {
  return (
    <>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <p className="font-general-medium text-primary-dark dark:text-primary-light mb-8 text-2xl">
          Contact Details
        </p>

        <ul className="my-4 space-y-3">
          <li>
            <p className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
              <span className="ms-3 inline-flex whitespace-nowrap font-medium">
                <SiGmail />
              </span>
              <span className="ms-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                ashishrijal1@gmail.com
              </span>
            </p>
          </li>
          <li>
            <p className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
              <span className="ms-3 inline-flex whitespace-nowrap font-medium">
                <SiMicrosoftoutlook />
              </span>
              <span className="ms-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                ashishrijal1@hotmail.com
              </span>
            </p>
          </li>
          <li>
            <p className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
              <span className="ms-3 flex-1 whitespace-nowrap font-medium">
                +977-9840051712
              </span>
              <span className="ms-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                Kathmandu, Nepal
              </span>
            </p>
          </li>
          <li>
            <p className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
              <span className="ms-3 flex-1 whitespace-nowrap font-medium">
                +86-18515994101
              </span>
              <span className="ms-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                Beijing, China
              </span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactDetails;
