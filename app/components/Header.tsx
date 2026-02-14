"use client";
import { useEffect, useState } from "react";

export default function Header() {
  // 1. State untuk warna teks (Logic lama Anda)
  const [isDarkText, setIsDarkText] = useState(true);

  // 2. State BARU: Menyimpan section mana yang sedang aktif
  const [activeSection, setActiveSection] = useState("Hero");

  useEffect(() => {
    const handleScroll = () => {
      // --- Logic 1 : warna Text (logic lama) ---
      const whiteSectionId = ["About", "Project"];

      const isOverWhiteSection = whiteSectionId.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();

        return rect.top <= 80 && rect.bottom >= 80;
      });
      setIsDarkText(isOverWhiteSection);

      // --- LOGIC 2: Deteksi Menu Aktif (DIPERBAIKI) ---
      const sections = ["Hero", "About", "Project", "Contact"];

      // 1. Cek apakah user sudah scroll sampai MENTOK BAWAH?
      // window.innerHeight = tinggi layar
      // window.scrollY = berapa banyak yg sudah discroll
      // document.body.offsetHeight = tinggi total website
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight - 10;

      if (isAtBottom) {
        // Jika mentok bawah, LANGSUNG set ke Contact (atau section terakhir Anda)
        setActiveSection("Contact");
      } else {
        // 2. Jika belum mentok bawah, pakai logika normal
        sections.forEach((section) => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();

            // Sedikit tips: Ubah offsetnya.
            // rect.top <= 150 (artinya section sudah masuk agak dalam ke layar)
            // rect.bottom >= 150 (artinya section belum habis keluar layar)
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section);
            }
          }
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function untuk class menu agar codingan rapi
  const getMenuClass = (id: string) => {
    const baseClass = "transition-all duration-300 hover:opacity-70";

    // Jika section ini sedang aktif (activeSection === id)
    if (activeSection === id) {
      // Tambahkan style aktif: Font Bold & Garis Bawah
      return `${baseClass} font-bold border-b-2 ${
        isDarkText ? "border-primary-me" : "border-secondary-me"
      }`;
    }

    // Jika tidak aktif
    return baseClass;
  };

  return (
    <header className="fixed w-full z-10 backdrop-blur-sm">
      <div
        className={`flex flex-row justify-around p-5 sticky transition-colors duration-300 ${
          isDarkText ? "text-primary-me" : "text-secondary-me"
        }`}
      >
        <h1 className="lg:text-2xl font-bold">Agil Gilang C.S</h1>

        <div className="space-x-10 hidden md:block">
          {/* Terapkan fungsi getMenuClass pada className */}
          <a href="#Hero" className={getMenuClass("Hero")}>
            Beranda
          </a>
          <a href="#About" className={getMenuClass("About")}>
            Tentang Saya
          </a>
          <a href="#Project" className={getMenuClass("Project")}>
            Proyek
          </a>
          <a href="#Contact" className={getMenuClass("Contact")}>
            Kontak
          </a>
        </div>
      </div>
    </header>
  );
}
