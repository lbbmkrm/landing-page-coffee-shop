import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-40 overflow-hidden bg-primary"
    >
      {/* Cinematic Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop"
          alt="Cafe Interior"
          className="w-full h-full object-cover opacity-20 grayscale brightness-50"
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl space-y-16 lg:space-y-24">
          {/* Header Section */}
          <div className="space-y-6 animate-fade-in max-w-3xl">
            <span className="text-accent uppercase font-bold tracking-[0.4em] text-xs block">
              Alamat & Kontak
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-surface leading-[1.1] tracking-tight">
              Ruang Tenang di <br /> Tengah Kota.
            </h2>
            <p className="text-surface/50 text-lg md:text-xl font-light max-w-xl leading-relaxed">
              Mampir yuk, pintu kami selalu terbuka untuk secangkir
              kebahagiaanmu di tengah hiruk pikuk kota.
            </p>
          </div>

          {/* Info Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Location Card */}
            <motion.div
              variants={cardVariants}
              className="bg-surface/5 backdrop-blur-md p-10 border border-surface/10 hover:border-accent/50 transition-all duration-500 group flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                  <MapPin
                    className="text-accent group-hover:text-primary"
                    size={24}
                  />
                </div>
                <h4 className="text-2xl font-serif font-bold text-surface mb-4">
                  Lokasi
                </h4>
                <p className="text-surface/60 text-base leading-relaxed mb-8">
                  Jl. ExampleStreet, No. 123 <br />
                  ExampleCity, ExampleCountry
                </p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
              >
                Petunjuk Jalan <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              variants={cardVariants}
              className="bg-surface/5 backdrop-blur-md p-10 border border-surface/10 hover:border-accent/50 transition-all duration-500 group flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                  <Clock
                    className="text-accent group-hover:text-primary"
                    size={24}
                  />
                </div>
                <h4 className="text-2xl font-serif font-bold text-surface mb-4">
                  Jam Buka
                </h4>
                <div className="space-y-3 text-surface/60 text-base">
                  <div className="flex justify-between border-b border-surface/5 pb-2">
                    <span>Senin — Jumat</span>
                    <span className="text-surface font-medium">
                      08:00 — 22:00
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-surface/5 pb-2">
                    <span>Sabtu — Minggu</span>
                    <span className="text-accent font-bold">09:00 — 23:00</span>
                  </div>
                </div>
              </div>
              <p className="text-surface/30 text-[10px] uppercase tracking-[0.2em] pt-8">
                Pemesanan terakhir: 30 menit sebelum tutup
              </p>
            </motion.div>

            {/* Social & Contact Card */}
            <motion.div
              variants={cardVariants}
              className="bg-surface/5 backdrop-blur-md p-10 border border-surface/10 hover:border-accent/50 transition-all duration-500 group flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                  <Phone
                    className="text-accent group-hover:text-primary"
                    size={24}
                  />
                </div>
                <h4 className="text-2xl font-serif font-bold text-surface mb-4">
                  Terhubung
                </h4>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/628123456789"
                    target="_blank"
                    className="block text-surface/70 hover:text-accent transition-colors text-lg"
                  >
                    +62 812 3456 789
                  </a>
                  <a
                    href="mailto:halo@cafeaura.id"
                    target="_blank"
                    className="block text-surface/70 hover:text-accent transition-colors text-lg"
                  >
                    halo@cafeaura.id
                  </a>
                </div>
              </div>
              <div className="flex gap-4 pt-10">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="w-10 h-10 border border-surface/10 flex items-center justify-center text-surface/60 hover:bg-accent hover:text-primary transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://mail.google.com"
                  target="_blank"
                  className="w-10 h-10 border border-surface/10 flex items-center justify-center text-surface/60 hover:bg-accent hover:text-primary transition-all"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
