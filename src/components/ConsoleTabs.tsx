import { useEffect, useRef } from "react";
import { consoles } from "../data/controllers";
import type { ConsoleId } from "../types";

export function ConsoleTabs({
  value,
  onChange,
}: {
  value: ConsoleId;
  onChange: (value: ConsoleId) => void;
}) {
  const tabs = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tab = tabs.current?.querySelector<HTMLElement>(`#tab-${value}`);
    if (
      tab &&
      tabs.current &&
      tabs.current.scrollWidth > tabs.current.clientWidth
    ) {
      // Scroll only the tab strip; avoid moving the page during selection.
      const strip = tabs.current;
      const left = tab.offsetLeft;
      if (left < strip.scrollLeft) strip.scrollLeft = left;
      else if (left + tab.offsetWidth > strip.scrollLeft + strip.clientWidth)
        strip.scrollLeft = left + tab.offsetWidth - strip.clientWidth;
    }
  }, [value]);
  return (
    <div
      className="console-tabs"
      role="tablist"
      aria-label="Modelo do console"
      ref={tabs}
    >
      {consoles.map((c, index) => (
        <button
          type="button"
          id={`tab-${c.id}`}
          key={c.id}
          role="tab"
          aria-selected={c.id === value}
          aria-controls="console-plans"
          tabIndex={c.id === value ? 0 : -1}
          className={c.id === value ? "active" : ""}
          onClick={() => onChange(c.id)}
          onKeyDown={(event) => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
              return;
            event.preventDefault();
            const next =
              event.key === "Home"
                ? 0
                : event.key === "End"
                  ? consoles.length - 1
                  : (index +
                      (event.key === "ArrowRight" ? 1 : -1) +
                      consoles.length) %
                    consoles.length;
            onChange(consoles[next].id);
            tabs.current
              ?.querySelector<HTMLElement>(`#tab-${consoles[next].id}`)
              ?.focus({ preventScroll: true });
          }}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
