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
      let newTheme;

      if (currentTheme === "dark") {
        newTheme = "light";
      } else {
        newTheme = "dark";
      }

      rootHtml.setAttribute("data-theme", newTheme);

      //  Salva a escolha do usuário no localStorage
      localStorage.setItem("theme", newTheme);

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
