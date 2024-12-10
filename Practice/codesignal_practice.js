// Question: Write a JavaScript function checkDataTypes that takes three parameters and returns an array containing the data type of each parameter.

function checkDataTypes(...args) {
  return args.map((arg) => typeof arg);
}

console.log(checkDataTypes(42, "hello", true));

// Question: Write a JavaScript function scopeTest that demonstrates the difference between var, let, and const within different scopes (global, function, and block scope). The function should return an object with the values of the variables declared in different scopes.

function scopeTest() {
  var globalVar = "global Var";
  let globalLet = "global Let";
  const globalConst = "global Const";

  function localScope() {
    var localVar = "loval Var";
    let localLet = "local Let";
    const localConst = "local Const";

    if (true) {
      var blockVar = "block Var";
      let blockLet = "block Let";
      const blockConst = "block Const";
    }

    return {
      localVar,
      localLet,
      localConst,
      blockVar,
      blockLet: typeof blockLet !== "undefined" ? blockLet : "no block",
      blockConst:
        typeof blockConst !== "undefined" ? blockConst : "no block Const",
    };
  }

  return {
    globalVar,
    globalLet,
    globalConst,
    localScope: localScope(),
  };
}

console.log(scopeTest());

// Question: Write a JavaScript function createCounter that returns an object with two methods: increment and getValue. The increment method should increase a private counter variable by 1, and the getValue method should return the current value of the counter. Demonstrate the usage of this function with both function declarations and function expressions.

//function expression

function createCounter() {
  let counter = 0;

  const increment = () => {
    counter += 1;
  };

  const getValue = () => {
    return counter;
  };

  return {
    increment,
    getValue,
  };
}

const counter1 = createCounter();

counter1.increment();
console.log(counter1.getValue());

//function declaration

function createCounterDec() {
  let counter = 0;

  increment = function () {
    counter += 1;
  };
  getValue = function () {
    return counter;
  };
}

const counter2 = new createCounterDec();

counter2.increment();
console.log(counter2.getValue());

// Question: Write a JavaScript function debounce that takes a function func and a delay wait as arguments, and returns a debounced version of func. The debounced function should delay the execution of func until after wait milliseconds have elapsed since the last time the debounced function was invoked. Demonstrate how this function can be used to optimize performance by limiting the number of times a search input triggers an API call.

//functionla approach

function debounce(func, wait) {
  let timeout;
  console.log("init");
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function searchAPI(query) {
  console.log(`API call with query: ${query}`);
}

const debounceSearchFunc = debounce(searchAPI, 3000);
debounceSearchFunc("hello");

// using arrow function

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

function searchAPI(query) {
  console.log(`API call with query: ${query}`);
}

const debounceSearchEs = debounce(searchAPI, 3000);
debounceSearchEs("hello");

//using Promises

function debounce(func, wait) {
  let timeout;
  return (...args) => {
    return new Promise((resolve) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => resolve(func(...args)), wait);
    });
  };
}

function searchAPI(query) {
  return `API call with query: ${query}`;
}

const debounceSearchPromise = debounce(searchAPI, 3000);

debounceSearchPromise("hello").then(console.log);
