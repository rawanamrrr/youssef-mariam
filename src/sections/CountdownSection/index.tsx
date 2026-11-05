import monogram from "@/assets/monogram-my.png";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n";
import { CountdownGrid } from "@/sections/CountdownSection/components/CountdownGrid";

export const CountdownSection = () => {
  const { t } = useLanguage();
  return (
    <>
    <section className="bg-[#5c5d63] box-border caret-transparent outline-[3px] overflow-hidden px-6 py-10 md:px-12 md:py-20">
      <div className="box-border caret-transparent max-w-4xl outline-[3px] text-center mx-auto px-4">
        <Reveal variant="scale">
          <img
            src={monogram}
            alt="M & Y"
            className="animate-soft-glow box-border caret-transparent max-w-full outline-[3px] w-32 mb-4 mx-auto md:w-40"
          />
        </Reveal>
        <Reveal>
          <h2 className="text-white text-4xl box-border caret-transparent leading-10 outline-[3px] mb-3 font-classic_script_mn md:text-6xl md:leading-[60px]">
            {t("count.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-white/75 text-sm box-border caret-transparent tracking-[1.4px] leading-5 outline-[3px] uppercase mb-8 md:mb-12">
            {t("count.subtitle")}
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <CountdownGrid />
        </Reveal>
        <p className="text-white/75 text-sm box-border caret-transparent tracking-[1.4px] leading-5 outline-[3px] uppercase mt-8">
          {t("hero.date")}
        </p>
      </div>
    </section>
    {/* Blend out: eases the dark grey into the light RSVP area below. */}
    <div
      aria-hidden="true"
      className="-mt-px h-40 md:h-60"
      style={{
        background:
          "linear-gradient(to bottom, #5c5d63 0%, #5c5d63 5%, #5d5e64 10%, #606167 15%, #64656b 20%, #6a6b71 25%, #737479 30%, #7d7e83 35%, #88898e 40%, #95969a 45%, #a2a2a6 50%, #afafb2 55%, #bcbcbe 60%, #c7c7c9 65%, #d1d1d3 70%, #dadadb 75%, #e0e0e1 80%, #e4e4e5 85%, #e7e7e8 90%, #e8e8e9 95%, #e8e8e9 100%)",
      }}
    ></div>
    </>
  );
};
