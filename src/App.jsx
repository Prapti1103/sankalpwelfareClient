import { useRoute } from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ResultPage from "./pages/Result";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import StudentSignup from "./pages/StudentSignup";
import StudentDashboard from "./pages/student/StudentDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CoordinatorDashboard from "./pages/coordinator/CoordinatorDashboard";

const PAGES = {
  "/": Home,
  "/about": About,
  "/result": ResultPage,
  "/contact": Contact,
  "/login": Login,
  "/signup": StudentSignup,
  "/student": StudentDashboard,
  "/admin": AdminDashboard,
  "/coordinator": CoordinatorDashboard,
};

export default function App() {
  const route = useRoute();
  const Page = PAGES[route] || Home;

  return (
    <>
      <Navbar route={route} />
      <Page />
      <Footer />
    </>
  );
}
