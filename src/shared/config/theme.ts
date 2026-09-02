export const themeStorageKey = "afonso-portfolio-theme";

export const themeInitializationScript = `
  try {
    const theme = window.localStorage.getItem("${themeStorageKey}");
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark");
    if (theme === "light" || theme === "dark") root.classList.add("theme-" + theme);
  } catch {}
`;
