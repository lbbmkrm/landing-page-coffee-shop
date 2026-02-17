import { useEffect } from "react";
import Lenis from "lenis";
import NavbarComponent from "./components/NavbarComponent";
import HeroComponent from "./components/HeroComponent";
import AboutComponent from "./components/AboutComponent";
import MenuComponent from "./components/MenuComponent";
import TestimonialsComponent from "./components/TestimonialsComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <NavbarComponent />
      <HeroComponent />
      <AboutComponent />
      <MenuComponent />
      <TestimonialsComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}

export default App;
