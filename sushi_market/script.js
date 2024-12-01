let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

// Parallax effect on scroll
window.addEventListener("scroll", () => {
  let value = window.scrollY;

  // Moon parallax motion
  if (moon) {
    moon.style.left = value * 0.9 + "px"; // Linear left movement
    moon.style.top = Math.pow(value * 0.05, 2) + "px"; // Downward curve (quadratic)
  }

  // Desert Moon enlarges and moves downward as the user scrolls
  if (desert_moon) {
    // Start from the center and move to the right
    let screenWidth = window.innerWidth;
    desert_moon.style.left = screenWidth / 2 + value * 0.5 + "px"; // Move horizontally from center to right

    // Increase the size of the desert-moon and move downward
    let scale = 1 + value * 0.001; // Enlarge gradually as the user scrolls
    desert_moon.style.transform = `scaleX(-1) scale(${scale})`; // Reflect and scale

    // Vertical movement down
    desert_moon.style.top = 100 + value * 0.1 + "px"; // Move downward as the user scrolls
  }

  // Text parallax
  if (text) text.style.top = 80 + value * -0.2 + "%";

  // Train parallax
  if (train) train.style.left = value * 0.9 + "px";

  // Man parallax
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
