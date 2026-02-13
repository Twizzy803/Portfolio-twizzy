import Image from "next/image";

import ImgPort1 from "../assets/afterguilty/home.png";
import ImgPort2 from "../assets/blackwooden/1.png";
import ImgPort3 from "../assets/indomas/1.png";
import ImgPort4 from "../assets/agriin/1.png";

export default function Project() {
  return (
    <div id="Project" className="bg-secondary-me">
      <section className="flex flex-col items-center">
        <h1 className="text-center font-paytoneOne lg:text-4xl">Proyek</h1>
        <span className="bg-tertiary-me w-2 h-20 rounded-lg lg:my-5"> </span>
        <span className="bg-tertiary-me w-2 h-2 rounded-full"> </span>
      </section>
      
      {/* //* AfterGuilty Store */}
      <a href="#" className="flex flex-col justify-center items-center m-5">
        <div className="flex flex-row justify-center items-center bg-tertiary-me rounded-xl w-2/3">
          <section className="pl-20 w-full">
            <div className="flex flex-row space-x-2">
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">HTML</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Bootstrap</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">PHP Native</p>
            </div>
            <p className="text-xl text-secondary-me my-4">2023 | E-commerce | Website</p>
            <h1 className="text-4xl text-secondary-me font-bold">AfterGuilty.Store</h1>
            <p className="text-sm text-secondary-me my-4">Website yang berfokus pada jual beli produk fashion</p>
          </section>
          <section className="p-4">
            <Image src={ImgPort1} alt="AfterGuilty Store" className="w-full rounded-lg" />
          </section>
        </div>
      </a>

      {/* //* Black Wooden */}
      <a href="#" className="flex flex-col justify-center items-center m-5">
        <div className="flex flex-row justify-center items-center bg-tertiary-me rounded-xl w-2/3">
          <section className="pl-20 w-full">
            <div className="flex flex-row space-x-2">
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Flutter</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Dart</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">MySQL</p>
            </div>
            <p className="text-xl text-secondary-me my-4">2023 | E-commerce | Mobile App</p>
            <h1 className="text-4xl text-secondary-me font-bold">Black Wooden</h1>
            <p className="text-sm text-secondary-me my-4">Aplikasi untuk membeli produk furniture</p>
          </section>
          <section className="p-4">
            <Image src={ImgPort2} alt="AfterGuilty Store" className="w-full rounded-lg" />
          </section>
        </div>
      </a>

      {/* //* Indomas */}
      <a href="#" className="flex flex-col justify-center items-center m-5">
        <div className="flex flex-row justify-center items-center bg-tertiary-me rounded-xl w-2/3">
          <section className="pl-20 w-full">
            <div className="flex flex-row space-x-2">
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Laravel</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Bootstrap</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">MySQL</p>
            </div>
            <p className="text-xl text-secondary-me my-4">2024 | Legalitas Ormas | Website</p>
            <h1 className="text-4xl text-secondary-me font-bold">Indomas</h1>
            <p className="text-sm text-secondary-me my-4">Website yang berfokus pada jual beli produk fashion</p>
          </section>
          <section className="p-4">
            <Image src={ImgPort3} alt="AfterGuilty Store" className="w-full rounded-lg" />
          </section>
        </div>
      </a>

      {/* //* AgriIn */}
      <a href="#" className="flex flex-col justify-center items-center m-5">
        <div className="flex flex-row justify-center items-center bg-tertiary-me rounded-xl w-2/3">
          <section className="pl-20 w-full">
            <div className="flex flex-row space-x-2">
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Flutter</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Yolo-11</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Mechine Learning</p>
            </div>
            <p className="text-xl text-secondary-me my-4">2024 | Detection | Mobile App</p>
            <h1 className="text-4xl text-secondary-me font-bold">AgriIn</h1>
            <p className="text-sm text-secondary-me my-4">Website yang berfokus pada jual beli produk fashion</p>
          </section>
          <section className="p-4">
            <Image src={ImgPort4} alt="AfterGuilty Store" className="w-full rounded-lg" />
          </section>
        </div>
      </a>
    </div>
  );
}
