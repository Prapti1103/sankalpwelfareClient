import { useEffect, useState } from "react";

// Minimal hash-based router — no external routing dependency required.
export function useRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace("#", "") || "/");

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

export function navigate(path) {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
