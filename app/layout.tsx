import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const space_grotesk = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Barney Jesse's Portfolio",
  description:
    "Portfolio website for Barney Jesse, showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.className} antialiased`}>
        <div className="flex flex-col">
          {/* Header component can be added here if needed */}
          <Header />
          {children}
          {/* Footer component can be added here if needed */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
