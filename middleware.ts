import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Check for Telegram-specific headers or user agent
  const userAgent = request.headers.get("user-agent") || "";
  const referer = request.headers.get("referer") || "";

  // This is a basic check - Telegram WebApp might have specific patterns
  const isTelegramUA =
    userAgent.includes("TelegramBot") ||
    userAgent.includes("Telegram") ||
    referer.includes("telegram");

  // If not from Telegram, redirect to a blocking page
  if (
    !isTelegramUA &&
    !request.nextUrl.pathname.startsWith("/telegram-required")
  ) {
    return NextResponse.redirect(new URL("/telegram-required", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Apply to all routes except API routes, static files, and the telegram-required page
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|telegram-required).*)"
  ]
};
