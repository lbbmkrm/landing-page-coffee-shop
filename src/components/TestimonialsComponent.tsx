import { testimonialData } from "../data/TestimonialData";
import { Quote, Star } from "lucide-react";

const TestimonialsComponent = () => {
  // Melipat gandakan data agar scroll tidak terputus (infinite effect)
  const doubleTestimonials = [...testimonialData, ...testimonialData];

  return (
    <section className="bg-background overflow-hidden py-20 lg:py-32">
      <div className="container-custom mb-16">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div className="space-y-4">
            <span className="text-accent uppercase font-bold tracking-[0.3em] text-sm">
              Suara Pelanggan
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">
              Apa Kata Mereka?
            </h2>
          </div>
          <p className="text-text-muted max-w-md">
            Cerita jujur dari mereka yang telah merasakan hangatnya suasana dan
            nikmatnya racikan kopi di CAFE AURA.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        <div className="animate-marquee flex gap-8 py-4">
          {doubleTestimonials.map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="w-[350px] md:w-[450px] shrink-0 bg-surface p-10 border border-primary/5 shadow-sm hover:shadow-md transition-all duration-500 group-hover:scale-[0.98] hover:!scale-100"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <Quote className="text-accent/20" size={32} />
              </div>

              <p className="text-primary-light font-medium text-lg mb-10 leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 flex items-center justify-center font-serif text-xl font-bold text-primary border border-primary/10">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary leading-none mb-1 text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs text-accent uppercase tracking-widest font-bold">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container-custom mt-16 flex justify-center">
        <div className="flex items-center gap-4 text-text-muted text-sm italic">
          <span className="w-12 h-px bg-primary/10" />
          Arahkan kursor untuk menjeda guliran
          <span className="w-12 h-px bg-primary/10" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;
