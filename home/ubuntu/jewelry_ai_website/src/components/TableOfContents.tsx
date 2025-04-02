"use client";

import { useState } from "react";

export default function TableOfContents({ sections }: { sections: { id: string; title: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 sticky top-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-semibold text-indigo-700">Table of Contents</h3>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isOpen && (
        <ul className="mt-3 space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="text-indigo-600 hover:text-indigo-800 hover:underline text-left w-full"
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
