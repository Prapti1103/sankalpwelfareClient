# Sankalp Foundation — Exam Portal (Frontend)

React + Vite frontend for the Sankalp Foundation **State Level General Knowledge
Examination** (Std 1st – 8th, Marathi / English / Semi-English medium).

This is a **frontend-only** build. There is no backend — student registrations,
logins and test results are stored in the browser's `localStorage`, and admin /
coordinator logins use static demo credentials. Swap these for real API calls
whenever a backend is ready (see "Connecting a real backend" below).

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## What's included

- **Home** — hero, notice ticker, feature highlights, "how it works", and a
  state toppers preview.
- **About** — foundation story, mission/vision, and the District → Taluka →
  Center → Coordinator structure.
- **Result** — public roll-number result lookup + full toppers list.
- **Contact** — address, phone, email, embedded map, and a contact form.
- **Student Registration** — full signup form with dependent District →
  Taluka → Exam Center dropdowns (coordinator auto-assigned from the center),
  class, medium, school, and password fields. Issues a roll number on submit.
- **Login** — single page with three role tabs: **Student**, **Coordinator**,
  **Admin**.
  - Student logs in with the Roll Number + password created at signup.
  - Coordinator / Admin use static demo credentials (shown on the login page):
    - Admin: `admin@sankalpfoundation.org` / `Admin@123`
    - Coordinator: `coordinator@sankalpfoundation.org` / `Coord@123`
- **Student Dashboard** — after login: *View Profile*, *View Result*,
  *Available Tests* (with an in-browser mock GK test you can actually take and
  submit, scoring saved to the student's result history).
- **Admin Dashboard** — overview stats + full registered-student list.
- **Coordinator Dashboard** — students & attempt status overview.

## Project structure

```
src/
  components/     Navbar, Footer, Ticker, shared icon set
  pages/          Home, About, Result, Contact, Login, StudentSignup
  pages/student/  StudentDashboard, ViewProfile, ViewResult, AvailableTests, TakeTest
  pages/admin/    AdminDashboard
  pages/coordinator/ CoordinatorDashboard
  data/           mockData.js — districts/talukas/centers/coordinators, static
                  credentials, sample questions & toppers. Edit this file to
                  add real districts, centers and coordinators.
  context/        AuthContext.jsx — registration, login, session & result state
  router.js       Minimal hash-based router (no external routing dependency)
  styles/main.css Design tokens + all component styles
```

## Editing the exam locations

Open `src/data/mockData.js` and edit `LOCATION_TREE` — add districts, talukas,
exam centers and coordinator names there. The registration form's dropdowns
and coordinator auto-assignment update automatically.

## Connecting a real backend

Everything data-related is isolated in `src/context/AuthContext.jsx` and
`src/data/mockData.js`. To go live:

1. Replace `registerStudent`, `loginStudent`, `loginStaff` and
   `submitTestResult` in `AuthContext.jsx` with calls to your API.
2. Replace the static `LOCATION_TREE` / `STATIC_CREDENTIALS` /
   `AVAILABLE_TESTS` in `mockData.js` with data fetched from your backend.
3. Everything else (pages, components, styling) stays the same.
