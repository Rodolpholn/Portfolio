export function initMenu() {
  const toggleTheme = document.getElementById("toggleTheme");
  const rootHtml = document.documentElement;
  const menuLinks = document.querySelectorAll(".menu__link");

  //  Recupera o tema salvo ao carregar a página
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    rootHtml.setAttribute("data-theme", savedTheme);
    // Ajusta o ícone para corresponder ao tema salvo
    if (savedTheme === "light") {
      toggleTheme.classList.remove("bi-sun");
      toggleTheme.classList.add("bi-moon");
    }
  }

  // Lógica do Tema
  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      const currentTheme = rootHtml.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      rootHtml.setAttribute("data-theme", newTheme);

      // Opcional: Salvar preferência do usuário
      localStorage.setItem("theme", newTheme);
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
