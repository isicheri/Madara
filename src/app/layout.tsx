import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/context/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MADARA🦀 - Portfolio",
  description:
    "Madara is a software developer driven by process,passionate about learning,and an open minded thinker. Eager to tackle cutting-edge problem and build inovative solutions,continously exploring new technologies to create impactful and efficient software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-light_bg dark:bg-black text-gray-900 dark:text-white  antialiased`}
      >
        <Providers>
        <Navbar />
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
