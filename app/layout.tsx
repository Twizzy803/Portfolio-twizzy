import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Paytone_One } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400"],
  variable: "--font-poppins",
  subsets: ["latin"],
})

const paytoneOne = Paytone_One({
  weight: ["400"],
  variable: "--font-paytone-one",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio Twizzy | Software Developer",
  description: "Portfolio resmi Agil Gilang C.S, menampilkan project web dan mobile app.",
  icons: {
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth select-none">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
