import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./ui/shared/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunny Days",
  description:
    "Sunny Days - A weather application that provides weather data fetched from OpenWeatherMap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
