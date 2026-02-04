`use strict`;

export class AboutSection {
  constructor(rootSelector = "#about") {
    this.root = document.querySelector(rootSelector);
    if (!this.root) throw new Error(`Missing ${rootSelector}`);
  }

  init() {
    this.root.addEventListener("click", this.onClick.bind(this));
  }

  onClick() {
    console.log("About section clicked!");
  }
}
