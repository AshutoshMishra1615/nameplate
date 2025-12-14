import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Get A Nameplate | Custom Handmade Nameplates",
  description: "Shop unique, artistic, and custom handmade nameplates for your home and office. Personalized designs crafted with love. Contact us on WhatsApp for orders.",
  keywords: ["handmade nameplate", "custom nameplate", "artistic nameplate", "home decor", "personalized gift", "name plate design"],
  openGraph: {
    title: "Get A Nameplate | Custom Handmade Nameplates",
    description: "Shop unique, artistic, and custom handmade nameplates for your home and office.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
