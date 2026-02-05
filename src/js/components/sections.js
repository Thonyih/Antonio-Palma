`use strict`;

export class AboutSection {
  constructor(rootSelector) {
    this.root = document.querySelector(rootSelector);
    if (!this.root) throw new Error(`Missing ${rootSelector}`);
  }

  init() {
    this.root.addEventListener("click", this.onClick.bind(this));
  }

  onClick() {
    console.log(this.root.id + " section clicked!");
  }
}
