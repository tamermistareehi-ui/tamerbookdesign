interface Props {
  variant?: "full" | "bar" | "print" | "white";
  className?: string;
}

/** شعار مؤسسة التدريب المهني — إعادة رسم دقيقة بالكود */
export default function VtcLogo({ variant = "full", className = "" }: Props) {
  if (variant === "bar") {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <Emblem className="h-9 w-8 shrink-0" />
        <div className="leading-tight">
          <div className="font-head text-[13px] font-extrabold text-white">
            مؤسسة التدريب المهني
          </div>
          <div className="text-[8px] font-semibold tracking-[0.18em] text-amber-300/90">
            VOCATIONAL TRAINING CORPORATION
          </div>
        </div>
        <Gold50 className="ms-1 h-8 shrink-0" />
      </div>
    );
  }

  if (variant === "print") {
    return (
      <div className={`flex items-center justify-between gap-3 ${className}`}>
        <div className="flex items-center gap-2">
          <Gold50 className="h-9" />
          <Emblem className="h-10 w-9" />
          <div className="leading-tight">
            <div className="font-head text-[15px] font-extrabold text-slate-900">
              مؤسسة التدريب المهني
            </div>
            <div className="text-[7.5px] font-bold tracking-[0.14em] text-slate-600">
              VOCATIONAL TRAINING CORPORATION
            </div>
          </div>
        </div>
        <div className="text-left leading-tight">
          <div className="font-head text-[11px] font-bold text-[#b0050f]">
            المهندس تامر مستريحي
          </div>
          <div className="text-[9px] font-medium text-slate-500">
            التصميم الرقمي وصناعة المحتوى الرقمي
          </div>
        </div>
      </div>
    );
  }

  if (variant === "white") {
    return (
      <div className={`flex items-center justify-center gap-4 ${className}`}>
        <Gold50 light className="h-14" />
        <Emblem className="h-16 w-14 drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)]" />
        <div className="leading-tight text-right">
          <div className="font-head text-2xl font-black text-white drop-shadow">
            مؤسسة التدريب المهني
          </div>
          <div className="mt-1 text-[10px] font-bold tracking-[0.22em] text-amber-200">
            VOCATIONAL TRAINING CORPORATION
          </div>
          <div className="mt-1.5 inline-block rounded-full bg-amber-400/15 px-3 py-0.5 text-[11px] font-bold text-amber-300 ring-1 ring-amber-300/40">
            50 عاماً من التدريب المهني
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <Gold50 className="h-14" />
      <Emblem className="h-16 w-14 drop-shadow-md" />
      <div className="leading-tight text-right">
        <div className="font-head text-2xl font-black text-slate-900">
          مؤسسة التدريب المهني
        </div>
        <div className="mt-1 text-[10px] font-bold tracking-[0.2em] text-slate-600">
          VOCATIONAL TRAINING CORPORATION
        </div>
      </div>
    </div>
  );
}

export function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" className={className} aria-label="شعار المؤسسة">
      <rect x="2" y="2" width="116" height="136" rx="6" fill="#E30613" />
      <ellipse cx="70" cy="30" rx="27" ry="15" fill="#ffffff" />
      <path
        d="M4 66 C 34 66 58 62 76 50 C 92 62 90 82 68 94 C 54 102 50 112 54 128 C 55 134 52 138 44 138 L 30 138 C 24 138 22 132 26 124 C 33 108 44 100 34 91 C 24 82 10 78 4 76 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function Gold50({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`flex flex-col items-center justify-center leading-none ${className}`}>
      <div
        className="font-head font-black tracking-tighter"
        style={{
          fontSize: "2.6em",
          lineHeight: 0.9,
          background: light
            ? "linear-gradient(135deg,#f7e08b 0%,#e9c767 40%,#fff3c4 55%,#c9971c 80%)"
            : "linear-gradient(135deg,#8f6b0e 0%,#c9971c 35%,#e9c767 50%,#c9971c 65%,#8f6b0e 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.25))",
        }}
      >
        50
      </div>
      <div
        className="font-head font-bold"
        style={{
          fontSize: "0.62em",
          letterSpacing: "0.32em",
          marginTop: "0.25em",
          color: light ? "#f3d97b" : "#6b5a1e",
        }}
      >
        YEARS
      </div>
    </div>
  );
}
