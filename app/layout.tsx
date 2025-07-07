"use client";

import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isTelegramAvailable, setIsTelegramAvailable] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    const tg =
      typeof window !== "undefined" && (window as any).Telegram?.WebApp;
    const allowFallback = process.env.NEXT_PUBLIC_ALLOW_NON_TELEGRAM === "true";

    setIsTelegramAvailable(!!tg || allowFallback);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isTelegramAvailable ? (
          <ThemeProvider attribute="class" defaultTheme="system">
            <ReactQueryProvider>
              <Navbar />
              {children}
            </ReactQueryProvider>
          </ThemeProvider>
        ) : (
          <div className="text-center mt-10 text-red-600 font-semibold">
            Bul bet tek ǵana telegram ishinde isleydi.
          </div>
        )}
      </body>
    </html>
  );
}
