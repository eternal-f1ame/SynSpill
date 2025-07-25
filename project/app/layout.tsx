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
  title: "SynSpill: Improved Industrial Spill Detection With Synthetic Data",
  description: "Beyond Zero-Shot: Industrial Spill Detection via Synthetic Data and PEFT. A research project by University of Central Florida and Siemens Energy.",
  icons: {
    icon: [
      { url: '/spill-logo.png' },
      { url: '/spill-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/spill-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/spill-logo.png',
    shortcut: '/spill-logo.png',
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
