import type { Metadata } from "next";
import { Amiri, Public_Sans } from "next/font/google";
import "./globals.css";

// Initialize fonts first
const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amiri", // The variable to be used for the font
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-publicsans", // The variable to be used for the font
});

export const metadata: Metadata = {
  title: "Abdul Aziz Portfolio",
  description: "Designed and Developed by Abdul Aziz",
  icons: {
    icon: "@/Asset/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${amiri.variable} ${publicSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
