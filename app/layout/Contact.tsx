"use client"
import Image from "next/image";

import Iconsins from "../assets/icons/instagram.svg";
import Iconslink from "../assets/icons/linkedin.svg";
import Iconsgit from "../assets/icons/github.svg";
import { ScrollPop } from "../components/Animasi";
import Email from "../components/Email";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="text-secondary-me md:py-15 py-5 lg:px-30 md:px-15 px-10"
    >
      <ScrollPop className="flex flex-col justify-center">
        <h1 className="font-paytoneOne lg:text-5xl md:text-3xl text-xl lg:mb-5 mb-4">Kontak.</h1>
        <div className="flex md:flex-row flex-col md:justify-between items-center">
          <div className="lg:ml-10 md:ml-5 md:mb-0 mb-5">
            {/* //* Instagram */}
            <a
              href="https://www.instagram.com/chandra_saputra02/"
              className="flex flex-row items-center mb-4 hover:scale-105 active:scale-95 transition-transfrom duration-200"
            >
              <Image
                src={Iconsins}
                alt="Instagram"
                className="md:w-8 md:h-8 w-5 bg-secondary-me rounded-full"
              />{" "}
              <span className="ml-2">chandra_saputra02</span>
            </a>

            {/* //* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/agilgilangcs/"
              className="flex flex-row items-center mb-4 hover:scale-105 active:scale-95 transition-transfrom duration-200"
            >
              <Image
                src={Iconslink}
                alt="LinkedIn"
                className="md:w-8 md:h-8 w-5 bg-secondary-me rounded-full"
              />{" "}
              <span className="ml-2">in/agilgilangcs</span>
            </a>

            {/* //* Github */}
            <a
              href="https://github.com/Twizzy803"
              className="flex flex-row items-center hover:scale-105 active:scale-95 transition-transfrom duration-200"
            >
              <Image
                src={Iconsgit}
                alt="Github"
                className="md:w-8 md:h-8 w-5 bg-secondary-me rounded-full"
              />{" "}
              <span className="ml-2">Twizzy803</span>
            </a>
          </div>

          {/* //? Email */}
          <Email/>
        </div>
      </ScrollPop>
    </section>
  );
}
