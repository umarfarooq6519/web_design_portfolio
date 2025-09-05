import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactSection from "./pages/Contact";

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
      <body className={`h-full min-h-screen p-4 antialiased`}>
        <Navbar />
        {children}
        <ContactSection />
      </body>
    </html>
  );
}
