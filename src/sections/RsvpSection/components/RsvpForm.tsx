import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/i18n";
import { DrawingPad } from "@/sections/RsvpSection/components/DrawingPad";
import { AttendanceOptions } from "@/sections/RsvpSection/components/AttendanceOptions";

const fieldClass =
  "w-full rounded-md border border-[#3b3c40]/10 bg-[#e8e8e9] px-4 py-3 text-sm text-[#3b3c40] placeholder:text-[#3b3c40]/40 outline-none focus:border-[#3b3c40]/40";
const labelClass = "mb-2 block text-sm text-[#3b3c40]";

export const RsvpForm = () => {
  const { t } = useLanguage();
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [sent, setSent] = useState(false);

  const [messageType, setMessageType] = useState<"written" | "drawn">("written");
  const [drawing, setDrawing] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: Record<string, string> = Object.fromEntries(
      Array.from(new FormData(event.currentTarget).entries()).map(([k, v]) => [k, String(v)]),
    );
    if (messageType === "drawn" && drawing) data.drawing = drawing;
    setSending(true);
    setError(false);
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="font-span rounded-xl bg-[#f4f4f4] px-6 py-12 text-center text-[#3b3c40] shadow-sm">
        <p className="text-xl">{t("rsvp.thanks")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="font-span rounded-xl bg-[#f4f4f4] px-6 py-8 shadow-sm">
      <div className="mb-5">
        <label htmlFor="rsvp-name" className={labelClass}>
          {t("rsvp.name")}
        </label>
        <input
          id="rsvp-name"
          name="name"
          type="text"
          required
          maxLength={100}
          placeholder={t("rsvp.namePh")}
          className={fieldClass}
        />
      </div>

      <AttendanceOptions value={attending} onChange={setAttending} />

      {attending === "yes" && (
        <div className="mb-6 text-center">
          <p className="mb-3 font-classic_script_mn text-2xl leading-8 text-[#3b3c40]">
            ( {t("rsvp.plusOne")} )
          </p>
          <input
            id="rsvp-plusone-name"
            name="plusOneName"
            type="text"
            maxLength={100}
            aria-label={t("rsvp.plusOneName")}
            placeholder={t("rsvp.plusOneNamePh")}
            className={`${fieldClass} text-center`}
          />
        </div>
      )}

      <div className="mb-6">
        <span className={labelClass}>{t("rsvp.message")}</span>
        <div className="mb-3 flex gap-3">
          {(["written", "drawn"] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setMessageType(type)}
              aria-pressed={messageType === type}
              className={`flex-1 rounded-md border py-2 text-xs ${
                messageType === type
                  ? "border-[#3b3c40] bg-[#3b3c40] text-white"
                  : "border-[#3b3c40]/20 bg-transparent text-[#3b3c40]"
              }`}
            >
              {t(type === "written" ? "rsvp.written" : "rsvp.drawn")}
            </button>
          ))}
        </div>
        {messageType === "written" ? (
          <textarea
            id="rsvp-message"
            name="message"
            rows={4}
            maxLength={500}
            placeholder={t("rsvp.messagePh")}
            className={fieldClass}
          ></textarea>
        ) : (
          <DrawingPad onChange={setDrawing} />
        )}
      </div>

      {error && <p className="mb-4 text-center text-sm text-red-700">{t("rsvp.error")}</p>}

      <button
        type="submit"
        disabled={sending}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-[#3b3c40] px-4 py-3 text-sm text-white disabled:opacity-60"
      >
        <Send size={16} />
        {sending ? t("rsvp.sending") : t("rsvp.send")}
      </button>
    </form>
  );
};
