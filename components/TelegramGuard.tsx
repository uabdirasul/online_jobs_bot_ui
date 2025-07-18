import TelegramIcon from "@/public/telegram-logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const isTelegramWebApp = () => {
  if (typeof window === "undefined") return false;
  // Check for valid initData (non-empty string)
  return Boolean(
    window.Telegram &&
      window.Telegram.WebApp &&
      typeof window.Telegram.WebApp.initData === "string" &&
      window.Telegram.WebApp.initData.length > 0
  );
};

const TelegramGuard: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(isTelegramWebApp());
  }, []);

  if (!allowed) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background transition-colors">
        <div className="p-8 rounded-xl shadow-lg border border-border bg-white dark:bg-zinc-900 dark:border-zinc-800 text-center max-w-sm w-full">
          <Image
            src={TelegramIcon}
            alt="Telegram Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-foreground">
            Telegram Only
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Bul betti tek ǵana telegram ishinde kóre alasız. Kóriw ushın bottan
            paydalanıń.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_BOT_LINK || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            Open Telegram
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default TelegramGuard;
