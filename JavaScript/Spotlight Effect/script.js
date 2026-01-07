const body = document.querySelector("main");
console.log(body);
const div = document.querySelector("div");
body.addEventListener("mousemove", (evt) => {
  console.log(evt.x, evt.y);
  div.style.top = evt.y + "px";
  div.style.left = evt.x + "px";
});
