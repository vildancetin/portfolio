import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Switch = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || false
  );

  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", true);
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("darkMode");
  }

  return (
    <div className="flex col-span-1 justify-end">
      <button
        type="button"
        title="Toggle dark/light mode"
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center p-3 py-5 mr-2 text-xs font-medium text-blue bg-dark-toggle rounded-lg border border-dark-toggle  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange 
        dark:focus:ring-orange focus:outline-none dark:text-blue dark:border-gray-600 dark:bg-green-light dark:hover:bg-gray-700"
      >
        {darkMode ? (
          <SunIcon className="fill-current h-4 w-4" />
        ) : (
          <MoonIcon className="fill-current h-4 w-4" />
        )}
      </button>
    </div>
  );
};

export default Switch;
