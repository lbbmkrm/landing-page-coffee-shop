interface MenuData {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const coffeeData: MenuData[] = [
  {
    id: 1,
    category: "Kopi",
    name: "Kopi Susu Aren",
    price: 23000,
    image: "/assets/menus-image/coffee/kopi-susu-aren.jpg",
    description:
      "Perpaduan espresso mantap dengan manisnya gula aren asli dan susu yang creamy.",
  },
  {
    id: 2,
    category: "Kopi",
    name: "Caffe Latte",
    price: 28000,
    image: "/assets/menus-image/coffee/caffe-latte.jpg",
    description:
      "Keseimbangan sempurna antara espresso yang kaya dan steamed milk yang halus.",
  },
  {
    id: 3,
    category: "Kopi",
    name: "Manual Brew V60",
    price: 30000,
    image: "/assets/menus-image/coffee/manual-brew.jpg",
    description:
      "Metode seduh manual untuk mengeluarkan karakter rasa terbaik dari biji kopi pilihan.",
  },
  {
    id: 4,
    category: "Kopi",
    name: "Caramel Macchiato",
    price: 35000,
    image: "/assets/menus-image/coffee/caramel-macchiato.jpg",
    description:
      "Espresso dengan saus karamel manis, vanilla, dan foam susu yang lembut.",
  },
  {
    id: 5,
    category: "Kopi",
    name: "Long Black",
    price: 25000,
    image: "/assets/menus-image/coffee/long-black.jpg",
    description:
      "Double shot espresso di atas air panas, menjaga crema tetap utuh dengan rasa yang bold.",
  },
];

const nonCoffeeData: MenuData[] = [
  {
    id: 6,
    category: "Segar-Segar",
    name: "Pandan Arum Latte",
    price: 28000,
    image: "/assets/menus-image/non-coffee/pandan-arum-latte.jpg",
    description:
      "Latte non-kopi dengan aroma pandan wangi yang memberikan rasa autentik nusantara.",
  },
  {
    id: 7,
    category: "Segar-Segar",
    name: "Matcha Zen",
    price: 30000,
    image: "/assets/menus-image/non-coffee/matcha-zen.jpg",
    description:
      "Bubuk matcha premium dari Uji, Jepang, dengan rasa earthy yang menenangkan.",
  },
  {
    id: 8,
    category: "Segar-Segar",
    name: "Lychee Tea",
    price: 22000,
    image: "/assets/menus-image/non-coffee/lychee-tea.jpg",
    description:
      "Teh segar dengan buah leci asli yang manis, pilihan tepat untuk cuaca panas.",
  },
  {
    id: 9,
    category: "Segar-Segar",
    name: "Dark Chocolate",
    price: 27000,
    image: "/assets/menus-image/non-coffee/dark-chocolate.jpg",
    description:
      "Cokelat hitam pekat dengan rasa yang deep dan tidak terlalu manis.",
  },
];

const foodMenuData: MenuData[] = [
  {
    id: 10,
    category: "Teman Ngopi",
    name: "Pisang Goreng",
    price: 25000,
    image: "/assets/menus-image/food/pisang-goreng.jpg",
    description:
      "Pisang kepok pilihan digoreng krispi, disajikan hangat dengan taburan keju.",
  },
  {
    id: 11,
    category: "Teman Ngopi",
    name: "Kentang Goreng",
    price: 32000,
    image: "/assets/menus-image/food/french-fries.jpg",
    description:
      "Potongan kentang renyah di luar dan lembut di dalam dengan bumbu spesial.",
  },
  {
    id: 12,
    category: "Teman Ngopi",
    name: "Croissant Almond",
    price: 35000,
    image: "/assets/menus-image/food/croissant-almond.jpg",
    description:
      "Pastry mentega berlapis yang renyah dengan isian dan topping krim almond.",
  },
  {
    id: 13,
    category: "Teman Ngopi",
    name: "Roti Bakar",
    price: 20000,
    image: "/assets/menus-image/food/roti-bakar.jpg",
    description:
      "Roti bakar klasik dengan pilihan topping cokelat dan keju yang melimpah.",
  },
];

export { coffeeData, nonCoffeeData, foodMenuData };
