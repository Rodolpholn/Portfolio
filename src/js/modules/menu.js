export function initMenu() {
  const toggleTheme = document.getElementById("toggleTheme");
  const rootHtml = document.documentElement;

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      const currentTheme = rootHtml.getAttribute("data-theme");

      if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light");
      } else {
        rootHtml.setAttribute("data-theme", "dark");
      }

      // Alterna os ícones do Bootstrap Icons
      toggleTheme.classList.toggle("bi-sun");
      toggleTheme.classList.toggle("bi-moon");
    });
  }
}
