import { useState } from "react";
import { TOPPERS } from "../data/mockData";
import { useAuth } from "../context/AuthContext";
import { IconClipboard } from "../components/Icons";

export default function ResultPage() {
  const { students } = useAuth();
  const [roll, setRoll] = useState("");
  const [searched, setSearched] = useState(false);
  const [found, setFound] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    const student = students.find((s) => s.rollNumber.toLowerCase() === roll.trim().toLowerCase());
    setFound(student || null);
  };

  const latestResult = found?.results?.[found.results.length - 1];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="hero-eyebrow">Results</span>
          <h1 style={{ marginTop: 14 }}>Check your Sankalp GK Exam result</h1>
          <p>Enter your roll number to view your score, or browse the state-level toppers below.</p>
        </div>
      </div>

      <section className="section-white">
        <div className="container">
          <div className="form-card" style={{ maxWidth: 560 }}>
            <form onSubmit={handleSearch}>
              <div className="field">
                <label htmlFor="roll">Roll Number</label>
                <input id="roll" placeholder="e.g. SF2026-0001" value={roll} onChange={(e) => setRoll(e.target.value)} required />
              </div>
              <button className="btn btn-primary btn-block" style={{ marginTop: 18 }} type="submit"><IconClipboard width={18} height={18} /> Check Result</button>
            </form>

            {searched && !found && (
              <div className="form-msg error" style={{ marginTop: 18, marginBottom: 0 }}>No record found for that roll number. Please check and try again.</div>
            )}
            {searched && found && !latestResult && (
              <div className="form-msg error" style={{ marginTop: 18, marginBottom: 0 }}>Roll number found, but no test has been attempted yet.</div>
            )}
            {searched && found && latestResult && (
              <div style={{ marginTop: 24, textAlign: "center" }}>
                <div className="result-score-ring" style={{ "--pct": Math.round((latestResult.score / latestResult.total) * 100) }}>
                  <div className="inner"><b>{latestResult.score}/{latestResult.total}</b><span>{found.fullName}</span></div>
                </div>
                <p style={{ color: "var(--ink-soft)" }}>{found.className} · {found.district}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">State Toppers 2025</span>
            <h2>Sankalp GK Examination — Merit List</h2>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Rank</th><th>Student</th><th>District</th><th>Class</th><th>Marks</th></tr></thead>
              <tbody>
                {TOPPERS.map((t) => (
                  <tr key={t.rank}>
                    <td><span className="rank-pill">{t.rank}</span></td>
                    <td>{t.name}</td>
                    <td>{t.district}</td>
                    <td>{t.class}</td>
                    <td>{t.marks} / {t.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
