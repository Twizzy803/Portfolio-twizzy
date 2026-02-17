"use client"
import { AnimasiH1kiri, AnimasiPkiri } from "../components/Animasi";

export default function About() {
  return (
    <div
      id="About"
      className="flex flex-col bg-secondary-me lg:p-10 md:p-10 p-2 text-justify lg:pt-15"
    >
      <AnimasiH1kiri className="lg:my-5 md:my-5 lg:text-5xl md:text-3xl text-xl font-paytoneOne underline underline-offset-1 text-primary-me">
        Tentang Saya<span className="text-tertiary-me">.</span>
      </AnimasiH1kiri>
      <AnimasiPkiri>
        Saya adalah seorang pengembang web dan mobile yang antusias dan
        berdedikasi tinggi dalam menciptakan solusi digital yang berdampak.
        Dengan bekal keahlian teknis yang mencakup HTML, CSS, Tailwind CSS,
        JavaScript, PHP, Laravel, React, Next.js, Flutter, MySQL, Figma, Git,
        Github, hingga Microsoft Office, saya terbiasa membangun aplikasi yang
        tidak hanya responsif dan berkualitas, tetapi juga memadukan estetika
        visual dengan fungsionalitas optimal. Bagi saya, teknologi adalah ruang
        belajar tanpa batas, sehingga saya selalu terbuka pada tantangan baru
        untuk terus berkembang. Sebagai penunjang fondasi karir ini, saya
        merupakan lulusan Politeknik Negeri Jember program studi Teknik
        Informatika.
      </AnimasiPkiri>
    </div>
  );
}
