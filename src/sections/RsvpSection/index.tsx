import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n";
import { RsvpForm } from "@/sections/RsvpSection/components/RsvpForm";

export const RsvpSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#e8e8e9] py-10 md:py-16">
      <div className="mx-auto max-w-md px-4">
        <Reveal>
          <div className="mb-8 text-center">
            <h2 className="mb-3 font-classic_script_mn text-4xl leading-10 text-[#3b3c40] md:text-6xl md:leading-[60px]">
              {t("hero.rsvp")}
            </h2>
            <p className="font-span text-sm uppercase leading-5 tracking-[1.4px] text-[#3b3c40]/80">
              {t("rsvp.subtitle")}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <RsvpForm />
        </Reveal>
      </div>
    </section>
  );
};
