import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

// @ts-ignore: CSS import types are handled by Next.js config
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Toko Bangunan Tirta Mas | Material Lengkap / Complete Building Materials",
  description:
    "Toko bangunan terpercaya di Karangasem dengan material lengkap dan pemesanan cepat via WhatsApp. Trusted building materials store in Karangasem with fast WhatsApp ordering.",
  keywords: [
    "toko bangunan karangasem",
    "material bangunan",
    "semen",
    "besi",
    "keramik",
    "cat",
    "whatsapp order"
  ],
  openGraph: {
    title: "Toko Bangunan Tirta Mas",
    description:
      "Solusi material bangunan untuk proyek rumah dan kontraktor. Building materials solution for homes and contractors.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Toko Bangunan Tirta Mas",
    description:
      "Material lengkap dengan WhatsApp ordering cepat. Complete building materials with fast WhatsApp ordering."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
