export const siteConfig = {
  name: "Antonii Sarychev",
  siteUrl: "https://apartman36.github.io",
  basePath: "/sarychev-web/",
  defaultLocale: "en",
  locales: ["en", "ru"] as const,
  ogImages: {
    en: "/og/default-en.png",
    ru: "/og/default-ru.png",
  },
};

export type Locale = (typeof siteConfig.locales)[number];

const runtimeBase = import.meta.env.BASE_URL || siteConfig.basePath;

function normalizeBase(base: string) {
  if (!base || base === "/") return "/";
  return `/${base.replace(/^\/|\/$/g, "")}/`;
}

export function withBase(path = "/") {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${runtimeBase}${cleanPath}`.replace(/\/{2,}/g, "/");
}

export function localePath(locale: Locale, path = "/") {
  const clean = path === "/" ? "" : path.replace(/^\/|\/$/g, "");
  return withBase(`/${locale}/${clean}${clean ? "/" : ""}`);
}

export function absoluteUrl(path = "/") {
  const cleanBase = normalizeBase(runtimeBase);
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${siteConfig.siteUrl}${cleanBase}${cleanPath}`.replace(/([^:]\/)\/+/g, "$1");
}

export function swapLocalePath(pathname: string, locale: Locale) {
  const base = normalizeBase(runtimeBase);
  const cleanPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const withoutBase = base === "/" || !cleanPathname.startsWith(base)
    ? cleanPathname
    : `/${cleanPathname.slice(base.length)}`;
  const clean = withoutBase.replace(/^\/|\/$/g, "");
  const parts = clean.split("/").filter(Boolean);
  if (parts[0] === "en" || parts[0] === "ru") {
    parts[0] = locale;
  } else {
    parts.unshift(locale);
  }
  return withBase(`/${parts.join("/")}/`);
}
