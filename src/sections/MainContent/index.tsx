import { SectionDivider } from "@/components/SectionDivider";
import { HeroSection } from "@/sections/HeroSection";
import { CountdownSection } from "@/sections/CountdownSection";
import { DayDetailsSection } from "@/sections/DayDetailsSection";
import { RsvpSection } from "@/sections/RsvpSection";
import { FooterSection } from "@/sections/FooterSection";

export const MainContent = () => {
  return (
    <main className="bg-zinc-200 box-border caret-transparent outline-[3px]">
      <HeroSection />
      <DayDetailsSection />
      <CountdownSection />
      <SectionDivider />
      <RsvpSection />
      <FooterSection />
    </main>
  );
};
