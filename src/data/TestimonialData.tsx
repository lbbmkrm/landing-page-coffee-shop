export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Aditya Pratama",
    role: "Digital Nomad",
    text: "Espresso-nya beneran bold dan clean. Atmosfernya tenang banget, cocok buat yang butuh fokus kerja sambil ngopi.",
    rating: 5,
  },
  {
    id: 2,
    name: "Siska Amelia",
    role: "Kopi Enthusiast",
    text: "Pandan Arum Latte-nya juara! Gak nyangka perpaduan aroma pandan dan kopinya bisa se-smooth itu. Recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Warga Lokal",
    text: "Tempat favorit buat weekend bareng keluarga. Snacks-nya enak-enak, terutama Pisang Goreng Keju-nya yang juara.",
    rating: 5,
  },
  {
    id: 4,
    name: "Rina Wijaya",
    role: "Graphic Designer",
    text: "Suka banget sama desain interiornya yang minimalis. Pencahayaannya pas buat foto produk atau sekadar ootd-an.",
    rating: 4,
  },
  {
    id: 5,
    name: "Fajar Ramadhan",
    role: "Arsitek",
    text: "CAFE AURA punya vibe yang beda. Sharp edges di furniturnya berasa banget konsepnya. Kopi Susu Arennya mantap!",
    rating: 5,
  },
  {
    id: 6,
    name: "Maya Sari",
    role: "Food Blogger",
    text: "Menu snack-nya variatif dan plating-nya sangat artisanal. Definisi kafe premium yang sebenernya di daerah sini.",
    rating: 5,
  },
];
