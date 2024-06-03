import createMiddleware from "next-intl/middleware";
import { pathnames } from "./navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ro"],
  // Used when no locale matches
  defaultLocale: "ro",
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ro|en)/:path*"],
};
