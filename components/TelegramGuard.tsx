import React from "react";

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
  const [allowed, setAllowed] = React.useState(false);

  React.useEffect(() => {
    setAllowed(isTelegramWebApp());
  }, []);

  if (!allowed) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background transition-colors">
        <div className="p-8 rounded-xl shadow-lg border border-border bg-white dark:bg-zinc-900 dark:border-zinc-800 text-center max-w-sm w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="mx-auto mb-4 h-12 w-12 text-blue-500 dark:text-blue-400"
            fill="none"
          >
            <circle
              cx="24"
              cy="24"
              r="24"
              fill="currentColor"
              fillOpacity="0.1"
            />
            <path
              d="M12 24l24-8-6 24-6-8-8-2z"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
              fillOpacity="0.3"
            />
          </svg>
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
