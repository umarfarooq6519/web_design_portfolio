import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactLenis } from "lenis/react";

const metadata: Metadata = {
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
        {/* general sans (font share) */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <ReactLenis root>
        <body className={`h-full min-h-screen p-4 antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
