import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

// Add new keys here and use them with t("key") in any component.
const translations = {
  en: {
    "hero.weAreGettingMarried": "You are invited to our outing",
    "hero.joinUs": "Join us for a night out",
    "hero.rsvp": "Confirm your attendance",
    "overlay.tapToOpen": "Tap to open",
    "lang.switchTo": "Switch language",
    "count.days": "Days",
    "count.hours": "Hours",
    "count.minutes": "Minutes",
    "count.seconds": "Seconds",
    "count.title": "Countdown",
    "count.subtitle": "To our special day out",
    "day.title": "Day details",
    "day.subtitle": "Everything you need to know",
    "loc.title": "Location",
    "loc.maps": "Open in Maps",
    "loc.calendar": "Add to calendar",
    "acc.title": "Accommodation",
    "acc.subtitle": "Where to stay",
    "acc.optA": "Option A",
    "acc.optB": "Option B",
    "acc.locA": " Port Andratx · coast, seaside atmosphere",
    "acc.locB": " Inland Mallorca · 10 min from the outing",
    "acc.aPre": "Type: ",
    "acc.aBold": "Aparthotel",
    "acc.aSuf": " (usually cheaper). There are apartments for 2 and for 4 people.",
    "acc.bPre": "Prettier and ",
    "acc.bBold": "with a pool",
    "tr.title": "Transport",
    "tr.subtitle": "How to get there",
    "tr.before": "We will provide a",
    "tr.bus": "round-trip bus",
    "tr.after": "so you don't have to worry about transportation.",
    "gift.title": "Gifts",
    "gift.subtitle": "A gift with love",
    "gift.desc": "Your presence is our greatest gift. For those who wish to give us a gift, you can do so in the following ways:",
    "gift.envelope": "Envelope",
    "gift.preferred": "preferred",
    "gift.bank": "Bank transfer",
    "credit.madeBy": "Made with love by",
    "rsvp.subtitle": "We hope to have you with us",
    "rsvp.attend": "Will you attend? *",
    "rsvp.yes": "Yes, I will attend",
    "rsvp.no": "No, I can't attend",
    "rsvp.name": "Full name *",
    "names.and": "&",
    "rsvp.namePh": "Your name",
    "rsvp.plusOne": "Plus ones are more than welcome",
    "rsvp.plusOneName": "Plus one's name (optional)",
    "rsvp.plusOneNamePh": "Plus one's name (optional)",
    "rsvp.message": "Message for us (optional)",
    "rsvp.messagePh": "Write a few words...",
    "rsvp.send": "Send confirmation",
    "rsvp.thanks": "Thank you! We have received your confirmation.",
    "rsvp.sending": "Sending...",
    "rsvp.error": "Something went wrong. Please try again.",
    "rsvp.written": "Written message",
    "rsvp.drawn": "Handwritten message",
    "rsvp.undo": "Undo",
    "rsvp.clear": "Clear",
    "rsvp.penColor": "Pen color",
    "names.first": "Youssef",
    "names.second": "Mariam",
    "hero.date": "Thursday, November 26, 2026",
    "loc.hours": "Thursday, 7:00 PM",
    "venue.name": "Vintage Bar",
    "venue.address": "Renaissance Hotel, New Cairo",
  },
  ar: {
    "hero.weAreGettingMarried": "أنتم مدعوون إلى خروجتنا",
    "hero.joinUs": "انضموا إلينا في سهرة مميزة",
    "hero.rsvp": "أكد حضورك",
    "overlay.tapToOpen": "اضغط للفتح",
    "lang.switchTo": "تغيير اللغة",
    "count.days": "أيام",
    "count.hours": "ساعات",
    "count.minutes": "دقائق",
    "count.seconds": "ثوانٍ",
    "count.title": "العد التنازلي",
    "count.subtitle": "إلى يوم خروجتنا المميز",
    "day.title": "تفاصيل اليوم",
    "day.subtitle": "كل ما تحتاج إلى معرفته",
    "loc.title": "الموقع",
    "loc.maps": "افتح في الخرائط",
    "loc.calendar": "أضف إلى التقويم",
    "acc.title": "الإقامة",
    "acc.subtitle": "أين تقيمون",
    "acc.optA": "الخيار أ",
    "acc.optB": "الخيار ب",
    "acc.locA": " بورت أندراتش · ساحلية بأجواء بحرية",
    "acc.locB": " داخل مايوركا · على بعد 10 دقائق من الخروجة",
    "acc.aPre": "النوع: ",
    "acc.aBold": "شقق فندقية",
    "acc.aSuf": " (عادةً أوفر). تتوفر شقق لشخصين وأربعة أشخاص.",
    "acc.bPre": "أجمل و",
    "acc.bBold": "مع مسبح",
    "tr.title": "المواصلات",
    "tr.subtitle": "كيف تصلون",
    "tr.before": "سنوفر",
    "tr.bus": "حافلة ذهاب وإياب",
    "tr.after": "حتى لا تقلقوا بشأن المواصلات.",
    "gift.title": "الهدايا",
    "gift.subtitle": "هدية بكل محبة",
    "gift.desc": "حضوركم هو أعظم هدية لنا. ولمن يرغب في تقديم هدية، يمكنه ذلك بالطرق التالية:",
    "gift.envelope": "ظرف",
    "gift.preferred": "مفضّل",
    "gift.bank": "تحويل بنكي",
    "credit.madeBy": "صُنع بحب بواسطة",
    "rsvp.subtitle": "نأمل أن تكونوا معنا",
    "rsvp.attend": "هل ستحضر؟ *",
    "rsvp.yes": "نعم، سأحضر",
    "rsvp.no": "لا، لن أستطيع الحضور",
    "rsvp.name": "الاسم الكامل *",
    "names.and": "و",
    "rsvp.namePh": "اسمك",
    "rsvp.plusOne": "يسعدنا حضور مرافق معك",
    "rsvp.plusOneName": "اسم المرافق (اختياري)",
    "rsvp.plusOneNamePh": "اسم المرافق (اختياري)",
    "rsvp.message": "رسالة لنا (اختياري)",
    "rsvp.messagePh": "اكتب بضع كلمات...",
    "rsvp.send": "إرسال التأكيد",
    "rsvp.thanks": "شكرًا لكم! لقد استلمنا تأكيدكم.",
    "rsvp.sending": "جارٍ الإرسال...",
    "rsvp.error": "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    "rsvp.written": "رسالة مكتوبة",
    "rsvp.drawn": "رسالة بخط اليد",
    "rsvp.undo": "تراجع",
    "rsvp.clear": "مسح",
    "rsvp.penColor": "لون القلم",
    "names.first": "يوسف",
    "names.second": "مريم",
    "hero.date": "الخميس، ٢٦ نوفمبر ٢٠٢٦",
    "loc.hours": "الخميس، ٧:٠٠ م",
    "venue.name": "فينتج بار",
    "venue.address": "فندق رينيسانس، القاهرة الجديدة",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const readStoredLang = (): Lang => {
  try {
    // Language switcher is hidden, so always start in English.
    return "en";
  } catch {
    return "en";
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      // ignore storage errors
    }
  };

  const t = (key: TranslationKey) => translations[lang][key];

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
