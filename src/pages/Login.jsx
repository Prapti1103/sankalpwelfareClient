import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { navigate } from "../router";
import { STATIC_CREDENTIALS } from "../data/mockData";

const ROLES = [
  { key: "student", label: "Student" },
  { key: "coordinator", label: "Coordinator" },
  { key: "admin", label: "Admin" },
];

export default function Login() {
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({ id: "", password: "" });
  const [error, setError] = useState("");
  const { loginStudent, loginStaff } = useAuth();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const result = role === "student"
      ? loginStudent(form.id, form.password)
      : loginStaff(role, form.id, form.password);

    if (!result.ok) { setError(result.message); return; }
    navigate(role === "student" ? "/student" : role === "admin" ? "/admin" : "/coordinator");
  };

  return (
    <section className="section-cream" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <div className="form-card">
          <div className="text-center" style={{ marginBottom: 8 }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Portal Login</span>
            <h2 style={{ margin: "10px 0 26px" }}>Welcome back to Sankalp Foundation</h2>
          </div>

          <div className="role-tabs">
            {ROLES.map((r) => (
              <button key={r.key} type="button" className={`role-tab ${role === r.key ? "active" : ""}`} onClick={() => { setRole(r.key); setError(""); setForm({ id: "", password: "" }); }}>
                {r.label}
              </button>
            ))}
          </div>

          {error && <div className="form-msg error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-grid full">
              <div className="field">
                <label>{role === "student" ? "Roll Number" : "Username"}</label>
                <input name="id" required value={form.id} onChange={handleChange} placeholder={role === "student" ? "e.g. SF2026-0001" : `e.g. ${STATIC_CREDENTIALS[role]?.username}`} />
              </div>
              <div className="field">
                <label>Password</label>
                <input name="password" type="password" required value={form.password} onChange={handleChange} placeholder="Enter your password" />
              </div>
            </div>
            <button className="btn btn-primary btn-block" style={{ marginTop: 20 }} type="submit">Login as {ROLES.find((r) => r.key === role).label}</button>
          </form>

          {role !== "student" ? (
            <p style={{ textAlign: "center", marginTop: 18, fontSize: "0.85rem", color: "var(--ink-soft)" }}>
              Demo credentials — <b>{STATIC_CREDENTIALS[role].username}</b> / <b>{STATIC_CREDENTIALS[role].password}</b>
            </p>
          ) : (
            <p style={{ textAlign: "center", marginTop: 18, fontSize: "0.9rem" }}>
              New student? <a className="link-inline" href="#/signup">Register here</a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
