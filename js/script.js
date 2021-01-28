const sliderRow = document.querySelector(".slider-row");
const sliderItems = sliderRow.querySelectorAll("img");
const itemWidth = sliderItems[0].width;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let count = 0;

next.addEventListener("click", () => {
  next.disabled = true;
  count += 1;

  if (count === sliderItems.length) {
    count = 0;
    sliderRow.style.left = -itemWidth * count + "px";
  } else {
    sliderRow.style.left = -itemWidth * count + "px";
  }

  setTimeout(() => {
    next.disabled = false;
  }, 1000);
});

prev.addEventListener("click", () => {
  prev.disabled = true;
  count -= 1;

  if (count < 0) {
    count = 3;
    sliderRow.style.left = -itemWidth * count + "px";
  } else {
    sliderRow.style.left = -itemWidth * count + "px";
  }

  setTimeout(() => {
    prev.disabled = false;
  }, 1000);
});
