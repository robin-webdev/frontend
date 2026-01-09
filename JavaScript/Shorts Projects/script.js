const data = [
  {
    channel: "The Kangaroo TV",
    title: "Learn how to make a spotlight effect using CapCut",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5er6sm81aFQi2oKkHrP2ITdu1tYJlCK-8A&s",
    like: 1234,
    isLiked: false,
    dislike: 59,
    isDisLiked: true,
    comments: 56,
    muted: true,
  },
  {
    channel: "Code With Robin",
    title: "Scroll snapping in CSS explained simply",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsoCW3WaDZn2ZUJT1bnVdDi6jFu5CUZJjl6g&s",
    like: 982,
    isLiked: true,
    dislike: 21,
    isDisLiked: false,
    comments: 34,
    muted: true,
  },
  {
    channel: "Design Dose",
    title: "Minimal UI tricks you should steal",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrb-kLFlB77OwzvHbU1xME1lAFUymy7RJ2JQ&s",
    like: 2145,
    isLiked: false,
    dislike: 88,
    isDisLiked: false,
    comments: 143,
    muted: true,
  },
  {
    channel: "Dev Shorts",
    title: "Flexbox vs Grid in 60 seconds",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWasXqs1RQ6qU5oWatmmMMWdgkN2lFouFP1A&s",
    like: 1567,
    isLiked: false,
    dislike: 42,
    isDisLiked: false,
    comments: 79,
    muted: true,
  },
  {
    channel: "Logic Lab",
    title: "Why most beginners misuse JavaScript arrays",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRbjkvmoT-Xhv4FojNXJ3axbesyn2zsiicw&s",
    like: 3012,
    isLiked: true,
    dislike: 64,
    isDisLiked: false,
    comments: 201,
    muted: true,
  },
  {
    channel: "UI Academy",
    title: "Build a TikTok-style scroll experience with pure CSS",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08m9OCrNl3XqLrQWeZ064i3lN1LSETzjmxQ&s",
    like: 1876,
    isLiked: false,
    dislike: 33,
    isDisLiked: false,
    comments: 98,
    muted: true,
  },
];

function reload() {
  const like = document.querySelectorAll(".likecont");
  const dislike = document.querySelectorAll(".dislikecont");
  //   console.log(like, dislike);
  data.forEach((item, i) => {
    like[i].innerHTML = `<i class=" ${
      item.isLiked
        ? "active like ri-thumb-up-fill"
        : "nonactive like ri-thumb-up-line"
    }"></i>
        ${item.like}`;
    dislike[i].innerHTML = `<i class=" ${
      item.isDisLiked
        ? "active dislike ri-thumb-down-fill"
        : "nonactive dislike ri-thumb-down-line"
    }"></i>
              ${item.dislike}`;
  });

  document.querySelectorAll(".like").forEach((item, i) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        data[i].isLiked = false;
        data[i].like--;
      } else {
        data[i].isLiked = true;
        data[i].like++;
      }
      reload();
    });
  });

  document.querySelectorAll(".dislike").forEach((item, i) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        data[i].isDisLiked = false;
        data[i].dislike--;
      } else {
        data[i].isDisLiked = true;
        data[i].dislike++;
      }
      reload();
    });
  });
}

const showData = () => {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  data.forEach((item, i) => {
    container.innerHTML += ` <div class="reel">
          <div class="dets">
          <div class="inside">
              <img
                src="${item.avatar}"
                alt=""
              />
              <div class="channel">${item.channel}</div>
            </div>
            <div class="title">
              ${item.title}
            </div>
          </div>
          <video
            loop playsinline preload="metadata"
          ${item.muted ? "muted" : ""} autoplay  src="assets/Video-${
      i + 1
    }.mp4"></video>
          <div class="action">
            <div class="likecont">
            </div>
            <div class="dislikecont">
            </div>
            <div>
              <i class="ri-message-3-line"></i>
              ${item.comments}
            </div>
            <div>
              <i class="ri-reply-line"></i>
            </div>
          </div>
        </div>`;
  });
  reload();
};

showData();
const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;

      if (entry.intersectionRatio === 0) {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      }

      if (entry.intersectionRatio >= 0.6) {
        video.play();
        video.muted = false;
        video.volume = 0.3;
      }
    });
  },
  {
    threshold: [0, 0.6],
  }
);
videos.forEach((video) => observer.observe(video));
