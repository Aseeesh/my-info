"use client";

import { Skill } from "@/server/skills/type";
import { useState, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

interface AddFormProps {
  onAddItem: (item: Skill) => void;
}

export default function AddForm({ onAddItem }: AddFormProps) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [url, setURL] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (name.trim() && logo.trim() && url.trim()) {
      const newUUID = uuidv4();
      const skill: Skill = {
        id: newUUID.toString(),
        name: name,
        logo: logo.toString(),
        url: url,
      };

      onAddItem(skill);
    }
  };

  return (
    <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
      <div className="group relative z-0 mb-5 w-full">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          required
        />
        <label
          htmlFor="name"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
        >
          Skill
        </label>
      </div>
      <div className="group relative z-0 mb-5 w-full">
        <input
          type="text"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          name="logo"
          id="logo"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          required
        />
        <label
          htmlFor="logo"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
        >
          logo
        </label>
      </div>
      <div className="group relative z-0 mb-5 w-full">
        <input
          type="text"
          value={url}
          onChange={(e) => setURL(e.target.value)}
          name="url"
          id="url"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          required
        />
        <label
          htmlFor="url"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
        >
          url
        </label>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
}
