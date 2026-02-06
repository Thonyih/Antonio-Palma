`use sctrict`;

import { SectionExpand } from "./components/sections.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".open-menu-row").forEach((row) => {
    const targetId = row.dataset.target;
    const sectionExpand = new SectionExpand(`#${row.id}`, targetId);

    sectionExpand.init();
  });
});
