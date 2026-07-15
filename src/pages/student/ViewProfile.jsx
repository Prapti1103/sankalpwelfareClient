export default function ViewProfile({ student }) {
  const rows = [
    ["Roll Number", student.rollNumber],
    ["Full Name", student.fullName],
    ["Date of Birth", student.dob],
    ["Gender", student.gender],
    ["Mobile Number", student.mobile],
    ["Email", student.email || "—"],
    ["Class", student.className],
    ["Medium", student.medium],
    ["School Name", student.schoolName],
    ["District", student.district],
    ["Taluka", student.taluka],
    ["Exam Center", student.centerName],
    ["Assigned Coordinator", student.coordinator],
    ["Registered On", new Date(student.registeredAt).toLocaleDateString()],
  ];

  return (
    <div>
      <h2 style={{ marginBottom: 6 }}>My Profile</h2>
      <p style={{ color: "var(--ink-soft)", marginBottom: 26 }}>Your registration details on file with Sankalp Foundation.</p>
      <div className="profile-grid">
        {rows.map(([label, value]) => (
          <div className="profile-item" key={label}>
            <span>{label}</span>
            <b>{value}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
