import type { Metadata } from "next";
import { Italiana } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import { LangProvider } from "@/utils/LangContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Vincent Portfolio",
  description: "A portfolio of web development projects of Vincent Botoku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${italiana.variable} bg-purpleN-800 antialiased text-white`}
      >
        <LangProvider>
          <Header />
          <Analytics />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
