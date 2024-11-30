let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

// Parallax effect on scroll
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  if (moon) moon.style.top = value * 0.9 + "px";
  if (text) text.style.top = 80 + value * -0.2 + "%";
  if (train) train.style.left = value * 0.9 + "px";
  if (desert_moon) desert_moon.style.top = value * 0.3 + "px";
  if (man) man.style.left = value * 0.6 + "px";
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop || document.body.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos / calcHeight) * 100);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  // Apply gradient for the progress
  scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;

  // OPTIONAL: Add percentage as a tooltip or accessible element
  progressValue.setAttribute("aria-label", `Scrolled ${scrollValue}%`);
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
