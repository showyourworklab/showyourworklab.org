import Negotiator from "negotiator"
import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import { LOCALES } from "@/utils/constants";
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
	let headers = { "accept-language": request.headers.get("accept-language") || "en" };
	let languages = new Negotiator({ headers }).languages();
	let defaultLocale = LOCALES[0];
	return match(languages, LOCALES, defaultLocale);
}
 
export function proxy(request: NextRequest) {
	// Check if there is any supported locale in the pathname
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = LOCALES.some(locale =>
		pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);
	// If pathname has supported locale, return as is
	if (pathnameHasLocale) return;
	// If there is no locale, redirect to 
	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	// e.g. incoming request is /products
	// The new URL is now /en-US/products
	return NextResponse.redirect(request.nextUrl);
};
 