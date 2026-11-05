import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n";
import champagne from "@/assets/champagne.png";
import { LocationCard } from "@/sections/DayDetailsSection/components/LocationCard";
import { LocationActions } from "@/sections/DayDetailsSection/components/LocationActions";

// The section's background matches the hero photo's grey, so it flows on from the photo.
export const DayDetailsSection = () => {
  const { t } = useLanguage();
  return (
    <section className="flow-root bg-[#c5c5c7]">
      <div className="px-4 pb-4 md:pb-6">
        <Reveal>
          <div className="mx-auto mb-10 max-w-md text-center">
            <img src={champagne} alt="" className="mx-auto mb-10 mt-2 w-14 max-w-full md:w-16" />
            <h2 className="mb-3 font-classic_script_mn text-4xl leading-10 text-[#3b3c40] md:text-6xl md:leading-[60px]">
              {t("day.title")}
            </h2>
            <p className="font-span text-sm uppercase leading-5 tracking-[1.4px] text-[#3b3c40]/80">
              {t("day.subtitle")}
            </p>
          </div>
        </Reveal>
        <div className="mx-auto flex w-full max-w-md flex-col">
          <Reveal>
            <LocationCard />
          </Reveal>
          <Reveal delay={0.15}>
            <LocationActions />
          </Reveal>
        </div>
      </div>

      {/* Blend out: eases the light grey down into the countdown's dark grey below. */}
      <div
        aria-hidden="true"
        className="-mb-px h-40 md:h-60"
        style={{
          background:
            "linear-gradient(to bottom, #c5c5c7 0%, #c5c5c7 5%, #c4c4c6 10%, #c2c2c4 15%, #bfbfc1 20%, #bababd 25%, #b4b4b7 30%, #acadaf 35%, #a4a4a7 40%, #9a9b9e 45%, #909195 50%, #87878c 55%, #7d7e83 60%, #75757b 65%, #6d6e73 70%, #67686d 75%, #626369 80%, #5f6066 85%, #5d5e64 90%, #5c5d63 95%, #5c5d63 100%)",
        }}
      ></div>
    </section>
  );
};
