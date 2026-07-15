import { useState } from "react";
import logo from "../assets/sankalp-logo.png";
import { IconPhone, IconMail, IconMenu, IconClose, IconLogout } from "./Icons";
import { navigate } from "../router";
import { useAuth } from "../context/AuthContext";

const LINKS = [
  { href: "#/", label: "Home" },
  { href: "#/result", label: "Result" },
  { href: "#/about", label: "About" },
  { href: "#/contact", label: "Contact" },
];

export default function Navbar({ route }) {
  const [open, setOpen] = useState(false);
  const { session, logout } = useAuth();

  const dashboardHref = session?.role === "student" ? "#/student" : session?.role === "admin" ? "#/admin" : session?.role === "coordinator" ? "#/coordinator" : null;

  return (
    <header>
      <div className="topbar">
        <div className="container">
          <div className="topbar-contacts">
            <a href="tel:+919130093832"><IconPhone width={14} height={14} /> +91 91300 93832</a>
            <a href="mailto:info@sankalpfoundation.org"><IconMail width={14} height={14} /> info@sankalpfoundation.org</a>
          </div>
          <div className="topbar-links">
            <a href="#/contact">Help Desk</a>
            <a href="#/about">About Us</a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <a href="#/" className="brand">
            <img src={logo} alt="Sankalp Foundation logo" />
            <div>
              <div className="brand-name">Sankalp Foundation</div>
              <div className="brand-tag">State Level General Knowledge Examination</div>
            </div>
          </a>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={route === l.href.replace("#", "") ? "active" : ""} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            {dashboardHref && (
              <a href={dashboardHref} className={route === dashboardHref.replace("#", "") ? "active" : ""} onClick={() => setOpen(false)}>
                Dashboard
              </a>
            )}
          </div>

          <div className="nav-actions">
            {!session ? (
              <>
                <button className="btn btn-outline btn-sm" onClick={() => navigate("/signup")}>Student Signup</button>
                <button className="btn btn-navy btn-sm" onClick={() => navigate("/login")}>Login</button>
              </>
            ) : (
              <button className="btn btn-outline btn-sm" onClick={() => { logout(); navigate("/"); }}>
                <IconLogout width={16} height={16} /> Logout
              </button>
            )}
            <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
