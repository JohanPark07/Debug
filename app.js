function sayHello() {
  console.log("hello");
  console.log("hi");
  console.log("sy");
  console.log("sy");
  console.log("sy");
  console.log("sy");
}

function calculate(x, y) {
  console.log("cal");
  const result = x + y;
  console.log("result: ", result);
  sayHello();
  return result;
}

calculate(1, 2);
