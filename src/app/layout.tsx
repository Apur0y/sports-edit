import type { Metadata } from "next";
import { Oswald, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/conponents/shared/Navbar";



const roboto = Roboto_Condensed({
  subsets: ["cyrillic"],
  variable: "--font-condensed",
})

const oswald =Oswald({
  subsets: ["cyrillic"],
  variable: "--font-condensed",
})


export const metadata: Metadata = {
  title: "Play Picker",
  description: "This is the best sports editing site",
    icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} font-sans antialiased bg-white text-black`}
      >
        
        <Navbar />
        {children}
      </body>
    </html>
  );
}
