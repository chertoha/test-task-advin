export class LangSelect {
  constructor(container) {
    this.box = document.getElementById(container);
    this.btn = this.box.querySelector(".js-lang-btn");
    this.list = this.box.querySelector(".js-lang-list");
    this.value = this.box.querySelector(".js-lang-value");

    this.#init();
  }

  #init() {
    this.btn.addEventListener("click", (e) => {
      this.list.classList.add("is-open");
    });

    this.list.addEventListener("click", (e) => {
      if (e.target.classList.contains("js-lang-link")) {
        e.preventDefault();
        const value = e.target.innerText;

        const langButtonValues = document.querySelectorAll(".js-lang-value");
        langButtonValues.forEach((ref) => {
          ref.innerText = value;
        });

        this.list.classList.remove("is-open");
      }
    });
  }
}
