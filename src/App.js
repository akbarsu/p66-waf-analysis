import React, { useState, useEffect } from 'react';
import ExecutiveSummarySlides from './ExecutiveSummarySlides';
import { Moon, Sun } from 'lucide-react';
import mermaid from 'mermaid';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Initialize mermaid with dark mode support
    mermaid.initialize({
      startOnLoad: true,
      theme: darkMode ? 'dark' : 'neutral',
      flowchart: {
        curve: 'basis',
        padding: 20,
      },
      themeCSS: `
        .node rect { fill: ${darkMode ? '#2d3748' : '#f4f4f4'}; stroke: ${darkMode ? '#718096' : '#999'}; stroke-width: 1px; }
        .node text { font-size: 14px; font-weight: 300; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; fill: ${darkMode ? '#e2e8f0' : '#333'}; }
        .edgePath path { stroke: ${darkMode ? '#a0aec0' : '#666'}; stroke-width: 1.5px; }
        .cluster rect { fill: ${darkMode ? '#2d3748' : '#f0f0f0'}; stroke: ${darkMode ? '#718096' : '#999'}; stroke-width: 1px; }
      `,
      fontSize: 18,
    });
  }, [darkMode]);

  return (
    <div className="App min-h-screen bg-secondary-50 dark:bg-gray-900 transition-colors duration-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg z-10"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
      </button>
      <ExecutiveSummarySlides />
    </div>
  );
}

export default App;