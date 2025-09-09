const myAsyncFunction = require("./index");

async function callPromise() {
  try {
    const res = await myAsyncFunction(100);
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally excute");
  }
}

callPromise();
