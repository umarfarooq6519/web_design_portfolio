import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactLenis } from "lenis/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umar Farooq - Design & Digital Products",
  description: "I create brands, design websites, & shape digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* General Sans (body) + Chillax (Display) (font share) */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@1&f[]=chillax@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <ReactLenis root>
        <body className={`h-full min-h-screen p-4 antialiased sm:p-6 lg:p-10`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
