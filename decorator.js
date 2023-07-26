function log_decorator(fn) {
  return (...args) => {
    console.log(`unction being called is${fn.name}`);
    const result = fn(...args);
    const sum = args + 3;
    console.log(sum)
    console.log("function executed");
    return result;
  };
}

function greet(name) {
  console.log(`hi${name}`);
}

greet = log_decorator(greet);
greet("rahul");
