"use client"
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


// Tipe data untuk props
interface ModalCardProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  description: string;
  images: any[]; // Bisa string url atau import image statis
}

export default function ModalCard({
  isOpen,
  onClose,
  title,
  category,
  description,
  images,
}: ModalCardProps) {
   // State untuk Carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = kanan, -1 = kiri

  // Reset index ke 0 setiap kali modal dibuka
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setDirection(0);
    }
  }, [isOpen]);

  // Handle tombol ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Fungsi Navigasi Slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Variasi animasi slide
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 0.5, bounce: 0.3 },
            }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            // -------------------------------------------------------
            // 👇 1. UBAH UKURAN DISINI (max-w-3xl agar lebih lebar)
            // -------------------------------------------------------
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-[#1c1c1e] text-white shadow-2xl flex flex-col"
          >
            {/* Tombol Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition hover:bg-black/70"
            >
              <X size={20} />
            </button>

            {/* ------------------------------------------------------- */}
            {/* 👇 2. AREA CAROUSEL GAMBAR */}
            {/* ------------------------------------------------------- */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden bg-gray-900">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    fill
                    className="object-cover"
                    priority // Agar gambar cepat muncul
                  />
                  {/* Overlay Gradient bawah */}
                  <div className="absolute inset-0 bg-gradient-to-tfrom-[#1c1c1e] via-transparent to-transparent opacity-80" />
                </motion.div>
              </AnimatePresence>

              {/* Tombol Navigasi (Hanya muncul jika gambar > 1) */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 backdrop-blur-sm transition"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 backdrop-blur-sm transition"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Indikator Titik (Dots) */}
                  <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                    {images.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 w-2 rounded-full transition-all ${
                          index === currentIndex
                            ? "bg-white w-4"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Area Konten Teks */}
            <div className="p-8 pt-6">
              <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-blue-400">
                {category}
              </span>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-white">
                {title}
              </h2>
              <p className="text-base leading-relaxed text-gray-300">
                {description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
