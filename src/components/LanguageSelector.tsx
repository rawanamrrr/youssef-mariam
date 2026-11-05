import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n";
import { INTRO_FINISHED_EVENT } from "@/introEvents";

export const LanguageSelector = () => {
  const { lang, setLang, t } = useLanguage();
  // Hidden while the intro video is showing.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(true);
    window.addEventListener(INTRO_FINISHED_EVENT, show);
    return () => window.removeEventListener(INTRO_FINISHED_EVENT, show);
  }, []);

  return (
    <div
      dir="ltr"
      role="group"
      aria-label={t("lang.switchTo")}
      className={`fixed top-4 right-4 z-[60] transition-opacity duration-700 ${visible ? "opacity-100" : "pointer-events-none opacity-0"} flex overflow-hidden rounded-full bg-[#6f7075]/95 text-xs font-black text-zinc-200 shadow-lg backdrop-blur-sm`}
    >
      {(["en", "ar"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-3 py-2 tracking-widest transition-colors ${
            lang === code ? "bg-zinc-200 text-[#3b3c40]" : "bg-transparent"
          }`}
        >
          {code === "en" ? "EN" : "عربي"}
        </button>
      ))}
    </div>
  );
};
