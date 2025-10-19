import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/conponents/shared/Navbar";


// Load Raleway font
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"], // optional weights
});

export const metadata: Metadata = {
  title: "Sports Edit",
  description: "This is the best sports editing site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} font-sans antialiased bg-green-950/20`}
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
