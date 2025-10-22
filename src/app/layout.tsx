import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/conponents/shared/Navbar";



const roboto = Roboto_Condensed({
  subsets: ["cyrillic"],
  variable: "--font-condensed",
})


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
        className={`${roboto.variable} font-sans antialiased`}
      >
        
        <Navbar />
        {children}
      </body>
    </html>
  );
}
