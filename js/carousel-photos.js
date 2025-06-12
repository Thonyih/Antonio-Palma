class Carousel {
  constructor() {
    this.container = document.querySelector(".mvp-carousel");
    this.carousel = this.container.querySelector(".mvp-carousel-wrapper");
    this.cards = Array.from(this.carousel.querySelectorAll(".mvp-card"));
    this.prevBtn = this.container.querySelector(".mvp-carousel__prevBtn");
    this.nextBtn = this.container.querySelector(".mvp-carousel__nextBtn");
    this.numVisible = parseInt(this.container.dataset.visible);
    this.activeIndex = this.cards.length - 3;
    this.render("z-index-low");
    this.setupEventListeners();
    this.setupResizeListener();

    if (this.activeIndex >= this.cards.length - 3) {
      this.nextBtn.classList.add("isHidden");
    }
  }

  next() {
    this.activeIndex++;
    this.render("z-index-low");
    this.prevBtn.classList.remove("isHidden");

    if (this.activeIndex >= this.cards.length - 3) {
      this.nextBtn.classList.add("isHidden");
    }
  }

  prev() {
    this.activeIndex--;
    this.render("z-index-high");
    this.nextBtn.classList.remove("isHidden");

    if (this.activeIndex <= -2) {
      this.prevBtn.classList.toggle("isHidden");
    }
  }

  render(zIndex) {
    const cardWidth = this.cards[0].offsetWidth;
    const offsetX = -(this.activeIndex * cardWidth);
    const cardLength = this.cards.length;

    this.carousel.style.transform = `translateX(${offsetX}px)`;

    this.cards.forEach((card, index) => {
      const position = index - this.activeIndex;
      const isVisible = position >= 0 && position < this.numVisible;
      const classes = {
        "mvp-card--active": isVisible && position === 2,
        "mvp-card--middle": isVisible && position === 1,
        "mvp-card--bottom": isVisible && position === 0,
      };

      if (this.activeIndex + 2 < cardLength) {
        card.classList.toggle(zIndex, !isVisible);
        card.classList.toggle("isHidden", !isVisible);
        Object.entries(classes).forEach(([className, condition]) => {
          card.classList.toggle(className, condition);
        });
      }
    });
  }

  setupEventListeners() {
    this.nextBtn.addEventListener("click", () => this.next());
    this.prevBtn.addEventListener("click", () => this.prev());
  }

  setupResizeListener() {
    window.addEventListener("resize", () => this.render());
  }
}

const carousel = new Carousel();

let startX = 0;
let currentX = 0;
let isDragging = false;

const carouselWrapper = document.querySelector(".mvp-carousel-wrapper");

carouselWrapper.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

carouselWrapper.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
});

carouselWrapper.addEventListener("touchend", () => {
  const diff = currentX - startX;
  if (Math.abs(diff) > 50) {
    // threshold
    if (diff < 0 && carousel.activeIndex < carousel.cards.length - 3) {
      // Swipe left: go to next card if not at end
      carousel.next();
    } else if (diff > 0 && carousel.activeIndex > -2) {
      // Swipe right: go to previous card if not at start
      carousel.prev();
    }
  }
  isDragging = false;
});
