import { CalendarDays, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n";

const mapsUrl = "https://maps.app.goo.gl/8RUmkTdQ522LirHK7";
// .ics file: opens in the phone's own calendar app (Apple Calendar, Samsung, etc.).
// Start time in UTC: 7:00 PM Cairo time (UTC+2) on Thursday 26 Nov 2026.
const CRLF = String.fromCharCode(13, 10);
const icsLines = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Outing//EN",
  "CALSCALE:GREGORIAN",
  "BEGIN:VEVENT",
  "UID:outing-youssef-mariam-20261126@invitation",
  "DTSTAMP:20260101T000000Z",
  "DTSTART:20261126T170000Z",
  "SUMMARY:Outing - Youssef & Mariam",
  "LOCATION:Vintage Bar - Renaissance Hotel - New Cairo",
  "BEGIN:VALARM",
  "TRIGGER:-P1D",
  "ACTION:DISPLAY",
  "DESCRIPTION:Outing tomorrow",
  "END:VALARM",
  "END:VEVENT",
  "END:VCALENDAR",
];
const calendarUrl = "data:text/calendar;charset=utf-8," + encodeURIComponent(icsLines.join(CRLF));

const buttonClass =
  "font-span flex w-full items-center justify-center gap-2 rounded-md border border-[#3b3c40]/15 bg-[#e8e8e9] px-4 py-2.5 text-sm text-[#3b3c40]";

export const LocationActions = () => {
  const { t } = useLanguage();

  return (
    <div className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3">
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        <MapPin size={16} />
        {t("loc.maps")}
      </a>
      <a href={calendarUrl} download="outing.ics" className={buttonClass}>
        <CalendarDays size={16} />
        {t("loc.calendar")}
      </a>
    </div>
  );
};
