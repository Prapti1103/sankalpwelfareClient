import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { navigate } from "../router";
import { DISTRICTS, getTalukas, getCenters, MEDIUMS, CLASSES } from "../data/mockData";

const initialForm = {
  fullName: "", dob: "", gender: "", mobile: "", email: "",
  className: "", medium: "", district: "", taluka: "", centerId: "",
  schoolName: "", password: "", confirmPassword: "",
};

export default function StudentSignup() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const { registerStudent } = useAuth();

  const talukas = getTalukas(form.district);
  const centers = getCenters(form.district, form.taluka);
  const selectedCenter = centers.find((c) => c.id === form.centerId);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => {
      const next = { ...f, [name]: value };
      if (name === "district") { next.taluka = ""; next.centerId = ""; }
      if (name === "taluka") { next.centerId = ""; }
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Password and Confirm Password do not match.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!selectedCenter) {
      setError("Please select district, taluka and exam center.");
      return;
    }

    const record = registerStudent({
      fullName: form.fullName,
      dob: form.dob,
      gender: form.gender,
      mobile: form.mobile,
      email: form.email,
      className: form.className,
      medium: form.medium,
      district: form.district,
      taluka: form.taluka,
      centerId: selectedCenter.id,
      centerName: selectedCenter.name,
      coordinator: selectedCenter.coordinator,
      schoolName: form.schoolName,
      password: form.password,
    });

    setSuccess(record);
    setForm(initialForm);
  };

  if (success) {
    return (
      <section className="section-cream" style={{ minHeight: "70vh" }}>
        <div className="container">
          <div className="form-card text-center">
            <div className="medallion" style={{ margin: "0 auto 18px" }}><span>✓</span></div>
            <h2>Registration Successful!</h2>
            <p style={{ color: "var(--ink-soft)", margin: "12px 0 24px" }}>
              Welcome, {success.fullName}. Your student roll number is below — please save it,
              you'll need it to log in.
            </p>
            <div className="exam-pill" style={{ fontSize: "1.1rem", padding: "12px 24px" }}>{success.rollNumber}</div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28 }}>
              <button className="btn btn-primary" onClick={() => navigate("/login")}>Go to Login</button>
              <button className="btn btn-outline" onClick={() => setSuccess(null)}>Register Another Student</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-cream">
      <div className="container">
        <div className="form-card">
          <div className="text-center" style={{ marginBottom: 8 }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Student Registration</span>
            <h2 style={{ margin: "10px 0 26px" }}>Register for the Sankalp GK Examination</h2>
          </div>

          {error && <div className="form-msg error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field"><label>Full Name</label><input name="fullName" required value={form.fullName} onChange={handleChange} placeholder="Student's full name" /></div>
              <div className="field"><label>Date of Birth</label><input type="date" name="dob" required value={form.dob} onChange={handleChange} /></div>

              <div className="field">
                <label>Gender</label>
                <select name="gender" required value={form.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option>Male</option><option>Female</option><option>Other</option>
                </select>
              </div>
              <div className="field"><label>Mobile Number</label><input name="mobile" required pattern="[0-9]{10}" title="10 digit mobile number" value={form.mobile} onChange={handleChange} placeholder="10-digit mobile number" /></div>

              <div className="field"><label>Email (optional)</label><input type="email" name="email" value={form.email} onChange={handleChange} placeholder="parent@email.com" /></div>
              <div className="field">
                <label>Class</label>
                <select name="className" required value={form.className} onChange={handleChange}>
                  <option value="">Select Class</option>
                  {CLASSES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>

              <div className="field">
                <label>Medium</label>
                <select name="medium" required value={form.medium} onChange={handleChange}>
                  <option value="">Select Medium</option>
                  {MEDIUMS.map((m) => <option key={m}>{m}</option>)}
                </select>
              </div>
              <div className="field"><label>School Name</label><input name="schoolName" required value={form.schoolName} onChange={handleChange} placeholder="Current school name" /></div>

              <div className="field">
                <label>District</label>
                <select name="district" required value={form.district} onChange={handleChange}>
                  <option value="">Select District</option>
                  {DISTRICTS.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div className="field">
                <label>Taluka</label>
                <select name="taluka" required value={form.taluka} onChange={handleChange} disabled={!form.district}>
                  <option value="">{form.district ? "Select Taluka" : "Select District first"}</option>
                  {talukas.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>

              <div className="field" style={{ gridColumn: "1 / -1" }}>
                <label>Exam Center <span className="hint">— coordinator is assigned automatically</span></label>
                <select name="centerId" required value={form.centerId} onChange={handleChange} disabled={!form.taluka}>
                  <option value="">{form.taluka ? "Select Exam Center" : "Select Taluka first"}</option>
                  {centers.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>

              {selectedCenter && (
                <div className="field" style={{ gridColumn: "1 / -1" }}>
                  <div className="profile-item">
                    <span>Assigned Coordinator</span>
                    <b>{selectedCenter.coordinator}</b>
                  </div>
                </div>
              )}

              <div className="field"><label>Create Password</label><input type="password" name="password" required value={form.password} onChange={handleChange} placeholder="Minimum 6 characters" /></div>
              <div className="field"><label>Confirm Password</label><input type="password" name="confirmPassword" required value={form.confirmPassword} onChange={handleChange} placeholder="Re-enter password" /></div>
            </div>

            <label className="checkbox-row" style={{ marginTop: 20 }}>
              <input type="checkbox" required />
              <span>I confirm the above details are correct and I accept the Sankalp Foundation Terms & Conditions.</span>
            </label>

            <button className="btn btn-primary btn-block" style={{ marginTop: 22 }} type="submit">Register & Get Roll Number</button>
            <p style={{ textAlign: "center", marginTop: 16, fontSize: "0.9rem" }}>
              Already registered? <a className="link-inline" href="#/login">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
