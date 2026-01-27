export function initMenu() {
  const toggleTheme = document.getElementById("toggleTheme");
  const rootHtml = document.documentElement;
  const menuLinks = document.querySelectorAll(".menu__link");

  // Lógica do Tema
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

  // Lógica dos Links Ativos do Menu
  menuLinks.forEach((item) => {
    item.addEventListener("click", () => {
      menuLinks.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
}
