"use client";

import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 md:mb-24">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        {/* <h4 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Contacts
        </h4> */}
      </div>

      <div className="container mx-auto flex flex-col-reverse py-5 lg:mt-5 lg:flex-row lg:py-10">
        <ContactForm />

        <ContactDetails />
      </div>
    </div>
  );
}
