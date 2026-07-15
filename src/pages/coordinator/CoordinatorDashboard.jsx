import { useAuth } from "../../context/AuthContext";
import { navigate } from "../../router";
import { IconLogout, IconUser } from "../../components/Icons";

export default function CoordinatorDashboard() {
  const { session, students, logout } = useAuth();

  if (session?.role !== "coordinator") {
    return (
      <section className="section-cream" style={{ minHeight: "60vh" }}>
        <div className="container text-center">
          <h2>Coordinator access only</h2>
          <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={() => navigate("/login")}>Go to Login</button>
        </div>
      </section>
    );
  }

  const attempted = students.filter((s) => (s.results || []).length > 0);

  return (
    <section className="section-cream">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30, flexWrap: "wrap", gap: 12 }}>
          <div>
            <span className="eyebrow">Coordinator Panel</span>
            <h2 style={{ marginTop: 10 }}>Welcome, {session.name}</h2>
          </div>
          <button className="btn btn-outline btn-sm" onClick={() => { logout(); navigate("/"); }}><IconLogout width={16} height={16} /> Logout</button>
        </div>

        <div className="grid-3" style={{ marginBottom: 40 }}>
          <div className="stat-card"><b>{students.length}</b><span>Students Under My Centers</span></div>
          <div className="stat-card"><b>{attempted.length}</b><span>Tests Completed</span></div>
          <div className="stat-card"><b>{students.length - attempted.length}</b><span>Pending Attempts</span></div>
        </div>

        <div className="section-head" style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: "1.4rem" }}>Students & Exam Status</h2>
        </div>

        {students.length === 0 ? (
          <div className="empty-state card">
            <div className="medallion"><span><IconUser width={20} height={20} /></span></div>
            <h3>No students to show yet</h3>
            <p>Students registered under your exam centers will be listed here.</p>
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead><tr><th>Roll No.</th><th>Name</th><th>Class</th><th>Center</th><th>Status</th></tr></thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.rollNumber}>
                    <td>{s.rollNumber}</td><td>{s.fullName}</td><td>{s.className}</td><td>{s.centerName}</td>
                    <td>{(s.results || []).length > 0 ? "Attempted" : "Not Attempted"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
