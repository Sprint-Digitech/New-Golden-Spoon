import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { useTheme } from "next-themes";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onMenuClick: () => void;
  onOrderClick: () => void;
  onBookClick: () => void;
}

export function Hero({ onMenuClick, onOrderClick, onBookClick }: HeroProps) {
  const { theme, resolvedTheme } = useTheme();
  const activeTheme = resolvedTheme || theme;
  const isDark = activeTheme === "dark";

  return (
    <section
      id="home"
      className="relative min-h-[760px] overflow-hidden border-b border-primary/20"
    >
      <div className="absolute inset-0">
        <ImageWithFallback
          src={isDark ? "/hero-bg.png" : "/fine_dining_hero_bg.png"}
          alt="Golden Spoon hero"
          className={`h-full w-full object-cover ${
            isDark ? "brightness-[0.72] contrast-110" : "brightness-110 saturate-[0.7]"
          }`}
        />
      </div>

      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-r from-black via-black/85 to-black/10"
            : "bg-gradient-to-r from-[#f9f6ef] via-[#f9f6ef]/90 to-[#f9f6ef]/10"
        }`}
      />

      <div className="relative z-10 mx-auto grid min-h-[760px] w-full max-w-7xl grid-cols-1 px-6 pb-12 pt-28 lg:grid-cols-[1fr_1fr] lg:px-10 lg:pt-24">
        <div className="relative">
          <div className="absolute -left-10 top-[45%] hidden -translate-y-1/2 flex-col gap-4 lg:flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`h-[10px] w-[10px] rounded-full border ${
                  i === 0 ? "border-primary bg-primary" : "border-foreground/50"
                }`}
              />
            ))}
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
            Welcome To
          </p>

          <h1 className="font-['Playfair_Display'] text-[84px] font-bold uppercase leading-[0.9] sm:text-[110px] md:text-[122px]">
            <span className="text-primary">Golden</span>
            <br />
            <span className={isDark ? "text-white" : "text-[#1f1f23]"}>Spoon</span>
          </h1>

          <div className="mt-4 flex w-[300px] items-center gap-2">
            <span className="h-[2px] w-full bg-primary" />
            <span className="h-[7px] w-[7px] rotate-45 bg-primary" />
            <span className="h-[7px] w-[7px] rotate-45 bg-primary" />
          </div>

          <p className="mt-6 max-w-[540px] font-['Playfair_Display'] text-[36px] italic leading-[1.25] text-foreground sm:text-[45px]">
            An unforgettable journey of exquisite taste and absolute luxury
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={onOrderClick}
              className="lux-glow flex h-[56px] items-center gap-2 rounded-[10px] border border-primary bg-primary px-8 text-[30px] font-medium text-black transition hover:bg-primary/90"
            >
              Order Now <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={onBookClick}
              className={`flex h-[56px] items-center gap-2 rounded-[10px] border px-8 text-[35px] transition ${
                isDark
                  ? "border-primary/70 text-white hover:bg-primary hover:text-black"
                  : "border-black/30 text-[#222222] hover:bg-primary hover:text-black"
              }`}
            >
              <Calendar className="h-5 w-5" />
              Book A Table
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute right-0 top-[44%] flex -translate-y-1/2 flex-col gap-4">
            <button className="grid h-14 w-14 place-items-center rounded-full border border-primary text-primary">
              <ArrowRight className="h-6 w-6" />
            </button>
            <button
              className={`grid h-14 w-14 place-items-center rounded-full border ${
                isDark ? "border-white/35 text-white" : "border-black/30 text-black"
              }`}
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          </div>
        </div>

        <button
          onClick={onMenuClick}
          className="lux-float absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm tracking-wide text-foreground/80"
        >
          <div className="mx-auto mb-1 h-8 w-5 rounded-full border border-foreground/50 p-[3px]">
            <div className="h-2 w-2 rounded-full bg-foreground/70" />
          </div>
          Scroll Down
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg
          className="block h-[68px] w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 84 Q 720 10 1440 84"
            fill="none"
            stroke="#D4A017"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
}
