import Hero from "./layout/Hero";
import Banner from "./layout/Banner";
import About from "./layout/About";
import Project from "./layout/Project";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
