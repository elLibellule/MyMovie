import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

export const availableLanguages = ["en", "fr"];
export const defaultLanguage = "fr";

export const getPreferredLocale = (request: NextRequest) => {
  const headers = {
    "accept-language": request.headers.get("accept-language")?.toString(),
  };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, availableLanguages, defaultLanguage);
};

export const getLocaleUrlToRedirect = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = availableLanguages.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getPreferredLocale(request);

    return new URL(`/${locale}/${pathname}`, request.url);
  }
};
