import type { Locale } from "../utils/site";

type Dictionary = Record<string, string>;

export const ui: Record<Locale, Dictionary> = {
  en: {
    work: "Work",
    now: "Now",
    uses: "Uses",
    whoami: "Whoami",
    contact: "Contact",
    github: "GitHub",
    resume: "Resume",
    viewWork: "View work",
    caseStudy: "Case study",
    code: "Code",
    private: "Private",
    public: "Public",
    client: "Client Work",
    academic: "Academic",
    experiment: "Experiment",
    selectedWork: "Selected work",
    allWork: "All work",
  },
  ru: {
    work: "Работы",
    now: "Сейчас",
    uses: "Стек",
    whoami: "Whoami",
    contact: "Связаться",
    github: "GitHub",
    resume: "Резюме",
    viewWork: "Работы",
    caseStudy: "Кейс",
    code: "Код",
    private: "Приватно",
    public: "Публично",
    client: "Клиентская работа",
    academic: "Учебный",
    experiment: "Эксперимент",
    selectedWork: "Избранные работы",
    allWork: "Все работы",
  },
};

export function t(locale: Locale, key: string) {
  return ui[locale][key] ?? key;
}
