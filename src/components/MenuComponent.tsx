import { useState } from "react";
import { coffeeData, foodMenuData, nonCoffeeData } from "../data/MenuData";

const menuData = [...coffeeData, ...nonCoffeeData, ...foodMenuData];

const MenuComponent = () => {
  const [activeCategory, setActiveCategory] = useState("Kopi");

  const categories = Array.from(new Set(menuData.map((item) => item.category)));

  const filteredMenu = menuData.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <section id="menu" className="bg-surface py-20 lg:py-32">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <span className="text-accent uppercase font-bold tracking-[0.3em] text-sm">
            Pilihan Terbaik
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">Daftar Menu Kami</h2>
          <p className="text-text-muted max-w-lg mx-auto">
            Dari racikan kopi klasik hingga camilan yang menggugah selera, semua
            disiapkan spesial untukmu.
          </p>
        </div>

        {/* Filter Tabs - Sharp Style */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-4 font-bold transition-all duration-300 border uppercase tracking-widest text-xs relative overflow-hidden ${
                activeCategory === cat
                  ? "bg-primary text-surface border-primary shadow-xl translate-y-[-2px]"
                  : "bg-background border-primary/10 text-text-muted hover:border-primary/30 hover:text-primary hover:bg-surface hover:shadow-md"
              }`}
            >
              {/* Subtle indicator dot for active state */}
              {activeCategory === cat && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent" />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer border border-transparent hover:border-primary/5 p-4 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Sharp Overlay on Hover - Showing Description */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <p className="text-surface font-medium text-sm leading-relaxed tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-primary">
                    {item.name}
                  </h3>
                  <p className="text-xs text-text-muted uppercase tracking-widest font-medium">
                    {item.category}
                  </p>
                </div>
                <span className="text-accent font-bold text-lg">
                  {new Intl.NumberFormat("id-ID").format(item.price)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuComponent;
