import { useState } from "react";
import { Instagram, Music2, MessageCircle, ArrowUp, Check } from "lucide-react";

const FooterComponent = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    // Simulasi API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="relative bg-primary-dark text-surface pt-20 pb-10 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-3xl font-serif font-bold tracking-tight">
              CAFE<span className="text-accent">AURA</span>
            </div>
            <p className="text-surface/50 max-w-sm leading-relaxed text-lg italic font-light text-pretty">
              "Karena kopi bukan sekadar rasa, tapi cerita tentang dedikasi dan
              kehangatan di setiap seduhan."
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-500 group"
              >
                <Instagram
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-500 group"
              >
                <Music2
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-500 group"
              >
                <MessageCircle
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-8">
            <h4 className="text-accent uppercase font-bold tracking-[0.3em] text-xs">
              Navigasi
            </h4>
            <nav className="flex flex-col space-y-4 font-bold uppercase tracking-widest text-xs">
              {[
                {
                  name: "Beranda",
                  href: "#home",
                },
                {
                  name: "Daftar Menu",
                  href: "#menu",
                },
                {
                  name: "Cerita Kami",
                  href: "#about",
                },
                {
                  name: "Testimoni",
                  href: "#testimonials",
                },
                {
                  name: "Kontak",
                  href: "#contact",
                },
              ].map((item: { name: string; href: string }) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-surface/60 hover:text-accent transition-colors duration-300 w-fit"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter/Action Column */}
          <div className="space-y-8">
            <h4 className="text-accent uppercase font-bold tracking-[0.3em] text-xs">
              Langganan
            </h4>
            <div className="space-y-4">
              <p className="text-surface/50 text-sm leading-relaxed">
                Dapatkan info promo spesial dan update menu terbaru langsung di
                emailmu.
              </p>
              <form onSubmit={handleSubscribe} className="relative group">
                <input
                  type="email"
                  required
                  placeholder={
                    status === "success" ? "Terima Kasih!" : "Email Anda"
                  }
                  value={email}
                  disabled={status !== "idle"}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-surface/5 border border-surface/10 px-6 py-4 outline-none focus:border-accent transition-all text-sm disabled:opacity-50 ${
                    status === "success"
                      ? "border-accent text-accent placeholder:text-accent"
                      : ""
                  }`}
                />
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="absolute right-2 top-2 bottom-2 bg-accent text-primary px-4 font-bold text-xs uppercase hover:bg-accent-light transition-all disabled:opacity-50 flex items-center justify-center min-w-[70px]"
                >
                  {status === "idle" && "Kirim"}
                  {status === "loading" && (
                    <div className="w-5 h-5 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                  )}
                  {status === "success" && <Check size={18} />}
                </button>
              </form>
              {status === "success" && (
                <p className="text-accent text-[10px] uppercase font-bold tracking-widest animate-fade-in">
                  ✓ Anda telah terdaftar
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-surface/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-surface/30 text-xs tracking-widest uppercase">
            © 2026 CAFE AURA. Dibuat dengan kafein untuk pecinta kopi.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-accent hover:text-surface transition-colors group"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Kembali ke Atas
            </span>
            <div className="w-10 h-10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>

      {/* Visual Accent - Large Decal */}
      <div className="absolute -bottom-20 -right-20 text-[200px] font-serif font-bold text-surface/2 select-none pointer-events-none whitespace-nowrap">
        CAFE AURA
      </div>
    </footer>
  );
};

export default FooterComponent;
