let h1 = document.querySelector("h1");

const letters = Array.from({ length: 26 }).map((_, i) => {
  return String.fromCharCode(65 + i);
});

const random = () => {
  return Math.floor(Math.random() * 25);
};

h1.addEventListener("mouseover", () => {
  let arr = h1.textContent.split("");
  let og = [...arr];
  arr.forEach((ele, i) => {
    let id = setInterval(() => {
      arr[i] = letters[random()];
      str = arr.join("");
      h1.textContent = str;
    }, 100);

    setTimeout(() => {
      clearInterval(id);
      arr[i] = og[i];
      str = arr.join("");
      h1.textContent = str;
    }, 50 * i);
  });
});
