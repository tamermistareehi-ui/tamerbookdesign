import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Quote,
  MonitorPlay,
  ListChecks,
  Search,
  BookMarked,
  LibraryBig,
  UserRound,
  Award,
  Printer,
  ArrowLeft,
  Sparkles,
  CircleCheck,
  PenLine,
  Layers,
} from "lucide-react";
import VtcLogo from "./VtcLogo";
import {
  Objectives,
  SectionTitle,
  TipBox,
  NoteBox,
  DataTable,
  StepsList,
  Bullets,
  VideoCard,
  ActivityBox,
  QuizCard,
  ChapterMeta,
} from "./bits";
import {
  BOOK_META,
  CHAPTERS,
  GLOSSARY,
  REFERENCES,
  AUTHOR,
  type Chapter,
} from "../data/book";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
};

/* ================= الغلاف ================= */
export function CoverView({ onStart, onPrint }: { onStart: () => void; onPrint: () => void }) {
  return (
    <motion.div {...fadeUp} className="overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
      {/* الغلاف العلوي */}
      <div className="relative overflow-hidden bg-gradient-to-bl from-[#1a0507] via-[#7a040c] to-[#0b0f1a]">
        <div className="islamic-pattern absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${BOOK_META.coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to top, black, transparent 75%)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent 75%)",
          }}
        />
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />

        <div className="relative px-6 py-10 md:px-12 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto w-fit rounded-2xl bg-white/95 px-6 py-3 shadow-xl"
          >
            <VtcLogo variant="full" className="!gap-3 [&_div]:!text-lg" />
          </motion.div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-1.5 text-[12px] font-bold text-amber-200">
              <Sparkles size={14} />
              سلسلة الحقائب التدريبية المهنية — {BOOK_META.edition}
            </div>
            <h1 className="font-head mt-5 text-4xl font-black leading-[1.25] text-white drop-shadow-lg md:text-6xl md:leading-[1.25]">
              التصميم الرقمي
              <br />
              <span className="gold-text font-ruqaa font-bold">وصناعة المحتوى الرقمي</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-red-100/90 md:text-lg">
              {BOOK_META.subtitle} — حقيبة تدريبية متكاملة تجمع بين التأصيل العلمي والتطبيق
              العملي ومشاريع سوق العمل الحقيقية
            </p>

            <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 backdrop-blur">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-600 font-head text-xl font-black text-[#3a2c00] shadow">
                ت
              </span>
              <span className="text-right">
                <span className="font-head block text-lg font-black text-white">
                  {BOOK_META.author}
                </span>
                <span className="block text-[12px] font-medium text-amber-200">
                  {BOOK_META.org} — {BOOK_META.totalHours}
                </span>
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onStart}
                className="font-head group flex items-center gap-2 rounded-2xl bg-gradient-to-l from-amber-500 to-amber-400 px-8 py-3.5 text-[15px] font-black text-[#3a2c00] shadow-xl shadow-amber-900/40 transition-transform hover:scale-105"
              >
                <BookOpen size={19} />
                ابدأ قراءة الكتاب
                <ArrowLeft size={17} className="transition-transform group-hover:-translate-x-1" />
              </button>
              <button
                onClick={onPrint}
                className="font-head flex items-center gap-2 rounded-2xl border-2 border-white/25 bg-white/10 px-7 py-3 text-[14px] font-extrabold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Printer size={18} />
                تحميل الكتاب PDF
              </button>
            </div>
          </div>
        </div>

        {/* إحصائيات */}
        <div className="relative grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {[
            { icon: BookOpen, n: "10", t: "فصول دراسية" },
            { icon: Clock, n: "120", t: "ساعة تدريبية" },
            { icon: MonitorPlay, n: "30", t: "فيديو يوتيوب مختار" },
            { icon: ListChecks, n: "30", t: "سؤالاً تفاعلياً" },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-center gap-3 bg-[#0d1526]/90 px-4 py-4">
              <s.icon size={22} className="text-amber-400" />
              <div>
                <div className="font-head text-xl font-black text-white">{s.n}</div>
                <div className="text-[11.5px] font-medium text-slate-300">{s.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* كيف تستخدم الكتاب */}
      <div className="paper-grain px-6 py-8 md:px-12">
        <h2 className="font-head flex items-center gap-2 text-xl font-black text-slate-900">
          <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-[#e30613] to-[#c9971c]" />
          كيف تستخدم هذا الكتاب؟
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            { t: "اقرأ بالترتيب", d: "الفصول مبنية تراكمياً: كل فصل يعتمد على سابقه، فلا تتجاوز فصلاً دون إتقانه." },
            { t: "طبّق فوراً", d: "كل فصل ينتهي بنشاط عملي ومشروع — التطبيق هو 70% من التعلم الحقيقي." },
            { t: "شاهد الفيديوهات", d: "30 فيديو مختاراً بعناية من أفضل القنوات العربية يدعم كل فصل ويعمّق فهمك." },
            { t: "اختبر نفسك", d: "3 أسئلة تفاعلية بعد كل فصل مع شرح الإجابات — أعد المحاولة حتى الإتقان." },
          ].map((c, i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="font-head flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#e30613] to-[#7a040c] text-sm font-black text-white">
                {i + 1}
              </span>
              <div>
                <div className="font-head text-[15px] font-extrabold text-slate-900">{c.t}</div>
                <div className="mt-1 text-[13.5px] leading-relaxed text-slate-600">{c.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ================= الفهرس ================= */
export function TocView({ onOpen, done }: { onOpen: (i: number) => void; done: boolean[] }) {
  return (
    <motion.div {...fadeUp} className="paper-grain rounded-3xl p-6 shadow-2xl shadow-black/50 md:p-10">
      <div className="flex items-center justify-center">
        <VtcLogo variant="full" />
      </div>
      <div className="mt-6 text-center">
        <div className="font-head text-sm font-bold tracking-wide text-[#b0050f]">فهرس المحتويات</div>
        <h2 className="font-head mt-1 text-3xl font-black text-slate-900">رحلتك عبر عشرة فصول</h2>
        <p className="mx-auto mt-2 max-w-xl text-[14px] text-slate-500">
          من مدخل التصميم إلى مشروع التخرج — اضغط على أي فصل لبدء القراءة
        </p>
      </div>
      <div className="mt-7 grid gap-3">
        {CHAPTERS.map((ch, i) => (
          <button
            key={ch.id}
            onClick={() => onOpen(i)}
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3.5 text-right shadow-sm transition-all hover:-translate-y-0.5 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/60"
          >
            <span className="font-head relative h-16 w-24 shrink-0 overflow-hidden rounded-xl">
              <img src={ch.image} alt={ch.imageAlt} className="h-full w-full object-cover transition-transform group-hover:scale-110" loading="lazy" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-1 right-2 font-head text-lg font-black text-amber-300">{ch.num}</span>
            </span>
            <span className="min-w-0 flex-1">
              <span className="font-head block truncate text-[15.5px] font-extrabold text-slate-900 group-hover:text-[#b0050f]">
                {ch.title}
              </span>
              <span className="mt-0.5 block truncate text-[12.5px] text-slate-500">{ch.subtitle}</span>
              <span className="mt-1.5 flex items-center gap-2 text-[11px] font-bold text-slate-400">
                <span className="inline-flex items-center gap-1"><Clock size={11} /> {ch.hours}</span>
                <span className="inline-flex items-center gap-1"><BarChart3 size={11} /> {ch.level}</span>
              </span>
            </span>
            {done[i] ? (
              <CircleCheck size={24} className="shrink-0 text-emerald-500" />
            ) : (
              <ChevronLeft size={22} className="shrink-0 text-slate-300 transition-transform group-hover:-translate-x-1 group-hover:text-[#e30613]" />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ================= عرض الفصل ================= */
export function ChapterView({
  ch,
  index,
  onPrev,
  onNext,
  onDone,
  isDone,
}: {
  ch: Chapter;
  index: number;
  onPrev: (() => void) | null;
  onNext: (() => void) | null;
  onDone: () => void;
  isDone: boolean;
}) {
  return (
    <motion.article {...fadeUp} key={ch.id} className="overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
      {/* ترويسة الفصل */}
      <div className="relative overflow-hidden">
        <img src={ch.image} alt={ch.imageAlt} className="h-60 w-full object-cover md:h-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1acc] to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-5 py-3 md:px-8">
          <span className="max-w-full overflow-hidden rounded-lg bg-white/95 px-2 py-1 shadow">
            <VtcLogo variant="print" className="origin-right scale-[0.72] sm:scale-[0.85]" />
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-5 pb-5 md:px-10 md:pb-7">
          <div className="flex items-center gap-3">
            <span className="font-head rounded-2xl bg-gradient-to-br from-[#e30613] to-[#7a040c] px-4 py-2 text-2xl font-black text-white shadow-lg md:text-3xl">
              {ch.num}
            </span>
            <ChapterMeta hours={ch.hours} level={ch.level} />
          </div>
          <h2 className="font-head mt-3 text-3xl font-black leading-snug text-white drop-shadow md:text-[40px]">
            {ch.title}
          </h2>
          <p className="mt-1 text-[14.5px] font-medium text-amber-200 md:text-[16px]">{ch.subtitle}</p>
        </div>
      </div>

      <div className="paper-grain px-5 py-7 md:px-10 md:py-9">
        {/* اقتباس */}
        <div className="avoid-break relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-5 text-center shadow">
          <Quote size={60} className="absolute -right-2 -top-2 text-white/5" />
          <Quote size={60} className="absolute -bottom-3 -left-2 rotate-180 text-white/5" />
          <p className="font-quote text-lg italic leading-loose text-amber-100 md:text-xl">«{ch.quote}»</p>
          <p className="mt-1 text-[12.5px] font-bold text-amber-400">— {ch.quoteBy}</p>
        </div>

        {/* الأهداف */}
        <div className="mt-6">
          <Objectives items={ch.objectives} />
        </div>

        {/* الأقسام */}
        {ch.sections.map((s, si) => (
          <div key={si}>
            <SectionTitle index={s.heading.split(" ")[0]} title={s.heading.replace(/^\S+\s/, "")} />
            {s.text.map((p, pi) => (
              <p key={pi} className="mb-3 text-justify text-[15px] leading-[2] text-slate-700">
                {p}
              </p>
            ))}
            {s.bullets && <Bullets items={s.bullets} />}
            {s.steps && <StepsList steps={s.steps} />}
            {s.table && <DataTable table={s.table} />}
            {s.tip && <TipBox text={s.tip} />}
            {s.note && <NoteBox text={s.note} />}
          </div>
        ))}

        {/* النشاط */}
        <ActivityBox title={ch.activity.title} text={ch.activity.text} deliverable={ch.activity.deliverable} />

        {/* الاختبار */}
        <div className="mt-8">
          <h3 className="font-head flex items-center gap-2 text-lg font-black text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-amber-300">
              <PenLine size={17} />
            </span>
            اختبر فهمك — {ch.quiz.length} أسئلة تفاعلية
          </h3>
          <div className="mt-4 grid gap-3">
            {ch.quiz.map((q, qi) => (
              <QuizCard key={qi} quiz={q} index={qi} />
            ))}
          </div>
        </div>

        {/* الفيديوهات */}
        <div className="mt-8">
          <h3 className="font-head flex items-center gap-2 text-lg font-black text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#e30613] to-[#7a040c] text-white">
              <MonitorPlay size={17} />
            </span>
            فيديوهات يوتيوب المختارة لهذا الفصل
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-1">
            {ch.videos.map((v, vi) => (
              <VideoCard key={vi} video={v} index={vi} />
            ))}
          </div>
        </div>

        {/* إتمام + تنقل */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <button
            onClick={onDone}
            className={`font-head flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-black transition-all ${
              isDone
                ? "bg-emerald-600 text-white"
                : "bg-gradient-to-l from-[#e30613] to-[#b0050f] text-white shadow-lg shadow-red-200 hover:shadow-xl"
            }`}
          >
            <CircleCheck size={19} />
            {isDone ? "أتممت هذا الفصل بنجاح" : "أنهيت دراسة هذا الفصل"}
          </button>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button
              onClick={() => onPrev && onPrev()}
              disabled={!onPrev}
              className="font-head flex items-center justify-center gap-1.5 rounded-xl border-2 border-slate-200 px-4 py-2.5 text-[13.5px] font-extrabold text-slate-600 transition enabled:hover:border-slate-400 disabled:opacity-40"
            >
              <ChevronRight size={17} />
              {index === 0 ? "الفهرس" : "الفصل السابق"}
            </button>
            <button
              onClick={() => onNext && onNext()}
              disabled={!onNext}
              className="font-head flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-[13.5px] font-extrabold text-amber-300 transition enabled:hover:bg-slate-800 disabled:opacity-40"
            >
              {index === CHAPTERS.length - 1 ? "المكتبات والملاحق" : "الفصل التالي"}
              <ChevronLeft size={17} />
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-[12px] font-medium text-slate-400">
          {BOOK_META.author} — {BOOK_META.org} — الفصل {ch.num} من {CHAPTERS.length}
        </p>
      </div>
    </motion.article>
  );
}

/* ================= مكتبة الفيديوهات ================= */
export function VideosView() {
  return (
    <motion.div {...fadeUp} className="paper-grain rounded-3xl p-6 shadow-2xl shadow-black/50 md:p-10">
      <div className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e30613] to-[#7a040c] text-white shadow-lg">
          <MonitorPlay size={26} />
        </span>
        <h2 className="font-head mt-3 text-3xl font-black text-slate-900">مكتبة الفيديوهات</h2>
        <p className="mx-auto mt-2 max-w-xl text-[14px] text-slate-500">
          30 فيديو مختاراً بعناية من أفضل القنوات العربية والعالمية — 3 فيديوهات لكل فصل
        </p>
      </div>
      {CHAPTERS.map((ch) => (
        <div key={ch.id} className="mt-7">
          <h3 className="font-head flex items-center gap-2 text-[16px] font-black text-slate-900">
            <span className="rounded-lg bg-slate-900 px-2.5 py-1 text-[13px] text-amber-300">{ch.num}</span>
            {ch.title}
          </h3>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {ch.videos.map((v, vi) => (
              <VideoCard key={vi} video={v} index={vi} />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

/* ================= المصطلحات ================= */
export function GlossaryView() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("الكل");
  const cats = useMemo(() => ["الكل", ...Array.from(new Set(GLOSSARY.map((g) => g.cat)))], []);
  const list = GLOSSARY.filter(
    (g) =>
      (cat === "الكل" || g.cat === cat) &&
      (q.trim() === "" || g.term.includes(q.trim()) || g.en.toLowerCase().includes(q.trim().toLowerCase()))
  );
  return (
    <motion.div {...fadeUp} className="paper-grain rounded-3xl p-6 shadow-2xl shadow-black/50 md:p-10">
      <div className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c9971c] to-[#8f6b0e] text-white shadow-lg">
          <BookMarked size={26} />
        </span>
        <h2 className="font-head mt-3 text-3xl font-black text-slate-900">قاموس المصطلحات</h2>
        <p className="mx-auto mt-2 max-w-xl text-[14px] text-slate-500">
          {GLOSSARY.length} مصطلحاً مهنياً بالعربية والإنجليزية مع شرح مبسط
        </p>
      </div>
      <div className="relative mx-auto mt-5 max-w-md">
        <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="ابحث عن مصطلح..."
          className="w-full rounded-2xl border-2 border-slate-200 bg-white py-3 pl-4 pr-11 text-[14px] outline-none transition focus:border-[#c9971c]"
        />
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-1.5 text-[12.5px] font-bold transition ${
              cat === c ? "bg-slate-900 text-amber-300" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {list.map((g, i) => (
          <div key={i} className="avoid-break rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-head text-[15px] font-extrabold text-slate-900">{g.term}</h4>
              <span className="shrink-0 rounded-full bg-red-50 px-2.5 py-0.5 text-[11px] font-bold text-[#b0050f]">
                {g.cat}
              </span>
            </div>
            <div className="mt-0.5 text-[12px] font-bold tracking-wide text-[#8f6b0e]" dir="ltr" style={{ textAlign: "right" }}>
              {g.en}
            </div>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{g.def}</p>
          </div>
        ))}
        {list.length === 0 && (
          <p className="col-span-full py-8 text-center text-slate-400">لا توجد نتائج مطابقة لبحثك</p>
        )}
      </div>
    </motion.div>
  );
}

/* ================= المراجع ================= */
export function RefsView() {
  return (
    <motion.div {...fadeUp} className="paper-grain rounded-3xl p-6 shadow-2xl shadow-black/50 md:p-10">
      <div className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-amber-300 shadow-lg">
          <LibraryBig size={26} />
        </span>
        <h2 className="font-head mt-3 text-3xl font-black text-slate-900">المراجع والمصادر</h2>
        <p className="mx-auto mt-2 max-w-2xl text-[14px] leading-relaxed text-slate-500">
          بُني هذا الكتاب على أقوى المراجع العالمية في التصميم وصناعة المحتوى والتسويق الرقمي،
          إضافة إلى المصادر الرسمية للمنصات والأدوات
        </p>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {REFERENCES.map((r, i) => (
          <div key={i} className="avoid-break rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-head text-[14.5px] font-extrabold text-slate-900" dir="ltr" style={{ textAlign: "right" }}>
                {r.title}
              </h4>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                  r.type === "كتاب عالمي" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                }`}
              >
                {r.type}
              </span>
            </div>
            <div className="mt-0.5 text-[12.5px] font-bold text-[#b0050f]">{r.author}</div>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{r.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ================= المؤلف ================= */
export function AuthorView({ onPrint }: { onPrint: () => void }) {
  return (
    <motion.div {...fadeUp} className="overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
      <div className="relative overflow-hidden bg-gradient-to-bl from-[#1a0507] via-[#7a040c] to-[#0b0f1a] px-6 py-10 md:px-12">
        <div className="islamic-pattern absolute inset-0 opacity-50" />
        <div className="relative flex flex-col items-center gap-5 text-center md:flex-row md:text-right">
          <span className="animate-floaty font-head flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-5xl font-black text-[#3a2c00] shadow-2xl">
            ت
          </span>
          <div>
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-amber-400/15 px-4 py-1 text-[12px] font-bold text-amber-300 ring-1 ring-amber-300/40 md:mx-0">
              <Award size={14} /> مؤلف الكتاب ومُعدّ الحقيبة التدريبية
            </div>
            <h2 className="font-head mt-3 text-3xl font-black text-white md:text-4xl">{AUTHOR.name}</h2>
            <p className="mt-1 text-[14px] font-medium text-red-100/80">{AUTHOR.role}</p>
            <p className="mt-0.5 text-[13px] font-bold text-amber-300">{AUTHOR.org}</p>
          </div>
        </div>
      </div>
      <div className="paper-grain px-6 py-8 md:px-12">
        <p className="text-justify text-[15px] leading-[2.1] text-slate-700">{AUTHOR.bio}</p>
        <div className="mt-5 grid gap-2.5 md:grid-cols-2">
          {AUTHOR.points.map((p, i) => (
            <div key={i} className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 text-[13.5px] font-medium leading-relaxed text-slate-700 shadow-sm">
              <CircleCheck size={18} className="mt-0.5 shrink-0 text-emerald-600" />
              {p}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl bg-slate-900 p-6 text-center">
          <Layers size={28} className="text-amber-400" />
          <p className="font-head text-[15px] font-bold leading-relaxed text-white">
            هذا الكتاب حقيبة تدريبية متكاملة — احتفظ بنسختك الورقية أو الرقمية وارجع إليها كلما احتجت
          </p>
          <button
            onClick={onPrint}
            className="font-head flex items-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 to-amber-400 px-8 py-3 text-[14.5px] font-black text-[#3a2c00] transition-transform hover:scale-105"
          >
            <Printer size={18} /> تحميل الكتاب كاملاً PDF
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-[12px] font-medium text-slate-400">
          <UserRound size={14} />
          جميع حقوق النشر محفوظة — {AUTHOR.org} — {BOOK_META.edition}
        </div>
      </div>
    </motion.div>
  );
}
