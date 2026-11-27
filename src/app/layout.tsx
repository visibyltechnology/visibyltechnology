import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Visibyl Technologies | Digital Products, Business Systems & Automation",
    template: "%s | Visibyl Technologies",
  },
  description: "Visibyl Technologies builds digital products, business management systems, e-commerce platforms and intelligent automation for growing organisations.",
  metadataBase: new URL("https://visibyl.biz"),
  openGraph: {
    title: "Visibyl Technologies",
    description: "We build the systems that power businesses.",
    url: "https://visibyl.biz",
    siteName: "Visibyl Technologies",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} font-sans`}>{children}</body>
    </html>
  );
}
