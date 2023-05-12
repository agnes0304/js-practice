/// function composition
const compose = function (functions) {
  return function (x) {
    if (functions.length === 0) {
      return x;
    }

    let flag = true;
    let result = x;
    while (flag) {
      result = functions[functions.length - 1](result);
      functions.pop();

      if (functions.length === 0) {
        flag = false;
        return flag;
      }
    }
    return result;
  };
};

// let functions = [x => 10 * x, x => 10 * x];
// compose(functions)(42);

// sol1
const compose_sol = function (functions) {
  return function (x) {
    let len = functions.length - 1;
    for (let i = 0; i <= len; i++) {
      x = functions[len - i](x);
    }
    return x;
  };
};


///2666. Allow One Function Call
const once = function (fn) {
  return function (...args) {
    //fn(...args의 ...arg을 하면 됨) fn을 counting할까?
    console.log(...args); // args = [[1,2,3],[2,3,6]] / ...args = [1,2,3], [2,3,6]
    let count = 0; 
    if (count !== 0) {
      return "undefined, fn was not called";
    } else {
      let result = fn(...args[0]);
      count++;
      return result;
    }
  };
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn([1,2,3],[2,3,6]));  