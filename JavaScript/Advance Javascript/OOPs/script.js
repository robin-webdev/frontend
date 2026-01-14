// class Employee {
//   constructor(name, salary, age, id) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.id = id;
//     this.company = "Sheryians Coding School";
//     this.branch = "Riga, Lativa";
//   }

//   // Function outside constructor automatically added to prototype
//   showDetails() {
//     console.log(
//       `Name : ${this.name}\nAge : ${this.age}\nSalary : ${this.salary}\nId : ${this.id}\nCompany : ${this.company}\nBranch : ${this.branch}`
//     );
//   }
// }

// // this is class expression but hoisting not possible
// let Animal = class {
//   // class code heere
// };

// let mikeTyson = new Employee("Mike Tyson", "$15000", 39, 5698);

// console.log(mikeTyson);
// mikeTyson.showDetails();

// class Developer extends Employee {
//   constructor() {
//     super();
//     this.role = "Developer";
//     this.field = "IT";
//   }
// }

// console.log(new Developer("Mike"));

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   login() {
//     console.log("User logged in!");
//   }
// }

// let robin = new User("Robin", "robin.webdev.me@gmail.com");

// const usfn = function () {
//   return {
//     name: "Robin",
//     login: () => {
//       console.log("User logged in!");
//     },
//   };
// };

// Callback Exercise

// function loginUser(user, cb) {
//   setTimeout(() => {
//     cb({ name: "Robin", id: 34, userName: "robin_webdev" });
//   }, 1000);
// }

// function fetchPermissions(id, cb) {
//   setTimeout(() => {
//     cb(["pasting", "copying", "cutting"]);
//   }, 1000);
// }

// function loadDashboard(pms) {
//   setTimeout(() => {
//     console.log("Dashboard Loaded!");
//   }, 1000);
// }

// loginUser("robin_webdev", function (data) {
//   fetchPermissions(data.id, function (perms) {
//     loadDashboard(perms);
//   });
// });

// async function getWeather(city) {
//   const API_key = "25dbad478c8fcfa171d5d60a44c1f53f";
//   try {
//     const raweather = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
//     );
//     if (!raweather.ok) {
//       throw new Error("City not found!");
//     }
//     const weather = await raweather.json();
//     console.log("Current Weather : ", Math.floor(weather.main.feels_like), "C");
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// // getWeather("riga");
// // getWeather("delhi");

// function sendMail() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (Math.floor(Math.random() * 10) < 8) {
//         res("Done");
//       } else {
//         rej("failed");
//       }
//     }, 1000);
//   });
// }

// async function bulkSend() {
//   try {
//     let proms = Array.from({ length: 5 }).map(() => {
//       return sendMail()
//         .then((data) => "Email Sent..")
//         .catch((err) => {
//           return "Email sent Failed";
//         });
//     });

//     let result = await Promise.all(proms);
//     console.log(result);
//   } catch (err) {
//     console.error("Email sent failed");
//   }
// }

// bulkSend();

// //! Debouncing in java script

// function debounce(fn, delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(fn, delay);
//   };
// }

// document.querySelector(".search").addEventListener(
//   "input",
//   debounce(() => {
//     console.log(document.querySelector(".search").value, " request sent....");
//   }, 2000)
// );

// // ! Throttling in JavaScript
// // ? throttling - it will do something after a delay only until something is happening

// function throttle(fn, delay) {
//   let last = 0;
//   return function () {
//     let now = Date.now();
//     if (now - last > delay) {
//       fn();
//       last = now;
//     }
//   };
// }

// window.addEventListener(
//   "mousemove",
//   throttle(function () {
//     console.log("Animation triggered....");
//   }, 2000)
// );

// let bank = (function () {
//   let bankBalance = 500; // This variable is private here...

//   function check() {
//     console.log(bankBalance);
//   }
//   return { ch: check };
// })();

// // bank.check();

// //! Factory Function Pattern

// function stockManagement(name, price) {
//   let stock = 120;
//   return {
//     buy(q) {
//       if (stock < q) {
//         console.error(`There are only ${stock} pieces left...`);
//       } else {
//         stock -= q;
//         console.log(`${q} pieces booked - ${stock} more pieces left...`);
//       }
//     },
//     checkStock() {
//       console.log(`There are currently ${stock} pieces of ${name}`);
//     },
//   };
// }

// const mouse = stockManagement("Mouse", 500);
// const keyboard = stockManagement("Keyboard", 1500);

//! Observer Pattern

class YoutubeChannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
    user.update("You have subscibed to this channel!");
  }
  unSubscribe(user) {
    this.subscribers = this.subscribers.filter((ele) => ele !== user);
    user.update("You have unsubscibed to this channel!");
  }
  notify(data) {
    this.subscribers.forEach((user) => {
      user.update(data);
    });
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(data);
  }
}

let dream = new YoutubeChannel();

let robin = new User("Robin");
let user1 = new User("user1");
let user2 = new User("user2");
let user3 = new User("user3");
let user4 = new User("user4");

dream.subscribe(robin);
dream.subscribe(user1);
dream.subscribe(user2);
dream.subscribe(user3);
dream.subscribe(user4);

async function loadHeavyFile() {
  let heavy = await import("./heavy.js");
  heavy.main();
  console.log(heavy)
}
loadHeavyFile();

clone = JSON.parse(JSON.stringify(obj));

let obj = {
  name: {
    first: "Robin",
    last: "WebDev",
  },
  age: 18,
  address: {
    main: "India",
    current: "Riga",
  },
  social: ["Youtube", "Threads", "Instagram", { games: ["Minecraft"] }],
};

function deepClone(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  const duplicate = Array.isArray(obj) ? [] : {};
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    duplicate[key] = deepClone(obj[key]);
  });

  return duplicate; 
}

console.log(obj);
let newObj = deepClone(obj);
newObj.social[3].games = "Only Minecraft";
console.log(newObj);
