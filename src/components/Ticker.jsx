const NOTICES = [
  { date: "12 Aug 2026", text: "Registrations open for Sankalp State Level GK Examination 2026." },
  { date: "16 Aug 2026", text: "Exam date confirmed for Std 1st to 8th, all mediums." },
  { date: "05 Aug 2026", text: "District & Taluka coordinator list updated." },
  { date: "01 Aug 2026", text: "Sample question papers now available under Downloads." },
];

export default function Ticker() {
  const items = [...NOTICES, ...NOTICES];
  return (
    <div className="ticker">
      <div className="ticker-label">📢 Latest Notices</div>
      <div className="ticker-track-wrap">
        <div className="ticker-track">
          {items.map((n, i) => (
            <span key={i}><b>{n.date}</b>{n.text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
