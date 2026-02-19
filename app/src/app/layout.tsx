import type { Metadata } from "next";
import "./globals.css";
// import { FloatingNav } from "@/components/ui/floating-navbar";
import { NavbarDemo } from "@/components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"], // Specify subsets
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Define weights
  display: "swap", // Optimize font rendering
  variable: "--font-poppins", // Define a CSS variable for the font
});
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Vineet Prashant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className={`antialiased dark scroll-smooth`}>
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}
