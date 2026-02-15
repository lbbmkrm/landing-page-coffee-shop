import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-5 sm:px-6 py-4 ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-2xl sm:text-3xl font-serif font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? "text-primary" : "text-surface"
          }`}
        >
          CAFE<span className="text-accent">AURA</span>
        </div>
        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex space-x-8 lg:space-x-10 items-center transition-colors duration-300 ${
            isScrolled ? "text-primary-light" : "text-surface"
          }`}
        >
          <a href="#home" className="hover:text-accent transition-colors">
            Home
          </a>
          <a href="#menu" className="hover:text-accent transition-colors">
            Menu
          </a>
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
        </div>
        {/* Button & Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden transition-colors ${
            isScrolled ? "text-primary" : "text-surface"
          } hover:text-accent`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu (Full-screen overlay) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop blur */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" />

          {/* Menu content */}
          <div
            className={`
              relative h-full flex flex-col items-center justify-center 
              bg-white/50 backdrop-blur-xl 
              border-t border-white/20 shadow-2xl
              transition-all duration-400 ease-out
              ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-primary hover:text-accent transition-colors"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center space-y-10 text-center">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-primary hover:text-accent transition-colors"
              >
                Home
              </a>
              <a
                href="#menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-primary hover:text-accent transition-colors"
              >
                Menu
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-primary hover:text-accent transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-primary hover:text-accent transition-colors"
              >
                Contact
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-10 py-4 text-xl font-semibold  
                           bg-primary text-surface hover:text-accent 
                           hover:bg-primary-dark 
                           shadow-lg hover:shadow-xl transform hover:scale-105 
                           transition-all duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
