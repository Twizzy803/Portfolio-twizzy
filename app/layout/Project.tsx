"use client"
import Image from "next/image";
import {useState} from "react";
import ModalCard from "../components/ModelCard";

// * AfterGuilty Store
import Pro1Img1 from "../assets/afterguilty/2.png";
import Pro1Img2 from "../assets/afterguilty/3.png";
import Pro1Img3 from "../assets/afterguilty/4.png";
// * Black Wooden
import Pro2Img1 from "../assets/blackwooden/1.png";
import Pro2Img2 from "../assets/blackwooden/2.png";
import Pro2Img3 from "../assets/blackwooden/3.png";
import Pro2Img4 from "../assets/blackwooden/4.png";
// * Indomas
import Pro3Img1 from "../assets/indomas/2.png";
import Pro3Img2 from "../assets/indomas/3.png";
import Pro3Img3 from "../assets/indomas/4.png";
import Pro3Img4 from "../assets/indomas/5.png";
// * AgriIn
import Pro4Img1 from "../assets/agriin/1.png";
import Pro4Img2 from "../assets/agriin/2.png";
import Pro4Img3 from "../assets/agriin/3.png";
import Pro4Img4 from "../assets/agriin/4.png";
import Pro4Img5 from "../assets/agriin/5.png";
import Pro4Img6 from "../assets/agriin/6.png";
import Pro4Img7 from "../assets/agriin/7.png";

import ImgPort1 from "../assets/afterguilty/home.png";
import ImgPort2 from "../assets/blackwooden/1.png";
import ImgPort3 from "../assets/indomas/1.png";
import ImgPort4 from "../assets/agriin/1.png";
import { AnimasiBkanan, AnimasiBkiri, AnimasiKanan } from "../components/Animasi";

export default function Project() {
   const [activeModal, setActiveModal]  = useState<string | null>(null);
  return (
    <div id="Project" className="bg-secondary-me md:pb-10 pb-2">
      <AnimasiKanan className="flex flex-col items-center">
        <h1 className="text-center font-paytoneOne lg:text-5xl md:text-3xl text-xl text-primary-me">Proyek</h1>
        <span className="bg-tertiary-me w-2 h-20 rounded-lg my-5"> </span>
        <span className="bg-tertiary-me w-2 h-2 rounded-full"> </span>
      </AnimasiKanan>
      
      {/* //* AfterGuilty Store */}
      <AnimasiBkiri onClick={() => setActiveModal("afterguilty")}  className="flex flex-col justify-center items-center m-5 cursor-pointer hover:scale-102 active:scale-98 transition-transfrom duration-200">
        <div className="flex md:flex-row flex-col justify-center text-left items-center bg-tertiary-me rounded-xl lg:w-2/3 w-full">
          <section className="lg:pl-20 md:pl-10 pl-2 w-full">
            <div className="flex flex-row space-x-2 lg:mt-2 mt-4 text-sm lg:text-base">
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">HTML</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Bootstrap</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">PHP Native</p>
            </div>
            <p className="lg:text-xl md:text-lg text-secondary-me my-4">2022 | E-commerce | Website</p>
            <h1 className="text-4xl text-secondary-me font-bold">AfterGuilty.Store</h1>
            <p className="text-sm text-secondary-me my-4">Website yang berfokus pada jual beli produk fashion, Saya merancang dan membangun sebuah produk e-commerce yang komprehensif untuk brand fashion AfterGuilty</p>
          </section>
          <section className="p-4">
            <Image src={ImgPort1} alt="AfterGuilty Store" className="w-full rounded-lg" />
          </section>
        </div>
      </AnimasiBkiri>
       <ModalCard
        isOpen={activeModal === "afterguilty"}
        onClose={() => setActiveModal(null)}
        category="Website"
        title="AfterGuilty.Store"
        description="Website yang berfokus pada jual beli produk fashion, Saya merancang dan membangun sebuah produk e-commerce yang komprehensif untuk brand fashion AfterGuilty"
        images={[Pro1Img1, Pro1Img2, Pro1Img3]} 
      />

      {/* //* Black Wooden */}
      <AnimasiBkanan onClick={() => setActiveModal("blackwooden")} className="flex flex-col justify-center items-center m-5 cursor-pointer hover:scale-102 active:scale-98 transition-transfrom duration-200">
        <div className="flex md:flex-row flex-col justify-center text-left items-center bg-tertiary-me rounded-xl lg:w-2/3 w-full">
          <section className="lg:pl-20 md:pl-10 pl-2 w-full">
            <div className="flex flex-row space-x-2 lg:mt-2 mt-4 text-sm lg:text-base">
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Flutter</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Dart</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">MySQL</p>
            </div>
            <p className="lg:text-xl md:text-lg text-secondary-me my-4">2023 | E-commerce | Mobile App</p>
            <h1 className="text-4xl text-secondary-me font-bold">Black Wooden</h1>
            <p className="text-sm text-secondary-me my-4">Black Wooden adalah aplikasi mobile berbasis Flutter yang memudahkan pengguna dalam membeli berbagai mebel kayu, mulai dari meja, kursi, hingga produk custom sesuai kebutuhan.</p>
          </section>
          <section className="p-4">
            <Image src={ImgPort2} alt="AfterGuilty Store" className="lg:w-full md:w-2xl rounded-lg" />
          </section>
        </div>
      </AnimasiBkanan>
      <ModalCard
      isOpen={activeModal === "blackwooden"}
      onClose={() => setActiveModal(null)}
      category="Mobile App"
      title="Black Wooden"
       description="Black Wooden adalah aplikasi mobile berbasis Flutter yang memudahkan pengguna dalam membeli berbagai mebel kayu, mulai dari meja, kursi, hingga produk custom sesuai kebutuhan."
       images={[Pro2Img2, Pro2Img3, Pro2Img4]}
      />

      {/* //* Indomas */}
      <AnimasiBkiri onClick={() => setActiveModal("indomas")} className="flex flex-col justify-center items-center m-5 cursor-pointer hover:scale-102 active:scale-98 transition-transfrom duration-200">
        <div className="flex md:flex-row flex-col text-left justify-center items-center bg-tertiary-me rounded-xl lg:w-2/3 w-full">
          <section className="lg:pl-20 md:pl-10 pl-2 w-full">
            <div className="flex flex-row space-x-2 lg:mt-2 mt-4 text-sm lg:text-base">
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Laravel</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Bootstrap</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">MySQL</p>
            </div>
            <p className="lg:text-xl md:text-lg text-secondary-me my-4">2024 | Legalitas Ormas | Website</p>
            <h1 className="text-4xl text-secondary-me font-bold">Indomas</h1>
            <p className="text-sm text-secondary-me my-4">Indomas adalah sebuah website yang dikembangkan untuk memfasilitasi pendaftaran organisasi dan memberikan pengakuan resmi dari negara. Website ini juga memberikan informasi terkait kegiatan yang dilakukan oleh organisasi yang terdaftar di Badan Kesatuan Bangsa dan Politik (BAKESBANGPOL) Kota Batu.</p>
          </section>
          <section className="p-4">
            <Image src={ImgPort3} alt="AfterGuilty Store" className="lg:w-full md:w-2xl rounded-lg" />
          </section>
        </div>
      </AnimasiBkiri>
      <ModalCard
      isOpen={activeModal === "indomas"}
      onClose={() => setActiveModal(null)}
      category="Website"
      title="Indomas"
       description="Indomas adalah sebuah website yang dikembangkan untuk memfasilitasi pendaftaran organisasi dan memberikan pengakuan resmi dari negara. Website ini juga memberikan informasi terkait kegiatan yang dilakukan oleh organisasi yang terdaftar di Badan Kesatuan Bangsa dan Politik (BAKESBANGPOL) Kota Batu."
       images={[Pro3Img1, Pro3Img2, Pro3Img3, Pro3Img4]}
      />

      {/* //* AgriIn */}
      <AnimasiBkanan onClick={() => setActiveModal("agriin")} className="flex flex-col justify-center items-center m-5 cursor-pointer hover:scale-102 active:scale-98 transition-transfrom duration-200">
        <div className="flex md:flex-row flex-col text-left justify-center items-center bg-tertiary-me rounded-xl lg:w-2/3 w-full">
          <section className="lg:pl-20 md:pl-10 pl-2 w-full">
            <div className="flex flex-row space-x-2 lg:mt-2 mt-4 text-sm md:text-base">
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Flutter</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Yolo-11</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Mechine Learning</p>
            </div>
            <p className="lg:text-xl md:text-lg text-secondary-me my-4">2024 | Detection | Mobile App</p>
            <h1 className="text-4xl text-secondary-me font-bold">AgriIn</h1>
            <p className="text-sm text-secondary-me my-4">AgriIn adalah aplikasi Android yang dikembangkan menggunakan framework Flutter untuk membantu petani bawang merah dalam mendiagnosis penyakit dan hama yang menyerang tanaman mereka.</p>
          </section>
          <section className="p-4">
            <Image src={ImgPort4} alt="AfterGuilty Store" className="lg:w-full md:w-2xl rounded-lg" />
          </section>
        </div>
      </AnimasiBkanan>
      <ModalCard
      isOpen={activeModal === "agriin"}
      onClose={() => setActiveModal(null)}
      category="Mobile App"
      title="AgriIn"
       description="AgriIn adalah aplikasi Android yang dikembangkan menggunakan framework Flutter untuk membantu petani bawang merah dalam mendiagnosis penyakit dan hama yang menyerang tanaman mereka."
       images={[Pro4Img2, Pro4Img3, Pro4Img4, Pro4Img5, Pro4Img6, Pro4Img7]}
      />
    </div>
  );
}
