const body = document.querySelector("main");
const div = document.body;
body.addEventListener("mousemove", (evt) => {
  div.style.setProperty("--y", evt.y + "px");
  div.style.setProperty("--x", evt.x + "px");
});
