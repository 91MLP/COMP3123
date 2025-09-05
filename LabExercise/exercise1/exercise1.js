console.log("==============exercise1===============");
//exercise1
function capitalFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(capitalFirstLetter("this is exercise 1"));

console.log("=============exercise2==============");
//exercise2
function max(a, b, c) {
  return Math.max(a, b, c);
}
console.log(max(1, 0, 2));

console.log("=============exercise3=============");
//exercise3
function right(str) {
  if (str.length > 3) {
    const first = str.slice(0, -3);
    const last = str.slice(-3);
    const reverseWord = last + first;
    console.log(reverseWord);
  } else {
    return str;
  }
}
right("exercise3");
right("Cube");
right("banana");
console.log("==============exercise4=============");
//exercise4
function angle_Type(degree) {
  if (degree > 0 && degree < 90) {
    console.log(" Acute angle");
  } else if (degree === 90) {
    console.log("Right angle");
  } else if (degree > 90 && degree < 180) {
    console.log("Obtuse angle");
  } else {
    if (degree === 180) {
      console.log("Straight angle");
    }
  }
}
angle_Type(45);
angle_Type(90);
angle_Type(135);
angle_Type(180);
