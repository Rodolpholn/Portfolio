export function initMain() {
  const accordionHeaders = document.querySelectorAll(".accordion__header");
  const menuLinks = document.querySelectorAll(".menu__link");

  // Lógica do Accordion
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionActive = accordionItem.classList.contains("active");

      document.querySelectorAll(".accordion__item").forEach((item) => {
        item.classList.remove("active");
      });

      if (!accordionActive) {
        accordionItem.classList.add("active");
      }
    });
  });

  // Lógica de Link Ativo
  menuLinks.forEach((item) => {
    item.addEventListener("click", () => {
      menuLinks.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
}
