"use client";

import { useTheme } from "@/contexts/ThemeContext";


const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-8 h-8">
        {/* Sun Icon (Nepali Surya - 12 pointed star) */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`absolute inset-0 w-full h-full text-nepali-red transition-all duration-500 ${
            theme === "dark" ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          }`}
        >
          <path d="M12 2L14.5 4.5L17 2.5L17.5 6L20.5 6.5L19 9.5L21.5 11.5L18.5 13L19.5 16L16 16.5L15 19.5L12 17.5L9 19.5L8 16.5L4.5 16L5.5 13L2.5 11.5L5 9.5L3.5 6.5L6.5 6L7 2.5L9.5 4.5L12 2Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>

        {/* Moon Icon (Nepali Chandra - Crescent with Star/Sun) */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`absolute inset-0 w-full h-full text-white transition-all duration-500 ${
            theme === "light" ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          }`}
        >
          {/* Crescent */}
          <path d="M12 20C16.4183 20 20 16.4183 20 12C20 10.5333 19.6059 9.1602 18.9113 7.9759C18.2124 11.4866 15.1365 14.1333 11.3333 14.1333C7.53019 14.1333 4.45426 11.4866 3.75537 7.9759C3.06074 9.1602 2.66667 10.5333 2.66667 12C2.66667 16.4183 6.24839 20 10.6667 20H12Z" />
          {/* Star/Sun above crescent */}
          <path d="M12 4L13 6L15 6.5L13.5 8L14 10L12 9L10 10L10.5 8L9 6.5L11 6L12 4Z" />
        </svg>
      </div>
    </button>
  );
};

export default DarkModeToggle;

