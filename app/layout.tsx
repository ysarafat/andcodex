import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andcodex IT Solutions",
  description:
    "Andcodex IT Solutions offers software solutions, web development, digital marketing, graphic design, and more to help businesses grow digitally.",
  twitter: {
    card: "summary_large_image",
    site: "@andcodex",
    creator: "@andcodex",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andcodex.com",
    emails: "hello@andcodex.com",
    phoneNumbers: "+880 1518-689136",
    siteName: "Andcodex IT Solutions",
    images: "https://www.andcodex.com/opengraph-image.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
