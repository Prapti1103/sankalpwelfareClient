import { useAuth } from "../../context/AuthContext";
import { navigate } from "../../router";
import { DISTRICTS } from "../../data/mockData";
import { IconLogout, IconUser } from "../../components/Icons";

export default function AdminDashboard() {
  const { session, students, logout } = useAuth();

  if (session?.role !== "admin") {
    return (
      <section className="section-cream" style={{ minHeight: "60vh" }}>
        <div className="container text-center">
          <h2>Admin access only</h2>
          <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={() => navigate("/login")}>Go to Login</button>
        </div>
      </section>
    );
  }

  const totalResults = students.reduce((acc, s) => acc + (s.results?.length || 0), 0);

  return (
    <section className="section-cream">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30, flexWrap: "wrap", gap: 12 }}>
          <div>
            <span className="eyebrow">Admin Panel</span>
            <h2 style={{ marginTop: 10 }}>Welcome, {session.name}</h2>
          </div>
          <button className="btn btn-outline btn-sm" onClick={() => { logout(); navigate("/"); }}><IconLogout width={16} height={16} /> Logout</button>
        </div>

        <div className="grid-4" style={{ marginBottom: 40 }}>
          <div className="stat-card"><b>{students.length}</b><span>Registered Students</span></div>
          <div className="stat-card"><b>{DISTRICTS.length}</b><span>Districts</span></div>
          <div className="stat-card"><b>{totalResults}</b><span>Tests Attempted</span></div>
          <div className="stat-card"><b>340+</b><span>Exam Centers</span></div>
        </div>

        <div className="section-head" style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: "1.4rem" }}>Registered Students</h2>
        </div>

        {students.length === 0 ? (
          <div className="empty-state card">
            <div className="medallion"><span><IconUser width={20} height={20} /></span></div>
            <h3>No students registered yet</h3>
            <p>Once students sign up, their details will appear here.</p>
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead><tr><th>Roll No.</th><th>Name</th><th>Class</th><th>District</th><th>Center</th><th>Coordinator</th></tr></thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.rollNumber}>
                    <td>{s.rollNumber}</td><td>{s.fullName}</td><td>{s.className}</td>
                    <td>{s.district}</td><td>{s.centerName}</td><td>{s.coordinator}</td>
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
