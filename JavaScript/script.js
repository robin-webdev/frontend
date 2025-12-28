// let password = "Reactjs";
// let attempt = 0;
// let enteredPassword = prompt("Enter you password : ");
// attempt++;

// while (password !== enteredPassword) {
//   if (attempt === 3) {
//     console.error("Account Locked !");
//     break;
//   }

//   enteredPassword = prompt("Enter your password : ");
//   attempt++;
// }

// if (password === enteredPassword){
//     console.log("You are successfully logged in !")
// }

// let balance = 1000;
// let withdrawls = 0;
// let amount;

// while (withdrawls !== 3) {
//   amount = prompt("Enter the amount you want to withdraw : ");
//   if (balance < amount) {
//     console.log("Insufficient Balance !");
//   } else {
//     balance -= amount;
//     console.log(`${amount}$ deducted from you account`)

//     console.log(`Current Balance : ${balance}$`)
//     withdrawls++;
//   }
// }

// if (withdrawls === 3) {
//   console.log("You ran out of withdrawl limit !");
// }

let name = "Robin";

// const age = 18;
// var city = "Riga";

// function displayInfo({name, age}) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }
// displayInfo({name, age});

// let object = {
//   name: "Robin",
//   age: 18,
//   city: "Riga",
//   func: function () {
//     console.log(this);
//     let innerFunc = () => {
//       console.log(this);
//     };
//     innerFunc();
//   },
// };

// let func2 = () => {
//   console.log(this);
// };

// object.func();
// func2();

// HTML: <div id="container"></div>

// const container = document.getElementById('container');

// Add buttons dynamically
function addButton(text) {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = "toggle-btn";
  container.appendChild(button);
}

addButton("Button 1");
addButton("Button 2");
addButton("Button 3");

// Event delegation - ONE listener for ALL buttons (even future ones!)
container.addEventListener('click', function(event) {
  if (event.target.classList.contains('toggle-btn')) {
    // 'this' refers to container (not what we want)
    // event.target refers to the clicked button (what we want!)
    event.target.classList.toggle('active');
  }
});

// Add more buttons later - they automatically work!
setTimeout(() => {
  addButton('Button 4'); // This will also work without new listeners
}, 2000);

// A reusable toggle function
function toggleButton() {
  this.classList.toggle('active');

  if (this.classList.contains('active')) {
    this.textContent = 'ON';
    this.style.backgroundColor = 'green';
  } else {
    this.textContent = 'OFF';
    this.style.backgroundColor = 'red';
  }
}

// Apply to multiple buttons
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', toggleButton);
  // 'this' inside toggleButton will be whichever button was clicked
});

const numbers = [1, 2, 3, 3, 4, 4, 5];

Array.prototype.hashMap = function (fnc) {
  for (let index = 0; index < this.length; index++) {
    console.log()
    this[index] = fnc(this[index]);
  }
  return this;
};

const newArray = numbers.hashMap((x) => x ** 2);
console.log(newArray)

const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

console.log(sum)

// Object.prototype.freeze = function () {
//   Object.freeze(this);
// };

// let obj = {
//   name: "Robin",
// };
