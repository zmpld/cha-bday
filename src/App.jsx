//node modules
import ReactLenis from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  useGSAP(() => {
    const revealEls = gsap.utils.toArray(".reveal-up");

    revealEls.forEach((el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
      });
    });
  });

  return (
    <>
      <ReactLenis
        root
        options={{
          anchors: {
            offset: -80,
          },
        }}
      >
        <Header />
        <main>
          <Hero />
          <Work />
          <About />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
};

export default App;
