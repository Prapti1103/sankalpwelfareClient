import { useState } from "react";
import { SAMPLE_QUESTIONS } from "../../data/mockData";
import { useAuth } from "../../context/AuthContext";

const LETTERS = ["A", "B", "C", "D"];

export default function TakeTest({ test, student, onFinish }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { submitTestResult } = useAuth();

  const questions = SAMPLE_QUESTIONS;
  const q = questions[step];
  const progress = Math.round(((step + (submitted ? 1 : 0)) / questions.length) * 100);

  const select = (optIdx) => setAnswers((a) => ({ ...a, [q.id]: optIdx }));

  const score = questions.reduce((acc, ques) => acc + (answers[ques.id] === ques.answer ? 1 : 0), 0);

  const handleSubmit = () => {
    const result = {
      testId: test.id,
      testTitle: test.title,
      score,
      total: questions.length,
      submittedAt: new Date().toISOString(),
    };
    submitTestResult(student.rollNumber, result);
    setSubmitted(true);
  };

  if (submitted) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="card text-center" style={{ maxWidth: 480, margin: "0 auto" }}>
        <div className="result-score-ring" style={{ "--pct": pct }}>
          <div className="inner"><b>{score}/{questions.length}</b><span>Score</span></div>
        </div>
        <h3>Test submitted successfully!</h3>
        <p style={{ color: "var(--ink-soft)", margin: "8px 0 20px" }}>Your result has been saved to your dashboard.</p>
        <button className="btn btn-primary" onClick={onFinish}>Back to Tests</button>
      </div>
    );
  }

  return (
    <div className="card" style={{ maxWidth: 620, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
        <b style={{ color: "var(--navy)" }}>{test.title}</b>
        <span style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>Question {step + 1} of {questions.length}</span>
      </div>
      <div className="quiz-progress"><div style={{ width: `${progress}%` }} /></div>

      <h3 style={{ marginBottom: 20 }}>{q.q}</h3>
      {q.options.map((opt, i) => (
        <button key={i} type="button" className={`option-btn ${answers[q.id] === i ? "selected" : ""}`} onClick={() => select(i)}>
          <span className="letter">{LETTERS[i]}</span> {opt}
        </button>
      ))}

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 22 }}>
        <button className="btn btn-outline btn-sm" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>Previous</button>
        {step < questions.length - 1 ? (
          <button className="btn btn-navy btn-sm" disabled={answers[q.id] === undefined} onClick={() => setStep((s) => s + 1)}>Next Question</button>
        ) : (
          <button className="btn btn-primary btn-sm" disabled={answers[q.id] === undefined} onClick={handleSubmit}>Submit Test</button>
        )}
      </div>
    </div>
  );
}
