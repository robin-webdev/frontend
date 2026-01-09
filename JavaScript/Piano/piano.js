const body = document.body;

const pianoKeys = Array.from({ length: 26 }, (_, i) => ({
  key: String.fromCharCode(65 + i),
  sound: `${28 + i}.mp3`,
}));
 
pianoKeys.forEach((act) => {
  const aud = new Audio(`./assets/${act.sound}`);
  //   aud.play();
});

function getRandom(m) {
  return Math.floor(Math.random() * m);
}

body.addEventListener("keydown", (evt) => {[]
  let { key } = evt;
  const act = pianoKeys.find((a) => a.key === key.toUpperCase());

  if (!act) return;

  const aud = new Audio(`./assets/${act.sound}`);[]
  aud.play();

  const keys = document.querySelectorAll(".justkey");
  const rand = getRandom(keys.length);
  keys.forEach((key2, i) => {
    if (i === rand) {
      let ele = keys[i];
      console.log(ele);
      ele.style.backgroundColor = key2.classList.contains("keyB")
        ? "gray"
        : "gray";

      setTimeout(() => {
        ele.style.backgroundColor = key2.classList.contains("keyB")
          ? "black"
          : "white";
      }, 100);
    }
  });
});
