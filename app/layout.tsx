import type { Metadata } from "next";
import { Space_Grotesk, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
});

const share_tech_mono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
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
      <body className={`${share_tech_mono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
