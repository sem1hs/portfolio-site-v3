import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Inter } from "next/font/google";
import BackgroundGradient from "@/components/background/BackgroundGradient";

export const metadata: Metadata = {
  title: "Semih Şahinoğlu | Backend Developer",
  description:
    "Semih Şahinoğlu'nun portföy sitesi. Java, Spring Boot ve ölçeklenebilir mikroservis mimarileri üzerine çalışan bir Backend Developer. Portfolio of Semih Şahinoğlu, Backend Developer specializing in Java, Spring Boot, and scalable microservices.",

  keywords: [
    "Semih Şahinoğlu",
    "Backend Developer",
    "Yazılım Geliştirici",
    "Java geliştirici",
    "Spring Boot",
    "Mikroservis mimarisi",
    "Full Stack Developer",

    "Java Developer",
    "Spring Boot Developer",
    "Microservices Architecture",
    "Software Engineer",
    "React Developer",
  ],

  authors: [{ name: "Semih Şahinoğlu" }],

  creator: "Semih Şahinoğlu",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`antialiased ${inter.className}`}>
        <Navbar />
        <main className="py-10">
          <BackgroundGradient />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
