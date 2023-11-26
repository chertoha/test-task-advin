const mobileMenu = document.querySelector(".js-menu");
const openBtn = document.querySelector(".js-open-menu");
const closeBtn = document.querySelector(".js-close-menu");
const headerNavList = document.querySelector("#js-header-nav-list");

// close with Esc callback
const closeMenuWithEsc = (e) => {
  if (e.code === "Escape") {
    closeMenu();
  }
};

// close by clicking outside menu callback
const closeMenuByClickOutside = (e) => {
  if (!e.target.closest(".js-menu") && !e.target.closest(".js-open-menu")) {
    closeMenu();
  }
};

// on open menu button click
openBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
  openBtn.setAttribute("aria-expanded", true);
  document.body.classList.add("no-scroll");

  window.addEventListener("keydown", closeMenuWithEsc);
  window.addEventListener("click", closeMenuByClickOutside);
});

//on close button click
closeBtn.addEventListener("click", closeMenu);

//on viewport change
window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  closeMenu();
});

// on navigation links click
headerNavList.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-header-nav-link")) {
    closeMenu();
  }
});

// close menu - common function
function closeMenu() {
  mobileMenu.classList.remove("is-open");
  openBtn.setAttribute("aria-expanded", false);
  document.body.classList.remove("no-scroll");

  window.removeEventListener("keydown", closeMenuWithEsc);
  window.removeEventListener("click", closeMenuByClickOutside);
}
