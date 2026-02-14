"use client";
import Image from "next/image";

import PixelTransition from "../components/PixelTransition";

import Photo from "../assets/img/Photo.png";

export default function Hero() {
  return (
    <div
      id="Hero"
      className="flex flex-row justify-center lg:space-x-50 md:space-x-10 items-center min-h-screen text-secondary-me"
    >
      <section className="name space-y-4">
        <h1 className="lg:text-3xl md:text-2xl font-bold">Haii, Saya</h1>
        <h1 className="lg:text-4xl md:text-3xl">Agil Gilang Chandra Saputra</h1>
        <h1 className="lg:text-3xl font-bold bg-tertiary-me text-center p-1 rounded-lg">
          Software Developer
        </h1>
      </section>
      <section className="card flex flex-col justify-center items-center space-y-5">
        <PixelTransition
          firstContent={
            <Image
              src={Photo}
              alt="What??"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#134455",
              }}
            >
              <p
                style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}
              >
                Twizzy!
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          once={false}
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
        <a
          href="/public/doc/CV.pdf"
          download="CV_Agil Gilang Chandra Saputra.pdf"
          className="bg-tertiary-me py-2 px-8 rounded-lg hover:bg-tertiary-me/70"
        >
          Download CV
        </a>
      </section>
    </div>
  );
}
