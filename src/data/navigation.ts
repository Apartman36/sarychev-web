import type { Locale } from "../utils/site";
import { localePath } from "../utils/site";
import { t } from "../i18n/ui";

export function getNavigation(locale: Locale) {
  return [
    { label: t(locale, "work"), href: localePath(locale, "/work/") },
    { label: t(locale, "now"), href: localePath(locale, "/now/") },
    { label: t(locale, "uses"), href: localePath(locale, "/uses/") },
    { label: t(locale, "whoami"), href: localePath(locale, "/whoami/") },
  ];
}
