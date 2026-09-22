import { InterfaceFrame } from "./interface-frame";

const days = Array.from({ length: 30 }, (_, i) => i + 1);
const marked: Record<number, "gold" | "safe" | "tight"> = {
  4: "safe",
  9: "gold",
  11: "tight",
  14: "gold",
  18: "safe",
  22: "gold",
  27: "tight",
};

export function CalendarMock() {
  return (
    <InterfaceFrame title="Calendar — February, illustrative data">
      <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] text-taupe">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={`${d}-${i}`}>{d}</span>
        ))}
        {days.map((d) => {
          const tone = marked[d];
          return (
            <div
              key={d}
              className="flex aspect-square items-center justify-center rounded-lg border border-espresso/10 text-[11px] text-espresso/80"
            >
              <span className="relative">
                {d}
                {tone && (
                  <span
                    className="absolute -bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full"
                    style={{
                      background:
                        tone === "gold"
                          ? "var(--color-gold)"
                          : tone === "safe"
                          ? "var(--color-sage)"
                          : "var(--color-tight)",
                    }}
                  />
                )}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-taupe">
        <Legend color="var(--color-gold)" label="Appointment" />
        <Legend color="var(--color-sage)" label="Pickup" />
        <Legend color="var(--color-tight)" label="Return" />
      </div>
    </InterfaceFrame>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="size-1.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}
