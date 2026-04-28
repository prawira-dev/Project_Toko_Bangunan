export type Locale = "id" | "en";

export type LocalizedText = Record<Locale, string>;

export type Product = {
  name: LocalizedText;
  category: LocalizedText;
  price: LocalizedText;
  image: string;
  alt: LocalizedText;
  description: LocalizedText;
};

export const companyProfile = {
  name: "Toko Bangunan Tirta Mas",
  tagline: {
    id: "Material Lengkap & Siap Kirim",
    en: "Complete Materials & Ready to Deliver"
  },
  foundedYear: "2012",
  description: {
    id:
      "Toko Bangunan Tirta Mas hadir untuk membantu kebutuhan material bangunan pelanggan rumah tangga, tukang, kontraktor, dan developer lokal dengan layanan yang cepat, produk lengkap, dan proses pemesanan yang praktis.",
    en:
      "Toko Bangunan Tirta Mas helps homeowners, builders, contractors, and local developers source construction materials with fast service, complete products, and a simple ordering process."
  },
  highlights: [
    {
      id: "Harga kompetitif untuk kebutuhan retail maupun pembelian volume proyek.",
      en: "Competitive pricing for both retail needs and large project orders."
    },
    {
      id: "Stok lengkap untuk kategori inti seperti semen, besi, cat, dan keramik.",
      en: "Well-stocked core categories such as cement, steel, paint, and tiles."
    },
    {
      id: "Pemesanan cepat via WhatsApp agar user tidak perlu proses yang rumit.",
      en: "Fast ordering via WhatsApp so customers can skip a complicated process."
    },
    {
      id: "Tim responsif untuk bantu cek stok, rekomendasi produk, dan pengiriman.",
      en: "A responsive team ready to help with stock checks, product recommendations, and delivery."
    }
  ],
  address:
    "Jl. Pantai Jasri, Subagan, Kec. Karangasem, Kabupaten Karangasem, Bali 80811",
  hours: {
    id: "Senin - Sabtu, 07.00 - 17.00 WITA",
    en: "Monday - Saturday, 7:00 AM - 5:00 PM WITA"
  },
  phoneNumber: "081339523911",
  phoneDisplay: "+62 813-3952-3911",
  email: "halo@tirtamasbangunan.id",
  socialMedia: {
    id: "Instagram: @tirtamasbangunan",
    en: "Instagram: @tirtamasbangunan"
  },
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.3059111373223!2d115.6191988125547!3d-8.46960434851647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd209a48d3d9eab%3A0xd2e80580009ba809!2sToko%20Tirta%20Mas!5e0!3m2!1sen!2sid!4v1776924274882!5m2!1sen!2sid"
};

export const stats = [
  {
    value: "500+",
    label: {
      id: "Pelanggan rutin untuk kebutuhan bangunan",
      en: "Repeat customers for construction needs"
    }
  },
  {
    value: "4 kategori",
    label: {
      id: "Produk unggulan paling dicari",
      en: "Top product categories customers look for"
    }
  },
  {
    value: "< 5 menit",
    label: {
      id: "Estimasi respon awal via WhatsApp",
      en: "Estimated first WhatsApp response"
    }
  }
];

export const products: Product[] = [
  {
    name: { id: "Semen Tiga Roda", en: "Tiga Roda Cement" },
    category: { id: "Semen", en: "Cement" },
    price: { id: "Mulai Rp 75.000", en: "Starting from Rp 75,000" },
    image: "/images/product-semen.svg",
    alt: {
      id: "Ilustrasi sak semen untuk material bangunan",
      en: "Illustration of a cement bag for construction materials"
    },
    description: {
      id: "Cocok untuk pengecoran, pasangan bata, dan renovasi rumah.",
      en: "Suitable for casting, brick laying, and home renovation."
    }
  },
  {
    name: { id: "Besi Beton Ulir", en: "Deformed Reinforcing Steel" },
    category: { id: "Besi", en: "Steel" },
    price: { id: "Mulai Rp 98.000", en: "Starting from Rp 98,000" },
    image: "/images/product-besi.svg",
    alt: {
      id: "Ilustrasi besi beton ulir untuk konstruksi",
      en: "Illustration of deformed reinforcing steel for construction"
    },
    description: {
      id: "Kuat dan stabil untuk kebutuhan struktur bangunan.",
      en: "Strong and stable for structural construction needs."
    }
  },
  {
    name: { id: "Cat Tembok Premium", en: "Premium Wall Paint" },
    category: { id: "Cat", en: "Paint" },
    price: { id: "Mulai Rp 185.000", en: "Starting from Rp 185,000" },
    image: "/images/product-cat.svg",
    alt: {
      id: "Ilustrasi ember cat tembok premium",
      en: "Illustration of a premium wall paint bucket"
    },
    description: {
      id: "Warna tahan lama dengan hasil akhir rapi untuk interior dan eksterior.",
      en: "Long-lasting color with a neat finish for interior and exterior use."
    }
  },
  {
    name: { id: "Keramik Lantai Modern", en: "Modern Floor Tiles" },
    category: { id: "Keramik", en: "Tiles" },
    price: { id: "Mulai Rp 68.000", en: "Starting from Rp 68,000" },
    image: "/images/product-keramik.svg",
    alt: {
      id: "Ilustrasi susunan keramik lantai modern",
      en: "Illustration of modern floor tile arrangements"
    },
    description: {
      id: "Pilihan motif bersih dan elegan untuk rumah maupun proyek komersial.",
      en: "Clean and elegant patterns for homes and commercial projects."
    }
  }
];

export const differentiators = [
  {
    icon: "Rp",
    title: { id: "Harga Grosir", en: "Wholesale Pricing" },
    description: {
      id: "Penawaran harga tetap kompetitif, termasuk untuk pembelian proyek dalam jumlah besar.",
      en: "Pricing stays competitive, including for large project purchases."
    }
  },
  {
    icon: "ST",
    title: { id: "Stok Lengkap", en: "Complete Stock" },
    description: {
      id: "Kategori utama tersedia sehingga pelanggan tidak perlu pindah toko untuk kebutuhan dasar.",
      en: "Core categories are available so customers do not need to visit multiple stores for basic needs."
    }
  },
  {
    icon: "GO",
    title: { id: "Pengiriman Cepat", en: "Fast Delivery" },
    description: {
      id: "Tim toko membantu proses pengiriman agar material bisa tiba sesuai kebutuhan lapangan.",
      en: "Our team helps arrange deliveries so materials arrive on time for site needs."
    }
  },
  {
    icon: "OK",
    title: { id: "Pelayanan Ramah", en: "Friendly Service" },
    description: {
      id: "Komunikasi dibuat sederhana dan jelas agar user cepat paham tanpa proses yang membingungkan.",
      en: "Communication is kept simple and clear so customers can move quickly without confusion."
    }
  }
];

export const testimonials = [
  {
    name: "Made Arta",
    role: { id: "Kontraktor Rumah Tinggal", en: "Residential Contractor" },
    quote: {
      id: "Respons WhatsApp cepat dan stok material inti hampir selalu ready. Sangat membantu saat proyek dikejar deadline.",
      en: "Fast WhatsApp responses and the key materials are almost always in stock. It is a big help when projects are racing a deadline."
    }
  },
  {
    name: "Komang Rini",
    role: { id: "Pemilik Rumah", en: "Homeowner" },
    quote: {
      id: "Saya mudah pilih produk karena penjelasannya jelas. Tinggal tanya via WhatsApp dan langsung diarahkan.",
      en: "It was easy to choose products because the explanations were clear. I just asked on WhatsApp and got guided right away."
    }
  },
  {
    name: "Putu Dian",
    role: { id: "Tukang Bangunan", en: "Builder" },
    quote: {
      id: "Harga masih bersaing dan pengiriman ke lokasi kerja cukup cepat. Cocok untuk kebutuhan harian proyek.",
      en: "Prices are still competitive and delivery to the job site is fairly quick. It works well for daily project needs."
    }
  }
];

export const landingCopy = {
  nav: {
    products: { id: "Produk", en: "Products" },
    about: { id: "Tentang", en: "About" },
    testimonials: { id: "Testimoni", en: "Testimonials" },
    location: { id: "Lokasi", en: "Location" }
  },
  actions: {
    contactWhatsApp: { id: "Hubungi via WhatsApp", en: "Contact via WhatsApp" },
    orderWhatsApp: { id: "Pesan via WhatsApp", en: "Order via WhatsApp" },
    viewProducts: { id: "Lihat Produk", en: "View Products" },
    askNow: { id: "Tanya", en: "Ask Now" },
    call: { id: "Telepon", en: "Call" },
    whatsapp: { id: "WhatsApp", en: "WhatsApp" }
  },
  header: {
    languageLabel: { id: "Bahasa", en: "Language" }
  },
  hero: {
    eyebrow: {
      id: "Solusi Lengkap Material Bangunan Anda",
      en: "Your Complete Construction Materials Solution"
    },
    title: {
      id: "Material bangunan lengkap untuk proyek rumah sampai skala kontraktor.",
      en: "Complete construction materials for home projects up to contractor-scale jobs."
    },
    description: {
      id: "Dapatkan semen, besi, cat, dan keramik dengan harga kompetitif, stok siap kirim, dan pemesanan cepat langsung lewat WhatsApp.",
      en: "Get cement, steel, paint, and tiles with competitive prices, ready-to-ship stock, and quick ordering directly through WhatsApp."
    },
    badgeTitle: { id: "Pengiriman cepat", en: "Fast delivery" },
    badgeArea: { id: "Area Karangasem & sekitarnya", en: "Karangasem area and nearby" },
    easyOrderTitle: { id: "Pesan makin mudah", en: "Ordering made easier" },
    easyOrderDescription: {
      id: "Klik produk, tanya via WhatsApp, dan langsung diproses.",
      en: "Tap a product, ask on WhatsApp, and your order gets processed right away."
    },
    imageAlt: { id: "Ilustrasi material bangunan toko", en: "Illustration of store construction materials" }
  },
  productsSection: {
    eyebrow: { id: "Produk Unggulan", en: "Featured Products" },
    title: {
      id: "Pilihan material yang paling sering dicari pelanggan kami.",
      en: "The materials our customers ask for most often."
    },
    description: {
      id: "Konten produk dibuat sederhana dan fokus pada aksi cepat, supaya user bisa langsung memilih kebutuhan lalu bertanya via WhatsApp.",
      en: "The product list is intentionally simple and action-focused, so visitors can quickly choose what they need and ask via WhatsApp."
    }
  },
  about: {
    eyebrow: { id: "Tentang Toko", en: "About the Store" },
    title: {
      id: "Partner material bangunan yang siap bantu dari awal sampai proyek jalan.",
      en: "A building materials partner ready to help from planning to project execution."
    },
    founded: { id: "Berdiri sejak", en: "Established in" },
    serviceFocus: { id: "Fokus layanan", en: "Service focus" },
    serviceFocusValue: {
      id: "Retail, kontraktor, dan developer lokal.",
      en: "Retail buyers, contractors, and local developers."
    },
    reasonsTitle: {
      id: "Kenapa pelanggan kembali lagi?",
      en: "Why do customers keep coming back?"
    }
  },
  whyUs: {
    eyebrow: { id: "Kenapa Kami", en: "Why Us" },
    title: {
      id: "Banyak pelanggan puas dan kembali lagi.",
      en: "Many customers are satisfied and come back again."
    },
    description: {
      id: "Karena layanan cepat, produk lengkap, dan harga kompetitif.",
      en: "Because of fast service, complete products, and competitive prices."
    }
  },
  testimonialsSection: {
    eyebrow: { id: "Testimoni", en: "Testimonials" },
    title: {
      id: "Dipercaya tukang, pemilik rumah, sampai kontraktor lokal.",
      en: "Trusted by builders, homeowners, and local contractors."
    },
    description: {
      id: "Testimoni membantu membangun trust lebih cepat, terutama untuk user baru yang belum pernah belanja ke toko sebelumnya.",
      en: "Testimonials build trust faster, especially for new visitors who have never purchased from the store before."
    }
  },
  cta: {
    eyebrow: { id: "Pesan Sekarang", en: "Order Now" },
    title: {
      id: "Butuh material untuk renovasi atau proyek baru? Tim kami siap bantu hitung kebutuhan Anda.",
      en: "Need materials for a renovation or a new project? Our team is ready to help estimate what you need."
    },
    description: {
      id: "Klik WhatsApp untuk konsultasi cepat, cek stok, atau minta rekomendasi produk paling sesuai dengan budget dan kebutuhan proyek Anda.",
      en: "Tap WhatsApp for a quick consultation, stock check, or recommendations that fit your budget and project needs."
    }
  },
  location: {
    eyebrow: { id: "Lokasi Toko", en: "Store Location" },
    title: {
      id: "Mudah ditemukan dan siap melayani area Karangasem & sekitarnya.",
      en: "Easy to find and ready to serve Karangasem and nearby areas."
    },
    description: {
      id: "Lokasi yang strategis membantu pelanggan datang langsung ke toko atau mengatur pengiriman dengan lebih cepat.",
      en: "A strategic location makes it easier for customers to visit the store directly or arrange delivery more quickly."
    },
    addressLabel: { id: "Alamat", en: "Address" },
    hoursLabel: { id: "Jam Operasional", en: "Operating Hours" },
    contactLabel: { id: "Kontak Cepat", en: "Quick Contact" },
    mapTitle: { id: "Lokasi Toko Bangunan Tirta Mas", en: "Tirta Mas Building Store Location" }
  },
  footer: {
    coverage: { id: "Melayani Karangasem & Sekitarnya", en: "Serving Karangasem and Nearby Areas" },
    fastDelivery: { id: "Pengiriman Cepat", en: "Fast Delivery" },
    competitivePrice: { id: "Harga Bersaing", en: "Competitive Prices" },
    contactTitle: { id: "Kontak", en: "Contact" },
    reachUsTitle: { id: "Hubungi", en: "Reach Us" },
    rights: { id: "Hak cipta dilindungi.", en: "All rights reserved." }
  },
  messages: {
    headerInquiry: {
      id: "Halo, saya ingin tanya produk toko bangunan.",
      en: "Hello, I would like to ask about your building store products."
    },
    heroInquiry: {
      id: "Halo, saya ingin konsultasi kebutuhan material bangunan.",
      en: "Hello, I would like to consult about my construction material needs."
    },
    productInquiryPrefix: {
      id: "Saya tertarik dengan produk",
      en: "I am interested in the product"
    },
    locationInquiry: {
      id: "Halo, saya ingin tanya alamat dan stok produk.",
      en: "Hello, I would like to ask about the address and product stock."
    },
    orderNow: {
      id: "Halo, saya ingin pesan material bangunan sekarang.",
      en: "Hello, I would like to order building materials now."
    },
    footerOrder: {
      id: "Halo, saya ingin order material bangunan.",
      en: "Hello, I would like to order building materials."
    }
  }
};

export function getLocalizedText(text: LocalizedText, locale: Locale) {
  return text[locale];
}
