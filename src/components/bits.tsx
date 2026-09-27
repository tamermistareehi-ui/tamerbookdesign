import { useState } from "react";
import {
  Target,
  Lightbulb,
  TriangleAlert,
  CheckCircle2,
  XCircle,
  Play,
  MonitorPlay,
  ClipboardList,
  PackageCheck,
  ListOrdered,
  CircleCheck,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import type { BookTable, QuizQ, VideoLink } from "../data/book";

/* ---------- عنوان قسم ---------- */
export function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-4 mt-8 flex items-start gap-3 first:mt-0">
      <span className="font-head mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e30613] to-[#7a040c] text-sm font-black text-white shadow-md shadow-red-900/20">
        {index}
      </span>
      <h3 className="font-head pt-1 text-xl font-extrabold leading-snug text-slate-900 md:text-[22px]">
        {title}
      </h3>
    </div>
  );
}

/* ---------- الأهداف ---------- */
export function Objectives({ items }: { items: string[] }) {
  return (
    <div className="avoid-break overflow-hidden rounded-2xl border border-amber-300/60 bg-gradient-to-bl from-amber-50 via-white to-amber-50/40 shadow-sm">
      <div className="flex items-center gap-2 bg-gradient-to-l from-[#8f6b0e] via-[#c9971c] to-[#8f6b0e] px-5 py-2.5 text-white">
        <Target className="h-4.5 w-4.5" size={18} />
        <span className="font-head text-sm font-extrabold">أهداف الفصل التعليمية</span>
      </div>
      <ul className="space-y-2.5 px-5 py-4">
        {items.map((o, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-slate-700">
            <CircleCheck size={17} className="mt-1 shrink-0 text-[#c9971c]" />
            <span>{o}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- صندوق نصيحة ---------- */
export function TipBox({ text }: { text: string }) {
  return (
    <div className="avoid-break my-4 flex items-start gap-3 rounded-2xl border-r-4 border-emerald-500 bg-emerald-50/80 px-4 py-3.5 shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow">
        <Lightbulb size={17} />
      </span>
      <p className="text-[14px] leading-relaxed text-emerald-950">
        <strong className="font-head">نصيحة المدرب: </strong>
        {text}
      </p>
    </div>
  );
}

export function NoteBox({ text }: { text: string }) {
  return (
    <div className="avoid-break my-4 flex items-start gap-3 rounded-2xl border-r-4 border-[#e30613] bg-red-50/80 px-4 py-3.5 shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e30613] text-white shadow">
        <TriangleAlert size={17} />
      </span>
      <p className="text-[14px] leading-relaxed text-red-950">
        <strong className="font-head">تنبيه مهم: </strong>
        {text}
      </p>
    </div>
  );
}

/* ---------- جدول ---------- */
export function DataTable({ table }: { table: BookTable }) {
  return (
    <div className="avoid-break my-5 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      <table className="w-full text-[13.5px]">
        <thead>
          <tr className="bg-gradient-to-l from-slate-900 via-slate-800 to-slate-900 text-white">
            {table.head.map((h, i) => (
              <th key={i} className="font-head px-4 py-3 text-right text-[13px] font-extrabold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-white" : "bg-amber-50/50"}
            >
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`border-t border-slate-100 px-4 py-2.5 leading-relaxed text-slate-700 ${
                    j === 0 ? "font-head font-bold text-slate-900" : ""
                  }`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- خطوات ---------- */
export function StepsList({ steps }: { steps: string[] }) {
  return (
    <ol className="my-4 space-y-2.5">
      {steps.map((s, i) => (
        <li
          key={i}
          className="avoid-break flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-2.5 text-[14px] leading-relaxed text-slate-700"
        >
          <span className="font-head flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[13px] font-black text-amber-300">
            {i + 1}
          </span>
          <span className="pt-0.5">{s}</span>
        </li>
      ))}
    </ol>
  );
}

/* ---------- نقاط ---------- */
export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="my-4 grid gap-2">
      {items.map((b, i) => (
        <li
          key={i}
          className="flex items-start gap-2.5 rounded-xl bg-gradient-to-l from-red-50/60 to-transparent px-3 py-1.5 text-[14.5px] leading-relaxed text-slate-700"
        >
          <span className="mt-[9px] h-2 w-2 shrink-0 rotate-45 bg-gradient-to-br from-[#e30613] to-[#c9971c]" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- بطاقة فيديو ---------- */
export function VideoCard({ video, index }: { video: VideoLink; index: number }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noreferrer"
      className="avoid-break group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg hover:shadow-red-100"
    >
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#e30613] to-[#7a040c] text-white shadow">
        <MonitorPlay size={24} />
        <span className="absolute bottom-0.5 left-1 rounded bg-black/60 px-1 text-[9px] font-bold">
          {String(index + 1).padStart(2, "0")}
        </span>
      </span>
      <span className="min-w-0">
        <span className="font-head block truncate text-[14px] font-extrabold text-slate-900 group-hover:text-[#b0050f]">
          {video.title}
        </span>
        <span className="mt-0.5 block text-[12.5px] text-slate-500">{video.channel}</span>
        <span className="mt-1.5 inline-flex items-center gap-1.5">
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10.5px] font-bold text-slate-600">
            {video.level}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-red-600 px-2 py-0.5 text-[10.5px] font-bold text-white">
            <Play size={10} /> مشاهدة
          </span>
        </span>
      </span>
      <ExternalLink size={15} className="ms-auto mt-1 shrink-0 text-slate-300 group-hover:text-red-500" />
    </a>
  );
}

/* ---------- النشاط ---------- */
export function ActivityBox({
  title,
  text,
  deliverable,
}: {
  title: string;
  text: string;
  deliverable: string;
}) {
  return (
    <div className="avoid-break relative my-6 overflow-hidden rounded-2xl border-2 border-dashed border-[#c9971c]/60 bg-gradient-to-bl from-amber-50 to-white p-5">
      <div className="flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#c9971c] to-[#8f6b0e] text-white shadow">
          <ClipboardList size={19} />
        </span>
        <h4 className="font-head text-[16px] font-black text-slate-900">{title}</h4>
      </div>
      <p className="mt-3 text-[14.5px] leading-loose text-slate-700">{text}</p>
      <div className="mt-3 flex items-start gap-2 rounded-xl bg-slate-900 px-4 py-3 text-[13.5px] leading-relaxed text-amber-200">
        <PackageCheck size={18} className="mt-0.5 shrink-0" />
        <span>
          <strong className="font-head text-white">المُخرَج المطلوب تسليمه: </strong>
          {deliverable}
        </span>
      </div>
    </div>
  );
}

/* ---------- سؤال اختبار تفاعلي ---------- */
export function QuizCard({ quiz, index }: { quiz: QuizQ; index: number }) {
  const [picked, setPicked] = useState<number | null>(null);
  const done = picked !== null;
  const correct = picked === quiz.answer;

  return (
    <div
      className={`avoid-break rounded-2xl border-2 bg-white p-4 shadow-sm transition-colors ${
        !done ? "border-slate-200" : correct ? "border-emerald-400" : "border-red-300"
      }`}
    >
      <p className="font-head text-[14.5px] font-extrabold leading-relaxed text-slate-900">
        <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 align-middle text-[12px] text-amber-300">
          {index + 1}
        </span>
        {quiz.q}
      </p>
      <div className="mt-3 grid gap-2">
        {quiz.options.map((op, i) => {
          const isAnswer = i === quiz.answer;
          const isPicked = i === picked;
          let cls = "border-slate-200 bg-slate-50 hover:border-[#c9971c] hover:bg-amber-50/60 cursor-pointer";
          if (done && isAnswer) cls = "border-emerald-500 bg-emerald-50 cursor-default";
          else if (done && isPicked) cls = "border-red-400 bg-red-50 cursor-default";
          else if (done) cls = "border-slate-100 bg-slate-50/50 opacity-70 cursor-default";
          return (
            <button
              key={i}
              disabled={done}
              onClick={() => setPicked(i)}
              className={`flex items-center gap-2.5 rounded-xl border-2 px-3.5 py-2.5 text-right text-[13.5px] font-medium leading-relaxed transition-all ${cls}`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-black ${
                  done && isAnswer
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : done && isPicked
                      ? "border-red-400 bg-red-400 text-white"
                      : "border-slate-300 text-slate-400"
                }`}
              >
                {["أ", "ب", "ج", "د"][i]}
              </span>
              <span className="text-slate-700">{op}</span>
              {done && isAnswer && <CheckCircle2 size={17} className="ms-auto shrink-0 text-emerald-600" />}
              {done && isPicked && !isAnswer && <XCircle size={17} className="ms-auto shrink-0 text-red-500" />}
            </button>
          );
        })}
      </div>
      {done && (
        <div
          className={`mt-3 rounded-xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
            correct ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"
          }`}
        >
          <strong>{correct ? "أحسنت! إجابة صحيحة. " : "إجابة غير صحيحة. "}</strong>
          {quiz.explain}
        </div>
      )}
    </div>
  );
}

/* ---------- شارة الفصل ---------- */
export function ChapterMeta({ hours, level }: { hours: string; level: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[12px] font-bold">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-amber-300">
        <ListOrdered size={13} /> {hours}
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e30613] px-3 py-1 text-white">
        <GraduationCap size={13} /> {level}
      </span>
    </div>
  );
}
