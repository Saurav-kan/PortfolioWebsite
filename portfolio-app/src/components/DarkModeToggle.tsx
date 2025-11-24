"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";


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
        {/* Moon Icon (Nepali Chandra - Crescent with Star/Sun) */}
        <div
          className={`absolute inset-0 w-full h-full transition-all duration-500 ${
            theme === "light" ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          }`}
        >
          <Image
            src="/assets/moon-symbol.png"
            alt="Dark Mode"
            fill
            className="object-contain invert"
          />
        </div>
      </div>
    </button>
  );
};

export default DarkModeToggle;

