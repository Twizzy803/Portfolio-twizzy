"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isDarkText, setIsDarkText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const whiteSectionId = ["About", "Project"];

      const isOverWhiteSection = whiteSectionId.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();

        return rect.top <= 80 && rect.bottom >= 80;
      });
      setIsDarkText(isOverWhiteSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-10 backdrop-blur-sm">
      <div
        className={`flex flex-row justify-around p-5 sticky transition-colors duration-300 ${
          isDarkText ? "text-primary-me" : "text-secondary-me"
        }`}
      >
        <h1 className="lg:text-2xl font-bold">Agil Gilang C.S</h1>
        <div className="space-x-10">
          <a href="#Hero">Beranda</a>
          <a href="#About">Tentang Saya</a>
          <a href="#Project">Proyek</a>
          <a href="#Contact">Kontak</a>
        </div>
      </div>
    </header>
  );
}
