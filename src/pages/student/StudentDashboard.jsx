import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { navigate } from "../../router";
import ViewProfile from "./ViewProfile";
import ViewResult from "./ViewResult";
import AvailableTests from "./AvailableTests";
import { IconUser, IconTrophy, IconClipboard, IconLogout } from "../../components/Icons";

const TABS = [
  { key: "profile", label: "View Profile", icon: IconUser },
  { key: "result", label: "View Result", icon: IconTrophy },
  { key: "tests", label: "Available Tests", icon: IconClipboard },
];

export default function StudentDashboard() {
  const { currentStudent, logout } = useAuth();
  const [tab, setTab] = useState("profile");

  if (!currentStudent) {
    return (
      <section className="section-cream" style={{ minHeight: "60vh" }}>
        <div className="container text-center">
          <h2>Please log in to view your dashboard</h2>
          <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={() => navigate("/login")}>Go to Login</button>
        </div>
      </section>
    );
  }

  const initials = currentStudent.fullName.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

  return (
    <section className="section-cream">
      <div className="container">
        <div className="dash-shell">
          <aside className="dash-side">
            <div className="dash-profile">
              <div className="dash-avatar">{initials}</div>
              <b>{currentStudent.fullName}</b>
              <span>{currentStudent.rollNumber}</span>
            </div>
            <nav className="dash-nav">
              {TABS.map((t) => (
                <button key={t.key} className={tab === t.key ? "active" : ""} onClick={() => setTab(t.key)}>
                  <t.icon width={18} height={18} /> {t.label}
                </button>
              ))}
              <button onClick={() => { logout(); navigate("/"); }}>
                <IconLogout width={18} height={18} /> Logout
              </button>
            </nav>
          </aside>

          <main className="dash-main">
            {tab === "profile" && <ViewProfile student={currentStudent} />}
            {tab === "result" && <ViewResult student={currentStudent} />}
            {tab === "tests" && <AvailableTests student={currentStudent} />}
          </main>
        </div>
      </div>
    </section>
  );
}
