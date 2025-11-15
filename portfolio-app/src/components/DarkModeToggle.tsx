"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="neu-flat rounded-full p-3 neu-hover neu-active transition-all duration-200 text-neu-text hover:text-neu-accent relative"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-5 h-5">
        <FaSun
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "dark" ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
          }`}
          size={20}
        />
        <FaMoon
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "light" ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
          }`}
          size={20}
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;

