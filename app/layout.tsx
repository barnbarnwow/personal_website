import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const anonymous_pro = Anonymous_Pro({
  subsets: ["latin"],
  weight: "400",
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
      <body className={`${anonymous_pro.className} antialiased`}>
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
