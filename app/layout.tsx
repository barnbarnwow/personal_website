import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto_flex = Roboto_Flex({
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
      <body className={`${roboto_flex.className} antialiased`}>{children}</body>
    </html>
  );
}
