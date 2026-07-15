import { createContext, useContext, useEffect, useState } from "react";
import { STATIC_CREDENTIALS } from "../data/mockData";

const AuthContext = createContext(null);

const STUDENTS_KEY = "sankalp_students_v1";
const SESSION_KEY = "sankalp_session_v1";

function readStudents() {
  try {
    const raw = localStorage.getItem(STUDENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStudents(list) {
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(list));
}

function generateRollNumber(students) {
  const year = new Date().getFullYear();
  const seq = String(students.length + 1).padStart(4, "0");
  return `SF${year}-${seq}`;
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [students, setStudents] = useState(readStudents());

  useEffect(() => {
    if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else localStorage.removeItem(SESSION_KEY);
  }, [session]);

  const registerStudent = (data) => {
    const rollNumber = generateRollNumber(students);
    const record = {
      ...data,
      rollNumber,
      registeredAt: new Date().toISOString(),
      results: [],
    };
    const updated = [...students, record];
    setStudents(updated);
    writeStudents(updated);
    return record;
  };

  const loginStudent = (rollNumber, password) => {
    const found = students.find(
      (s) => s.rollNumber.toLowerCase() === rollNumber.trim().toLowerCase() && s.password === password
    );
    if (!found) return { ok: false, message: "Invalid Roll Number or Password." };
    setSession({ role: "student", rollNumber: found.rollNumber });
    return { ok: true };
  };

  const loginStaff = (role, username, password) => {
    const creds = STATIC_CREDENTIALS[role];
    if (!creds) return { ok: false, message: "Unknown role." };
    if (creds.username === username.trim() && creds.password === password) {
      setSession({ role, name: creds.name });
      return { ok: true };
    }
    return { ok: false, message: "Invalid username or password." };
  };

  const logout = () => setSession(null);

  const currentStudent = session?.role === "student"
    ? students.find((s) => s.rollNumber === session.rollNumber)
    : null;

  const submitTestResult = (rollNumber, result) => {
    const updated = students.map((s) =>
      s.rollNumber === rollNumber ? { ...s, results: [...s.results, result] } : s
    );
    setStudents(updated);
    writeStudents(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        students,
        currentStudent,
        registerStudent,
        loginStudent,
        loginStaff,
        logout,
        submitTestResult,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
