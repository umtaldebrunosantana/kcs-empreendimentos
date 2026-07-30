import { useEffect, useRef, useState, type ReactNode } from "react";

export const WHATSAPP_URL = "https://wa.me/5531983145672".replace(
  "5531983145672",
  "5531981083235",
);

export function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.11 4.52.71.3 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.17 6.43 2.17 11.87c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4a9.85 9.85 0 0 0 4.7 1.2h.01c5.44 0 9.87-4.43 9.87-9.87 0-2.64-1.03-5.12-2.9-6.99A9.8 9.8 0 0 0 12.04 2zm0 17.98a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.16 8.16 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.8 2.41a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.25-8.15 8.25z" />
    </svg>
  );
}

export function CtaButton({
  children,
  size = "md",
  className = "",
}: {
  children: ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  const pad = size === "lg" ? "px-9 py-5 text-lg" : "px-7 py-4 text-base";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-md bg-signal font-semibold tracking-wide text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110 ${pad} ${className}`}
    >
      <WhatsAppIcon className={size === "lg" ? "size-6" : "size-5"} />
      {children}
    </a>
  );
}

export function Counter({ to = 1000 }: { to?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(to);
      return;
    }
    const duration = 1800;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return (
    <span ref={ref} className="tnum">
      +{value.toLocaleString("pt-BR")}
    </span>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a KCS no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-signal text-white shadow-lg transition-transform duration-200 hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const main = tone === "light" ? "text-white" : "text-navy-900";
  const sub = tone === "light" ? "text-white/60" : "text-steel-500";
  return (
    <span className="flex items-center gap-3">
      <span
        className={`font-display text-2xl font-bold tracking-tight ${main} border-l-4 border-signal pl-3 leading-none`}
      >
        KCS
      </span>
      <span className={`hidden text-[11px] uppercase leading-tight tracking-[0.18em] sm:block ${sub}`}>
        Serralheria e
        <br />
        Estruturas Metálicas
      </span>
    </span>
  );
}
