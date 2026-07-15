import { IconTrophy } from "../../components/Icons";

export default function ViewResult({ student }) {
  const results = student.results || [];

  return (
    <div>
      <h2 style={{ marginBottom: 6 }}>My Results</h2>
      <p style={{ color: "var(--ink-soft)", marginBottom: 26 }}>Scores from every test you've attempted so far.</p>

      {results.length === 0 ? (
        <div className="empty-state card">
          <div className="medallion"><span><IconTrophy width={20} height={20} /></span></div>
          <h3>No results yet</h3>
          <p>Attempt a test from the "Available Tests" tab to see your result here.</p>
        </div>
      ) : (
        <div className="table-wrap">
          <table>
            <thead><tr><th>Test</th><th>Date</th><th>Score</th><th>Percentage</th></tr></thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={i}>
                  <td>{r.testTitle}</td>
                  <td>{new Date(r.submittedAt).toLocaleDateString()}</td>
                  <td>{r.score} / {r.total}</td>
                  <td>{Math.round((r.score / r.total) * 100)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
