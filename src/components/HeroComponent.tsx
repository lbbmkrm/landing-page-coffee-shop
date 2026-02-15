import { ArrowRight } from "lucide-react";
import HeroLatte from "../assets/hero-latte.png";

const HeroComponent = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroLatte}
          alt="Coffee Shop Atmosphere"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-brightness-[0.8]" />
      </div>

      {/* Content - Centered & Sharp */}
      <div className="relative z-10 container-custom text-center animate-fade-in">
        <div className="flex flex-col items-center space-y-8">
          <div className="space-y-4">
            <span className="text-accent uppercase tracking-[0.3em] font-bold text-sm block">
              Nikmati Kopi Pilihan • Sejak 2024
            </span>

            <h1 className="text-5xl md:text-8xl text-surface font-serif leading-tight">
              Bikin Tiap Momen <br />
              Jadi <span className="italic">Lebih Bermakna</span>
            </h1>

            <p className="text-surface/80 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
              Temukan ketenangan di tengah hiruk-pikuk kota. Dari biji kopi
              pilihan hingga ke cangkirmu, kami kerjakan dengan sepenuh hati
              demi satu tujuan: kebahagiaanmu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <button className="bg-accent px-10 py-5 text-primary font-bold flex items-center justify-center gap-3 hover:bg-accent-light transition-all shadow-2xl">
              Lihat Menu <ArrowRight size={20} />
            </button>
            <button className="px-10 py-5 font-bold text-surface border border-surface/30 hover:bg-surface hover:text-primary transition-all backdrop-blur-sm">
              Booking Tempat
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Scroll Indicator - Minimalist */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent animate-bounce-slow" />
      </div>
    </section>
  );
};

export default HeroComponent;
