// Type definitions for Telegram WebApp (minimal)
interface TelegramWebApp {
  initData: string;
}

interface Window {
  Telegram?: {
    WebApp: TelegramWebApp;
  };
}
