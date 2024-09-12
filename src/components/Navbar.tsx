"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">Dennis Zhang</Link>
        <ul className="flex space-x-4 items-center">
          <li><Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Projects</Link></li>
          <li><Link href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Skills</Link></li>
          <li><Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</Link></li>
          <li>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md bg-gray-200 dark:bg-gray-600"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
