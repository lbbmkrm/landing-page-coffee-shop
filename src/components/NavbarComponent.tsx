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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Fungsi untuk menutup menu saat link diklik
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden transition-colors ${
              isScrolled ? "text-primary" : "text-surface"
            } hover:text-accent`}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay Modal */}
      <div
        className={`fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-lg transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className="relative w-full h-full flex flex-col items-center justify-center bg-transparent px-8 py-12"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button di atas */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-primary-light hover:text-accent transition-colors duration-300"
          >
            <X size={32} />
          </button>

          {/* Nav Links Vertikal */}
          <nav className="flex flex-col space-y-8 md:space-y-10 text-center text-surface text-2xl md:text-3xl font-medium">
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="hover:text-accent transition-colors duration-300 hover:scale-105"
            >
              Home
            </a>
            <a
              href="#menu"
              onClick={closeMobileMenu}
              className="hover:text-accent transition-colors duration-300 hover:scale-105"
            >
              Menu
            </a>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="hover:text-accent transition-colors duration-300 hover:scale-105"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="hover:text-accent transition-colors duration-300 hover:scale-105"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
