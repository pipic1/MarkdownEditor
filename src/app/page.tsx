'use client';

import './globals.css';
import '../styles/_variables.scss';
import '../styles/_keyframe-animations.scss';

import { SimpleEditor } from '@/components/templates/simple/simple-editor'
import { useState } from 'react';


export default function Page() {
  const [markdown, setMarkdown] = useState("");
  const [fileMenuOpen, setFileMenuOpen] = useState(false);
  const [viewMenuOpen, setViewMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState("split");
  const [darkMode, setDarkMode] = useState(false);

    const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text(markdown, 10, 10);
    doc.save("markdown.pdf");
  };

  const saveToFile = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "markdown.md";
    link.click();
  };

  const copyMarkdown = () => {
    navigator.clipboard.writeText(markdown);
  };

  const copyRenderedContent = () => {
    navigator.clipboard.writeText(editor?.getHTML() || "");
  };
  
  return <>
    <div className=" bg-white flex align-middle gap-x-0.5 border-b border-gray-200 p-2 dark:bg-neutral-900 dark:border-neutral-700">
      <div className="relative">
        <button
          className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          onClick={() => setFileMenuOpen(!fileMenuOpen)}
        >
          File
        </button>
        {fileMenuOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-neutral-800 dark:border-neutral-700">
            <button
              className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
              onClick={exportToPDF}
            >
              Export to PDF
            </button>
            <button
              className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
              onClick={saveToFile}
            >
              Save Markdown
            </button>
            <button
              className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
              onClick={copyMarkdown}
            >
              Copy Markdown
            </button>
            <button
              className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
              onClick={copyRenderedContent}
            >
              Copy Rendered Content
            </button>
          </div>
        )}
      </div>
      <div className="relative">
        <button
          className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          onClick={() => setViewMenuOpen(!viewMenuOpen)}
        >
          View
        </button>
        {viewMenuOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-neutral-800 dark:border-neutral-700">
            <button
              className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
              onClick={() => setViewMode("split")}
            >
              Split View
            </button>
            <button
              className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
              onClick={() => setViewMode("markdown")}
            >
              Markdown View
            </button>
            <button
              className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
              onClick={() => setViewMode("final")}
            >
              Final Editable View
            </button>
            <button
              className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
              onClick={() => setDarkMode(!darkMode)}
            >
              Toggle Dark/Light Theme
            </button>
          </div>
        )}
      </div>
    </div>
    <SimpleEditor />
  </>
}