import { ToastList } from "@/components/ToastList";
import { MainContent } from "@/sections/MainContent";
import { OpeningOverlay } from "@/components/OpeningOverlay";

export const AppChrome = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div
        role="region"
        aria-label="Notifications (F8)"
        className="box-border caret-transparent outline-[3px] pointer-events-none"
      >
        <ToastList />
      </div>
      <section
        aria-label="Notifications alt+T"
        className="box-border caret-transparent outline-[3px]"
      ></section>
      <OpeningOverlay />
      <MainContent />
    </div>
  );
};
