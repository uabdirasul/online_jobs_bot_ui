"use client";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  const [isLoading, setIsLoading] = useState(true);

  const checkTelegramWebApp = () => {
    console.log("Checking Telegram WebApp...");

    if (typeof window !== "undefined") {
      const tg = (window as any).Telegram?.WebApp;

      console.log("Telegram object:", (window as any).Telegram);
      console.log("WebApp object:", tg);

      if (tg) {
        console.log("Telegram WebApp found!");
        tg.ready();

        console.log("initData:", tg.initData);
        console.log("initDataUnsafe:", tg.initDataUnsafe);

        // More lenient check - if WebApp exists, consider it valid
        const isRealTelegramWebApp = true; // Start with true for testing

        setIsTelegramAvailable(isRealTelegramWebApp);
      } else {
        console.log("Telegram WebApp not found");
        setIsTelegramAvailable(false);
      }
    } else {
      console.log("Window not available");
      setIsTelegramAvailable(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // Check immediately
    checkTelegramWebApp();

    // Also check after delays to ensure script is loaded
    const timeoutId1 = setTimeout(checkTelegramWebApp, 100);
    const timeoutId2 = setTimeout(checkTelegramWebApp, 500);
    const timeoutId3 = setTimeout(checkTelegramWebApp, 1000);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
    };
  }, []);

  if (isLoading) {
    return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <Script
            src="https://telegram.org/js/telegram-web-app.js"
            strategy="beforeInteractive"
            onLoad={() => {
              console.log("Telegram script loaded via Script component");
              setTimeout(checkTelegramWebApp, 100);
            }}
            onError={(e) => {
              console.error("Failed to load Telegram script:", e);
            }}
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="text-center mt-10">Júklenip atır...</div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
          onLoad={() => {
            console.log("Telegram script loaded");
          }}
        />
      </head>
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
            <p>Bul bet tek ǵana Telegram Web App ishinde isleydi.</p>
            <p className="text-sm mt-2">
              Debug: isTelegramAvailable = {String(isTelegramAvailable)}
            </p>
            <button
              onClick={checkTelegramWebApp}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Qaytadan tekserý
            </button>
          </div>
        )}
      </body>
    </html>
  );
}
