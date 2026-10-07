/* Runs synchronously before the stylesheet so the first paint uses the right ink. */
(() => {
  let saved;
  try {
    saved = localStorage.getItem("theme");
  } catch {
    // Private browsing can disable storage; the system preference still works.
  }
  const theme = saved === "light" || saved === "dark"
    ? saved
    : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    "content", theme === "dark" ? "#050B10" : "#f2efe8",
  );
})();
