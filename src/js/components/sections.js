`use strict`;

export class SectionExpand {
  constructor(rootSelector, SectionExpand) {
    this.root = document.querySelector(rootSelector);
    this.rootText = document.getElementById(SectionExpand);
    if (!this.root) throw new Error(`Missing ${rootSelector}`);
  }

  init() {
    this.root.addEventListener("click", this.onClick.bind(this));
  }

  onClick(event) {
    console.log(this.root.id + " section clicked!");

    const clickedRoot = event.currentTarget;
    clickedRoot.scrollIntoView({ behavior: "smooth", block: "start" });

    this.rootText.classList.toggle("is-open");
  }
}
