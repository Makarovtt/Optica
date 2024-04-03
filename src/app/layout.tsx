import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./fonts.css";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ЦЕНТР ОПТИЧЕСКОЙ КОРРЕКЦИИ. Продажа линз и оправ в Астрахани",
  description:
    "Центр оптической коррекции «TOPALOFF» является одной из лидирующих фирм по подбору и продаже качественных очков в Астрахани",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
