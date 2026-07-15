import { useState } from "react";
import { AVAILABLE_TESTS } from "../../data/mockData";
import TakeTest from "./TakeTest";
import { IconClock } from "../../components/Icons";

export default function AvailableTests({ student }) {
  const [activeTest, setActiveTest] = useState(null);

  if (activeTest) {
    return <TakeTest test={activeTest} student={student} onFinish={() => setActiveTest(null)} />;
  }

  const attemptedIds = new Set((student.results || []).map((r) => r.testId));

  return (
    <div>
      <h2 style={{ marginBottom: 6 }}>Available Tests</h2>
      <p style={{ color: "var(--ink-soft)", marginBottom: 26 }}>Tests allotted to your class group, {student.className}.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {AVAILABLE_TESTS.map((t) => {
          const done = attemptedIds.has(t.id);
          return (
            <div className="card test-card" key={t.id}>
              <div>
                <span className={`test-tag ${done ? "completed" : t.status}`}>{done ? "Completed" : t.status}</span>
                <h3 style={{ marginTop: 10 }}>{t.title}</h3>
                <p style={{ display: "flex", gap: 14, marginTop: 6, color: "var(--ink-soft)", fontSize: "0.85rem" }}>
                  <span><IconClock width={14} height={14} /> {t.duration} min</span>
                  <span>{t.totalMarks} marks</span>
                  <span>{t.date}</span>
                </p>
              </div>
              <button className="btn btn-primary btn-sm" disabled={done} onClick={() => setActiveTest(t)}>
                {done ? "Already Attempted" : "Give Test"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
