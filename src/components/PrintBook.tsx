import VtcLogo from "./VtcLogo";
import { BOOK_META, CHAPTERS, GLOSSARY, REFERENCES, AUTHOR } from "../data/book";

/** نسخة الطباعة الكاملة — تظهر فقط عند الطباعة / حفظ PDF */
export default function PrintBook() {
  return (
    <div className="print-only" dir="rtl" style={{ fontFamily: "Tajawal, Cairo, sans-serif", color: "#111" }}>
      {/* ===== الغلاف ===== */}
      <div className="print-page" style={{ textAlign: "center", paddingTop: 30 }}>
        <div style={{ border: "3px solid #c9971c", borderRadius: 18, padding: "26px 20px", background: "linear-gradient(180deg,#fff8e6,#ffffff)" }}>
          <VtcLogo variant="full" />
          <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, color: "#b0050f", letterSpacing: 1 }}>
            سلسلة الحقائب التدريبية المهنية — {BOOK_META.edition}
          </div>
          <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: 40, fontWeight: 900, lineHeight: 1.5, margin: "14px 0 4px", color: "#101828" }}>
            التصميم الرقمي
            <br />
            <span style={{ color: "#b0050f" }}>وصناعة المحتوى الرقمي</span>
          </h1>
          <p style={{ fontSize: 14, color: "#444", marginTop: 6 }}>{BOOK_META.subtitle}</p>
          <div style={{ display: "inline-block", marginTop: 18, background: "#101828", color: "#f3d97b", borderRadius: 12, padding: "10px 34px" }}>
            <div style={{ fontFamily: "Cairo, sans-serif", fontSize: 20, fontWeight: 900 }}>{BOOK_META.author}</div>
            <div style={{ fontSize: 12, marginTop: 2 }}>{BOOK_META.org} — {BOOK_META.totalHours}</div>
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 20 }}>
            {[
              ["10", "فصول دراسية"],
              ["120", "ساعة تدريبية"],
              ["30", "فيديو مختار"],
              ["30", "سؤالاً ونشاطاً"],
            ].map(([n, t], i) => (
              <div key={i} style={{ border: "1.5px solid #e5d9b8", borderRadius: 10, padding: "8px 18px", background: "#fff" }}>
                <div style={{ fontFamily: "Cairo, sans-serif", fontSize: 20, fontWeight: 900, color: "#b0050f" }}>{n}</div>
                <div style={{ fontSize: 11, color: "#555" }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: 11, color: "#777", marginTop: 16 }}>
          جميع الحقوق محفوظة — {BOOK_META.org} — {BOOK_META.edition}
        </p>
      </div>

      {/* ===== كلمة المؤلف + كيفية الاستخدام ===== */}
      <div className="print-page">
        <PrintHeader />
        <h2 style={h2}>كلمة المؤلف</h2>
        <p style={para}>{AUTHOR.bio}</p>
        <div style={{ marginTop: 10 }}>
          {AUTHOR.points.map((p, i) => (
            <div key={i} style={{ fontSize: 12.5, marginBottom: 5 }}>▸ {p}</div>
          ))}
        </div>
        <h2 style={{ ...h2, marginTop: 22 }}>كيف تستخدم هذا الكتاب؟</h2>
        <div style={{ fontSize: 12.5, lineHeight: 2 }}>
          <p style={para}><strong>1. اقرأ بالترتيب:</strong> الفصول مبنية تراكمياً، فأتقن كل فصل قبل الانتقال للتالي.</p>
          <p style={para}><strong>2. طبّق فوراً:</strong> كل فصل ينتهي بنشاط عملي — التطبيق هو 70% من التعلم.</p>
          <p style={para}><strong>3. شاهد الفيديوهات:</strong> امسح الرابط أو انسخه في المتصفح لمشاهدة الشروحات المرئية.</p>
          <p style={para}><strong>4. اختبر نفسك:</strong> أجب عن أسئلة كل فصل (الإجابات الصحيحة موسومة بعلامة ✓).</p>
        </div>
        <h2 style={{ ...h2, marginTop: 22 }}>الفهرس</h2>
        {CHAPTERS.map((ch, i) => (
          <div key={ch.id} style={{ display: "flex", alignItems: "baseline", gap: 8, padding: "5px 0", borderBottom: "1px dotted #ccc", fontSize: 13 }}>
            <span style={{ background: "#b0050f", color: "#fff", borderRadius: 6, padding: "1px 8px", fontSize: 11, fontWeight: 800 }}>{ch.num}</span>
            <strong>{ch.title}</strong>
            <span style={{ color: "#777", fontSize: 11 }}>— {ch.subtitle}</span>
            <span style={{ marginRight: "auto", color: "#999", fontSize: 11 }}>{ch.hours}</span>
            <span style={{ color: "#999", fontSize: 11 }}>الفصل {i + 1}</span>
          </div>
        ))}
        {["مكتبة روابط الفيديوهات", "قاموس المصطلحات", "المراجع والمصادر", "عن المؤلف"].map((t, i) => (
          <div key={i} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: "1px dotted #ccc", fontSize: 13 }}>
            <span style={{ background: "#101828", color: "#f3d97b", borderRadius: 6, padding: "1px 8px", fontSize: 11, fontWeight: 800 }}>م{i + 1}</span>
            <strong>{t}</strong>
          </div>
        ))}
        <PrintFooter />
      </div>

      {/* ===== الفصول ===== */}
      {CHAPTERS.map((ch) => (
        <div key={ch.id} className="print-chapter-start">
          <PrintHeader />
          <div style={{ background: "#101828", color: "#fff", borderRadius: 12, padding: "14px 18px", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ background: "linear-gradient(135deg,#e30613,#7a040c)", borderRadius: 10, padding: "4px 14px", fontFamily: "Cairo", fontSize: 24, fontWeight: 900 }}>{ch.num}</span>
              <div>
                <h2 style={{ fontFamily: "Cairo", fontSize: 21, fontWeight: 900, margin: 0 }}>{ch.title}</h2>
                <div style={{ color: "#f3d97b", fontSize: 12 }}>{ch.subtitle} — {ch.hours} — {ch.level}</div>
              </div>
            </div>
          </div>

          <img src={ch.image} alt={ch.imageAlt} style={{ width: "100%", height: 210, objectFit: "cover", borderRadius: 10, marginBottom: 10 }} />

          <div style={{ background: "#faf5e6", border: "1px solid #e5d9b8", borderRadius: 10, padding: "8px 14px", fontSize: 12.5, marginBottom: 12 }}>
            <em>«{ch.quote}»</em> <strong style={{ color: "#8f6b0e" }}>— {ch.quoteBy}</strong>
          </div>

          <div className="avoid-break" style={{ border: "1.5px solid #c9971c", borderRadius: 10, padding: "10px 14px", marginBottom: 12 }}>
            <strong style={{ fontFamily: "Cairo", fontSize: 13.5, color: "#8f6b0e" }}>أهداف الفصل:</strong>
            {ch.objectives.map((o, i) => (
              <div key={i} style={{ fontSize: 12.5, marginTop: 3 }}>✓ {o}</div>
            ))}
          </div>

          {ch.sections.map((s, si) => (
            <div key={si} style={{ marginBottom: 10 }}>
              <h3 style={{ fontFamily: "Cairo", fontSize: 15, fontWeight: 800, color: "#b0050f", margin: "12px 0 6px", borderBottom: "2px solid #f0d98c", paddingBottom: 4 }}>
                {s.heading}
              </h3>
              {s.text.map((p, pi) => (
                <p key={pi} style={para}>{p}</p>
              ))}
              {s.bullets?.map((b, bi) => (
                <div key={bi} style={{ fontSize: 12.5, margin: "3px 0", paddingRight: 6 }}>◆ {b}</div>
              ))}
              {s.steps?.map((st, ti) => (
                <div key={ti} style={{ fontSize: 12.5, margin: "3px 0", paddingRight: 6 }}>
                  <strong style={{ color: "#b0050f" }}>{ti + 1}.</strong> {st}
                </div>
              ))}
              {s.table && (
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, margin: "8px 0" }}>
                  <thead>
                    <tr style={{ background: "#101828", color: "#fff" }}>
                      {s.table.head.map((h, hi) => (
                        <th key={hi} style={{ padding: "6px 8px", textAlign: "right", border: "1px solid #333" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((r, ri) => (
                      <tr key={ri} style={{ background: ri % 2 ? "#faf5e6" : "#fff" }}>
                        {r.map((c, ci) => (
                          <td key={ci} style={{ padding: "5px 8px", border: "1px solid #ddd", fontWeight: ci === 0 ? 800 : 400 }}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {s.tip && (
                <div style={{ background: "#ecfdf5", border: "1px solid #6ee7b7", borderRight: "4px solid #059669", borderRadius: 8, padding: "7px 12px", fontSize: 12, margin: "8px 0" }}>
                  <strong>نصيحة المدرب: </strong>{s.tip}
                </div>
              )}
              {s.note && (
                <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRight: "4px solid #e30613", borderRadius: 8, padding: "7px 12px", fontSize: 12, margin: "8px 0" }}>
                  <strong>تنبيه مهم: </strong>{s.note}
                </div>
              )}
            </div>
          ))}

          <div className="avoid-break" style={{ border: "2px dashed #c9971c", borderRadius: 10, padding: "10px 14px", margin: "12px 0", background: "#fffdf5" }}>
            <strong style={{ fontFamily: "Cairo", fontSize: 13.5 }}>{ch.activity.title}</strong>
            <p style={{ fontSize: 12.5, lineHeight: 1.9, margin: "4px 0" }}>{ch.activity.text}</p>
            <p style={{ fontSize: 12.5, margin: 0 }}><strong>المُخرَج المطلوب: </strong>{ch.activity.deliverable}</p>
          </div>

          <div className="avoid-break" style={{ margin: "12px 0" }}>
            <strong style={{ fontFamily: "Cairo", fontSize: 14 }}>أسئلة مراجعة الفصل (الإجابة الصحيحة موسومة بـ ✓):</strong>
            {ch.quiz.map((q, qi) => (
              <div key={qi} style={{ fontSize: 12.5, marginTop: 6, background: "#f8fafc", borderRadius: 8, padding: "8px 12px" }}>
                <strong>س{qi + 1}: {q.q}</strong>
                {q.options.map((op, oi) => (
                  <div key={oi} style={{ marginRight: 10, color: oi === q.answer ? "#059669" : "#444", fontWeight: oi === q.answer ? 800 : 400 }}>
                    {["أ", "ب", "ج", "د"][oi]}. {op} {oi === q.answer ? "✓" : ""}
                  </div>
                ))}
                <div style={{ fontSize: 11.5, color: "#666", marginTop: 3 }}>التوضيح: {q.explain}</div>
              </div>
            ))}
          </div>

          <div className="avoid-break" style={{ margin: "12px 0" }}>
            <strong style={{ fontFamily: "Cairo", fontSize: 14 }}>فيديوهات يوتيوب المختارة لهذا الفصل:</strong>
            {ch.videos.map((v, vi) => (
              <div key={vi} style={{ fontSize: 12, marginTop: 5, border: "1px solid #eee", borderRadius: 8, padding: "6px 10px" }}>
                <strong>{vi + 1}. {v.title}</strong> <span style={{ color: "#666" }}>— {v.channel} ({v.level})</span>
                <div style={{ fontSize: 10, color: "#1d4ed8", wordBreak: "break-all" }}>{v.url}</div>
              </div>
            ))}
          </div>
          <PrintFooter />
        </div>
      ))}

      {/* ===== المصطلحات ===== */}
      <div className="print-chapter-start">
        <PrintHeader />
        <h2 style={h2}>ملحق (1): قاموس المصطلحات</h2>
        {GLOSSARY.map((g, i) => (
          <div key={i} style={{ fontSize: 12, borderBottom: "1px solid #eee", padding: "5px 0" }}>
            <strong>{g.term}</strong> <span style={{ color: "#8f6b0e", fontSize: 11 }}>({g.en})</span>
            <span style={{ color: "#b0050f", fontSize: 11 }}> [{g.cat}]</span>
            <div style={{ color: "#444" }}>{g.def}</div>
          </div>
        ))}
        <PrintFooter />
      </div>

      {/* ===== المراجع ===== */}
      <div className="print-chapter-start">
        <PrintHeader />
        <h2 style={h2}>ملحق (2): المراجع والمصادر</h2>
        {REFERENCES.map((r, i) => (
          <div key={i} style={{ fontSize: 12, borderBottom: "1px solid #eee", padding: "6px 0" }}>
            <strong>{i + 1}. {r.title}</strong> — {r.author} <span style={{ color: "#b0050f" }}>[{r.type}]</span>
            <div style={{ color: "#444" }}>{r.desc}</div>
          </div>
        ))}
        <h2 style={{ ...h2, marginTop: 20 }}>ملحق (3): عن المؤلف</h2>
        <p style={para}><strong>{AUTHOR.name}</strong> — {AUTHOR.role} — {AUTHOR.org}.</p>
        <p style={para}>{AUTHOR.bio}</p>
        {AUTHOR.points.map((p, i) => (
          <div key={i} style={{ fontSize: 12.5, marginBottom: 4 }}>▸ {p}</div>
        ))}
        <div style={{ marginTop: 26, border: "2px solid #c9971c", borderRadius: 12, padding: 16, textAlign: "center", background: "#fffdf5" }}>
          <VtcLogo variant="full" />
          <p style={{ fontSize: 12, color: "#555", marginTop: 10 }}>
            تم إعداد هذا الكتاب كحقيبة تدريبية معتمدة لدورة «التصميم الرقمي وصناعة المحتوى الرقمي»
            <br />إعداد: {BOOK_META.author} — {BOOK_META.org} — {BOOK_META.edition}
          </p>
        </div>
        <PrintFooter />
      </div>
    </div>
  );
}

function PrintHeader() {
  return (
    <div>
      <VtcLogo variant="print" />
      <div style={{ height: 3, borderRadius: 99, background: "linear-gradient(to left,#e30613,#c9971c)", margin: "8px 0 14px" }} />
    </div>
  );
}

function PrintFooter() {
  return (
    <div style={{ marginTop: 16, paddingTop: 8, borderTop: "1.5px solid #e5e7eb", fontSize: 10.5, color: "#888", display: "flex", justifyContent: "space-between" }}>
      <span>{BOOK_META.author} — {BOOK_META.org}</span>
      <span>التصميم الرقمي وصناعة المحتوى الرقمي</span>
    </div>
  );
}

const h2: React.CSSProperties = {
  fontFamily: "Cairo, sans-serif",
  fontSize: 20,
  fontWeight: 900,
  color: "#101828",
  borderRight: "5px solid #e30613",
  paddingRight: 10,
  margin: "6px 0 12px",
};

const para: React.CSSProperties = {
  fontSize: 12.5,
  lineHeight: 2,
  textAlign: "justify",
  margin: "0 0 8px",
  color: "#222",
};
