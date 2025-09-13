//exercise1
const gretter = (myArray) => {
  var greetText = "Hello";
  for (greetText of myArray) {
    console.log(greetText);
  }
};
gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);

//exercise2
function capotalize([first, ...rest]) {
  return first.toUpperCase() + rest.join("");
}
console.log(capotalize("hello"));

//exercise3
const colors = ["red", "green", "blue"];

function capitalizedColors() {
  colors.splice("").map((c) => {
    console.log(c);
    return c.charAt(0).toUpperCase() + c.slice(1);
  });
}
capitalizedColors();

//exercise4

var array = [1, 60, 34, 30, 20, 5];

const array1 = array.filter((number) => {
  if (number < 20) return number;
});
console.log(array1);
//exercise5

var string = [1, 2, 3, 4, 5];

function calculateSum() {
  string.reduce((acc, cur) => acc + cur, 0);
}
calculateSum();

//exercise6
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  detail() {
    console.log(`Model:${this.model} Engine ${this.year}`);
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info() {
    console.log(
      `${this.model} has a balance of ${this.balance} in ${this.year}`
    );
  }
}

const car2 = new Car("Pontiac Firebird", 1976);
//console.log(car2.detail());
car2.detail();

const sedan = new Sedan("Volvo SD", 2018, 30000);
//console.log(sedan.info());
sedan.info();
