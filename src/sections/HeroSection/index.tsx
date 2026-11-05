import couplePhoto from "@/assets/rsvp-couple-photo.jpg";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n";

// Thin line - small diamond - thin line, used to frame the hero texts.
const Ornament = ({ className = "" }: { className?: string }) => (
  <div aria-hidden="true" className={`flex items-center justify-center gap-3 text-[#4a4b50]/60 ${className}`}>
    <span className="h-px w-14 md:w-24" style={{ background: "linear-gradient(to right, transparent, currentColor)" }}></span>
    <span className="block h-1.5 w-1.5 rotate-45 bg-current"></span>
    <span className="h-px w-14 md:w-24" style={{ background: "linear-gradient(to left, transparent, currentColor)" }}></span>
  </div>
);

export const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative flex h-screen h-[100svh] flex-col items-center justify-between overflow-hidden bg-[#c5c5c7] px-4 py-6 text-center text-[#4a4b50] md:py-8">
      <Reveal
        as="p"
        trigger="intro"
        variant="up"
        duration={0.5}
        delay={0}
        className="shrink-0 pt-16 font-classic_script_mn text-4xl leading-[1.2] text-[#4a4b50] [-webkit-text-stroke:0.6px_currentColor] md:pt-14 md:text-6xl [@media(max-height:720px)]:pt-4 [@media(max-height:720px)]:text-4xl"
      >
        {t("hero.joinUs")}
      </Reveal>
      <Ornament className="mt-3 shrink-0" />

      <img
        src={couplePhoto}
        alt="Youssef & Mariam"
        className="my-2 min-h-0 w-auto max-w-full flex-1 object-contain"
      />

      <div className="shrink-0 pb-10 md:pb-12 [@media(max-height:720px)]:pb-4">
        <Reveal
          as="p"
          trigger="intro"
          variant="fade"
          duration={0.6}
          delay={0.2}
          className="font-names text-5xl leading-[1.15] md:text-7xl [@media(max-height:720px)]:text-5xl"
        >
          {t("names.first")} {t("names.and")} {t("names.second")}
        </Reveal>
        <Ornament className="my-2" />
        <Reveal
          as="p"
          trigger="intro"
          variant="up"
          duration={0.5}
          delay={0.4}
          className="text-sm font-medium uppercase leading-5 tracking-[3.5px] ltr:pl-[3.5px] md:text-lg md:leading-7 md:tracking-[4.5px] [@media(max-height:720px)]:text-sm [@media(max-height:720px)]:leading-5"
        >
          {t("hero.date")}
        </Reveal>
      </div>
    </section>
  );
};
