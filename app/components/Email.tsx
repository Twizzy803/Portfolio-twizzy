"use client"; // Wajib jika pakai Next.js App Router
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman refresh
    setLoading(true);

    // Ganti dengan ID dari Dashboard EmailJS Anda
    const SERVICE_ID = "service_twizzy803"; 
    const TEMPLATE_ID = "template_4rxfl0d";
    const PUBLIC_KEY = "gGnEFGOOB8bMemrPS";

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          (result) => {
            console.log(result.text);
            alert("Pesan berhasil terkirim!");
            setLoading(false);
            form.current?.reset(); // Kosongkan form setelah kirim
          },
          (error) => {
            console.log(error.text);
            alert("Gagal mengirim pesan. Coba lagi.");
            setLoading(false);
          }
        );
    }
  };

  return (
    <div className="flex flex-col">
      {/* Tambahkan ref={form} dan onSubmit={sendEmail} */}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col lg:w-2xl md:text-base text-sm">
        
        <label htmlFor="user_name" className="mb-1 font-semibold">Name</label>
        <input
          type="text"
          name="user_name" // ⚠️ PENTING: Harus sama dengan variabel di Template EmailJS
          required
          className="bg-secondary-me rounded-lg text-primary-me py-2 px-3 mb-4 outline-none focus:ring-2 focus:ring-tertiary-me"
        />

        <label htmlFor="user_email" className="mb-1 font-semibold">Email</label>
        <input
          type="email"
          name="user_email" // ⚠️ PENTING
          required
          className="bg-secondary-me rounded-lg text-primary-me py-2 px-3 mb-4 outline-none focus:ring-2 focus:ring-tertiary-me"
        />

        <label htmlFor="message" className="mb-1 font-semibold">Pesan</label>
        <textarea
          name="message" // ⚠️ PENTING
          required
          rows={4}
          className="bg-secondary-me rounded-lg text-primary-me py-2 px-3 outline-none focus:ring-2 focus:ring-tertiary-me"
        ></textarea>

        {/* Tombol dipindah ke DALAM form agar type="submit" berfungsi */}
        <button
          type="submit"
          disabled={loading}
          className="px-10 py-2 bg-tertiary-me mt-5 rounded-lg font-bold hover:opacity-80 transition disabled:opacity-50 text-secondary-me"
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </form>
    </div>
  );
}