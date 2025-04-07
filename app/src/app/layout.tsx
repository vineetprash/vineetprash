import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { FloatingNav } from "@/components/ui/floating-navbar";
import { NavbarDemo } from "@/components/Navbar";

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
  title: "Portfolio",
  description: "Vineet Prashant",
};

// const navItems = [
//   {
//     name: "About",
//     link: "#",
//   },
//   {
//     name: "Projects",
//     link: "#",
//   },
//   {
//     name: "Contact Me",
//     link: "#",
//   },
// ];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark scroll-smooth`}
      >
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}
