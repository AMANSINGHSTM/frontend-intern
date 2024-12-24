"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <Button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</Button>
    </div>
  );
};

export default DarkModeToggle;
