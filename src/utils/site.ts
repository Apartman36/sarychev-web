export const siteConfig = {
  name: "Antonii Sarychev",
  siteUrl: "https://Apartman36.github.io",
  basePath: "/sarychev-web/",
  defaultLocale: "en",
  locales: ["en", "ru"] as const,
  ogImage: "/og/default.svg",
};

export type Locale = (typeof siteConfig.locales)[number];

const runtimeBase = import.meta.env.BASE_URL || siteConfig.basePath;

export function withBase(path = "/") {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${runtimeBase}${cleanPath}`.replace(/\/{2,}/g, "/");
}

export function localePath(locale: Locale, path = "/") {
  const clean = path === "/" ? "" : path.replace(/^\/|\/$/g, "");
  return withBase(`/${locale}/${clean}${clean ? "/" : ""}`);
}

export function absoluteUrl(path = "/") {
  const cleanBase = siteConfig.basePath.endsWith("/") ? siteConfig.basePath : `${siteConfig.basePath}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${siteConfig.siteUrl}${cleanBase}${cleanPath}`.replace(/([^:]\/)\/+/g, "$1");
}

export function swapLocalePath(pathname: string, locale: Locale) {
  const clean = pathname.replace(/^\/sarychev-web/, "").replace(/^\/|\/$/g, "");
  const parts = clean.split("/").filter(Boolean);
  if (parts[0] === "en" || parts[0] === "ru") {
    parts[0] = locale;
  } else {
    parts.unshift(locale);
  }
  return withBase(`/${parts.join("/")}/`);
}
