import Image from "next/image";

import Iconsins from "../assets/icons/instagram.svg";
import Iconslink from "../assets/icons/linkedin.svg";
import Iconsgit from "../assets/icons/github.svg";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="text-secondary-me md:py-15 py-5 lg:px-30 md:px-15 px-10"
    >
      <div className="flex flex-col justify-center">
        <h1 className="font-paytoneOne lg:text-5xl md:text-3xl text-xl lg:mb-5 mb-4">Kontak.</h1>
        <div className="flex md:flex-row flex-col md:justify-between items-center">
          <div className="lg:ml-10 md:ml-5 md:mb-0 mb-5">
            {/* //* Instagram */}
            <a
              href="https://www.instagram.com/chandra_saputra02/"
              className="flex flex-row items-center mb-4"
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
              className="flex flex-row items-center mb-4"
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
              className="flex flex-row items-center"
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
          <div>
            <form action="" className="flex flex-col lg:w-2xl md:text-base text-sm">
              <label htmlFor="">Name</label>
              <input type="text" className="bg-secondary-me rounded-lg text-primary-me py-2 mb-2" />
              <label htmlFor="">Email</label>
              <input type="email" className="bg-secondary-me rounded-lg text-primary-me py-2 mb-2" />
              <label htmlFor="">Pesan</label>
              <textarea name="" id="" className="bg-secondary-me rounded-lg text-primary-me py-2"></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
