import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  ListMusic,
  MonitorPlay,
  BookMarked,
  LibraryBig,
  UserRound,
  Menu,
  X,
  Printer,
  House,
  ChevronLeft,
  Info,
  CircleCheck,
  FileDown,
  Settings2,
} from "lucide-react";
import VtcLogo from "./components/VtcLogo";
import PrintBook from "./components/PrintBook";
import {
  CoverView,
  TocView,
  ChapterView,
  VideosView,
  GlossaryView,
  RefsView,
  AuthorView,
} from "./components/views";
import { BOOK_META, CHAPTERS } from "./data/book";

type View =
  | { k: "cover" }
  | { k: "toc" }
  | { k: "ch"; i: number }
  | { k: "videos" }
  | { k: "glossary" }
  | { k: "refs" }
  | { k: "author" };

const viewKey = (v: View) => (v.k === "ch" ? `ch-${v.i}` : v.k);

const loadCompletedChapters = (): boolean[] => {
  const emptyProgress = Array(CHAPTERS.length).fill(false) as boolean[];
  try {
    const stored = localStorage.getItem("vtc-book-done");
    if (!stored) return emptyProgress;

    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return emptyProgress;

    return Array.from({ length: CHAPTERS.length }, (_, index) => parsed[index] === true);
  } catch {
    return emptyProgress;
  }
};

export default function App() {
  const [view, setView] = useState<View>({ k: "cover" });
  const [sideOpen, setSideOpen] = useState(false);
  const [printOpen, setPrintOpen] = useState(false);
  const [done, setDone] = useState<boolean[]>(loadCompletedChapters);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem("vtc-book-done", JSON.stringify(done));
    } catch {
      // Keep the app usable if browser storage is disabled or unavailable.
    }
  }, [done]);

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    setSideOpen(false);
  }, [view]);

  const progress = useMemo(
    () => Math.round((done.filter(Boolean).length / CHAPTERS.length) * 100),
    [done]
  );

  const go = (v: View) => setView(v);

  const navBtn =
    "flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[13.5px] font-bold transition-all";

  const isActive = (k: string) => viewKey(view) === k;

  const sidebar = (
    <div className="flex h-full flex-col">
      <div className="border-b border-white/10 p-4">
        <VtcLogo variant="bar" />
        <div className="mt-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
          <div className="flex items-center justify-between text-[11.5px] font-bold text-slate-300">
            <span>تقدمك في الدورة</span>
            <span className="font-head text-amber-300">{progress}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-l from-[#e30613] via-amber-500 to-amber-300 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-1.5 text-[10.5px] text-slate-400">
            {done.filter(Boolean).length} من {CHAPTERS.length} فصول مكتملة
          </div>
        </div>
      </div>

      <nav className="nice-scroll flex-1 space-y-1 overflow-y-auto p-3">
        <button onClick={() => go({ k: "cover" })} className={`${navBtn} ${isActive("cover") ? "bg-gradient-to-l from-[#e30613] to-[#b0050f] text-white shadow" : "text-slate-300 hover:bg-white/5"}`}>
          <House size={17} /> الغلاف والبداية
        </button>
        <button onClick={() => go({ k: "toc" })} className={`${navBtn} ${isActive("toc") ? "bg-gradient-to-l from-[#e30613] to-[#b0050f] text-white shadow" : "text-slate-300 hover:bg-white/5"}`}>
          <ListMusic size={17} /> فهرس المحتويات
        </button>

        <div className="px-2 pb-1 pt-3 text-[11px] font-black tracking-wide text-amber-400/80">
          فصول الكتاب العشرة
        </div>
        {CHAPTERS.map((ch, i) => (
          <button
            key={ch.id}
            onClick={() => go({ k: "ch", i })}
            className={`${navBtn} ${isActive(`ch-${i}`) ? "bg-white/10 text-white ring-1 ring-amber-400/40" : "text-slate-300 hover:bg-white/5"}`}
          >
            <span className={`font-head flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-black ${isActive(`ch-${i}`) ? "bg-gradient-to-br from-amber-400 to-amber-600 text-[#3a2c00]" : "bg-white/10 text-amber-300"}`}>
              {ch.num}
            </span>
            <span className="min-w-0 flex-1 truncate text-right">{ch.title}</span>
            {done[i] && <CircleCheck size={15} className="shrink-0 text-emerald-400" />}
          </button>
        ))}

        <div className="px-2 pb-1 pt-3 text-[11px] font-black tracking-wide text-amber-400/80">
          المكتبات والملاحق
        </div>
        {[
          { k: "videos", t: "مكتبة الفيديوهات", icon: MonitorPlay },
          { k: "glossary", t: "قاموس المصطلحات", icon: BookMarked },
          { k: "refs", t: "المراجع والمصادر", icon: LibraryBig },
          { k: "author", t: "عن المؤلف", icon: UserRound },
        ].map((it) => (
          <button
            key={it.k}
            onClick={() => go({ k: it.k } as View)}
            className={`${navBtn} ${isActive(it.k) ? "bg-gradient-to-l from-amber-500 to-amber-600 text-[#3a2c00] shadow" : "text-slate-300 hover:bg-white/5"}`}
          >
            <it.icon size={17} /> {it.t}
          </button>
        ))}
      </nav>

      <div className="border-t border-white/10 p-3">
        <button
          onClick={() => setPrintOpen(true)}
          className="font-head flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 to-amber-400 px-4 py-3 text-[13.5px] font-black text-[#3a2c00] shadow-lg transition-transform hover:scale-[1.02]"
        >
          <FileDown size={18} />
          تحميل الكتاب PDF
        </button>
        <p className="mt-2 text-center text-[10.5px] leading-relaxed text-slate-500">
          {BOOK_META.author} — {BOOK_META.org}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* ===== الشاشة ===== */}
      <div className="screen-only flex h-screen flex-col overflow-hidden bg-[#0b0f1a]" dir="rtl">
        {/* خلفية محيطية */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-700/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />
          <div className="islamic-pattern absolute inset-0 opacity-[0.35]" />
        </div>

        {/* الشريط العلوي */}
        <header className="relative z-20 border-b border-white/10 bg-[#0d1526]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5">
            <button
              onClick={() => setSideOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-200 ring-1 ring-white/10 transition hover:bg-white/10 lg:hidden"
              aria-label="القائمة"
            >
              <Menu size={20} />
            </button>
            <div className="hidden sm:block">
              <VtcLogo variant="bar" />
            </div>
            <div className="min-w-0 flex-1 text-center sm:text-right">
              <h1 className="font-head truncate text-[14px] font-black text-white md:text-[16px]">
                {BOOK_META.title}
              </h1>
              <p className="truncate text-[11px] font-medium text-slate-400">
                {BOOK_META.author} — {BOOK_META.org}
              </p>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-[12px] font-bold text-slate-300 ring-1 ring-white/10">
                <BookOpen size={15} className="text-amber-400" />
                {progress}% مكتمل
              </div>
            </div>
            <button
              onClick={() => setPrintOpen(true)}
              className="font-head flex items-center gap-2 rounded-xl bg-gradient-to-l from-[#e30613] to-[#b0050f] px-4 py-2.5 text-[13px] font-black text-white shadow-lg shadow-red-950/50 transition-transform hover:scale-105"
            >
              <Printer size={16} />
              <span className="hidden sm:inline">تحميل PDF</span>
            </button>
          </div>
          <div className="h-1 bg-white/5">
            <div
              className="h-full bg-gradient-to-l from-[#e30613] via-amber-500 to-amber-300 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </header>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 gap-5 overflow-hidden p-3 md:p-5">
          {/* الشريط الجانبي - سطح المكتب */}
          <aside className="hidden w-72 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1526]/90 shadow-xl backdrop-blur lg:block">
            {sidebar}
          </aside>

          {/* المحتوى */}
          <main ref={mainRef} className="nice-scroll flex-1 overflow-y-auto pb-10">
            <div className="mx-auto max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div key={viewKey(view)}>
                  {view.k === "cover" && (
                    <CoverView onStart={() => go({ k: "toc" })} onPrint={() => setPrintOpen(true)} />
                  )}
                  {view.k === "toc" && (
                    <TocView onOpen={(i) => go({ k: "ch", i })} done={done} />
                  )}
                  {view.k === "ch" && (
                    <ChapterView
                      ch={CHAPTERS[view.i]}
                      index={view.i}
                      isDone={done[view.i]}
                      onDone={() =>
                        setDone((d) => d.map((v, i) => (i === view.i ? true : v)))
                      }
                      onPrev={
                        view.i === 0
                          ? () => go({ k: "toc" })
                          : () => go({ k: "ch", i: view.i - 1 })
                      }
                      onNext={
                        view.i === CHAPTERS.length - 1
                          ? () => go({ k: "videos" })
                          : () => go({ k: "ch", i: view.i + 1 })
                      }
                    />
                  )}
                  {view.k === "videos" && <VideosView />}
                  {view.k === "glossary" && <GlossaryView />}
                  {view.k === "refs" && <RefsView />}
                  {view.k === "author" && <AuthorView onPrint={() => setPrintOpen(true)} />}
                </motion.div>
              </AnimatePresence>

              {/* تنقل سفلي سريع */}
              {view.k === "ch" && (
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d1526]/90 px-4 py-3 backdrop-blur">
                  <span className="text-[12px] font-bold text-slate-400">
                    الفصل {view.i + 1} من {CHAPTERS.length}
                  </span>
                  <div className="flex gap-1.5">
                    {CHAPTERS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => go({ k: "ch", i })}
                        aria-label={`الفصل ${i + 1}`}
                        className={`h-2.5 rounded-full transition-all ${i === view.i ? "w-8 bg-amber-400" : done[i] ? "w-2.5 bg-emerald-500" : "w-2.5 bg-white/15 hover:bg-white/30"}`}
                      />
                    ))}
                  </div>
                  <ChevronLeft size={16} className="text-slate-600" />
                </div>
              )}
            </div>
          </main>
        </div>

        {/* درج الجوال */}
        <AnimatePresence>
          {sideOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSideOpen(false)}
                className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
              />
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.25 }}
                className="fixed bottom-0 right-0 top-0 z-40 w-80 max-w-[85vw] overflow-hidden border-l border-white/10 bg-[#0d1526] shadow-2xl lg:hidden"
              >
                <button
                  onClick={() => setSideOpen(false)}
                  className="absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white"
                  aria-label="إغلاق"
                >
                  <X size={18} />
                </button>
                {sidebar}
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* نافذة التحميل PDF */}
        <AnimatePresence>
          {printOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setPrintOpen(false)}
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              />
              <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                className="pointer-events-auto w-[92vw] max-w-md overflow-hidden rounded-3xl border border-white/15 bg-[#111a2e] shadow-2xl"
              >
                <div className="bg-gradient-to-l from-[#e30613] to-[#7a040c] px-6 py-5 text-center">
                  <FileDown size={36} className="mx-auto text-white" />
                  <h3 className="font-head mt-2 text-xl font-black text-white">
                    تحميل الكتاب بصيغة PDF
                  </h3>
                  <p className="mt-1 text-[12.5px] text-red-100">
                    النسخة الكاملة: الغلاف + 10 فصول + الملاحق
                  </p>
                </div>
                <div className="space-y-2.5 px-6 py-5">
                  <div className="flex items-start gap-2.5 rounded-xl bg-white/5 p-3 text-[13px] leading-relaxed text-slate-300 ring-1 ring-white/10">
                    <Info size={16} className="mt-0.5 shrink-0 text-amber-400" />
                    ستُفتح نافذة الطباعة — اختر من خانة «الوجهة»: <strong className="text-white">حفظ كملف PDF</strong>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl bg-white/5 p-3 text-[13px] leading-relaxed text-slate-300 ring-1 ring-white/10">
                    <Settings2 size={16} className="mt-0.5 shrink-0 text-amber-400" />
                    فعّل خيار <strong className="text-white">«الرسومات الخلفية»</strong> لتظهر الألوان والصور بأفضل جودة
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => setPrintOpen(false)}
                      className="font-head rounded-xl border border-white/15 px-4 py-3 text-[13.5px] font-extrabold text-slate-300 transition hover:bg-white/5"
                    >
                      إلغاء
                    </button>
                    <button
                      onClick={() => {
                        setPrintOpen(false);
                        setTimeout(() => window.print(), 250);
                      }}
                      className="font-head flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 to-amber-400 px-4 py-3 text-[13.5px] font-black text-[#3a2c00] transition-transform hover:scale-[1.02]"
                    >
                      <Printer size={16} />
                      فتح نافذة الحفظ
                    </button>
                  </div>
                </div>
              </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ===== نسخة الطباعة ===== */}
      <PrintBook />
    </>
  );
}
