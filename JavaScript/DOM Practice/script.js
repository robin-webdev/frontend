const img = document.querySelector("img");
const heart = document.querySelector("i");

img.addEventListener("dblclick", function () {
  heart.style.top = "50%";
  heart.style.opacity = 1;
  heart.style.transform = "rotate(0deg)";
  heart.style.scale = 4;
  setTimeout(function () {
    heart.style.opacity = 0;
    heart.style.scale = 0;
    heart.style.top = "-50%";
    heart.style.transform = "rotate(90deg)";
  }, 400);
  setTimeout(function () {
    heart.style.top = "50%";
  }, 800);
});
