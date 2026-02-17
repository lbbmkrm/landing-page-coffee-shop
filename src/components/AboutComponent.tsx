import AboutManualBrew from "../assets/about-manual-brew.jpg";
import { motion } from "framer-motion";
const AboutComponent = () => {
  return (
    <section id="about" className="bg-background scroll-mt-20 overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        {/* Sisi Kiri: Visual dengan efek Offset */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Kotak dekoratif di belakang (Aksen Emas) */}
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-accent/20 -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500" />

          <div className="overflow-hidden shadow-2xl">
            <img
              src={AboutManualBrew}
              alt="Barista working"
              className="w-full aspect-4/3 md:aspect-5/4 lg:aspect-auto lg:h-[500px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Info Box (Kecil & Sharp) */}
          <div className="absolute -bottom-8 -right-8 bg-primary p-8 hidden md:block shadow-2xl">
            <p className="text-accent font-serif text-4xl font-bold">5+</p>
            <p className="text-surface text-xs uppercase tracking-widest font-bold">
              Tahun Pengalaman
            </p>
          </div>
        </motion.div>

        {/* Sisi Kanan: Konten Teks */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">
              Cerita Di Balik Layar
            </span>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Lebih Dari Sekadar <br /> Kedai Kopi Biasa.
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Semua berawal dari garasi kecil dan mimpi besar untuk menyajikan
              kopi yang tidak hanya enak, tapi juga punya jiwa. Kami percaya
              setiap biji kopi punya rahasia, dan tugas kami adalah membantumu
              menemukannya.
            </p>
          </div>

          {/* Nilai Tambah (Quick Stats) */}
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-2">
              <h4 className="text-xl">Biji Pilihan</h4>
              <p className="text-sm text-text-muted">
                Kami mendelegasi tim langsung ke petani lokal untuk mendapatkan
                kualitas terbaik.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl">Barista Andal</h4>
              <p className="text-sm text-text-muted">
                Setiap cangkir dikerjakan oleh tangan-tangan ahli yang mencintai
                profesinya.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutComponent;
