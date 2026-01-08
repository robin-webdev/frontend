class Employee {
  constructor(name, salary, age, id) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.id = id;
    this.company = "Sheryians Coding School";
    this.branch = "Riga, Lativa";
  }

  showDetails() {
    console.log(
      `Name : ${this.name}\nAge : ${this.age}\nSalary : ${this.salary}\nId : ${this.id}\nCompany : ${this.company}\nBranch : ${this.branch}`
    );
  }
}

let mikeTyson = new Employee("Mike Tyson", "$15000", 39, 5698);

console.log(mikeTyson);
mikeTyson.showDetails();
