/*
ES5 Array Implementations :-  https://gist.github.com/alexhawkins/28aaf610a3e76d8b8264

  Array.map
  Array.filter

*/


// Array.map
function myES6Map([head, ...tail], fn) {
  if(head === undefined && !tail.length) {
    return [];
  }

  return tail.length ? [fn(head), ...myES6Map(tail, fn)] : [fn(head)];
}


function myES6Map2([head, ...tail], fn) {
  if(head === undefined && !tail.length) {
    return [];
  }
  
  if(tail.length === 0) {
    retrun [fn(head)]
  } else {
    return [fn(head)].concat(myES6Map(tail, fn));
  }
}

const testNumbers = [1,2,3];
function multiply(n) {
  return n*2
}

console.log(`ES6 Map => ${JSON.stringify(myES6Map(testNumbers, multiply))}`);     // "[2,4,6]"
console.log(`ES6 Map => ${JSON.stringify(myES6Map2(testNumbers, multiply))}`);    // "[2,4,6]"


//Array filter
function myES6Filter([head, ...tail], fn) {
  const newHead = fn(head) ? [head] : [];
  return tail.length ? [...newHead, ...myES6Filter(tail, fn)] :  newHead;
}

const filterNumbers = [1,2,13,11,10];
function greater10(n) {
  return n > 10
}

console.log(`ES6 Filter => ${JSON.stringify(myES6Filter(filterNumbers, greater10))}`);     // "[13,11]"

//Array Join
function myES6Join([head, ...tail], separator = `,`) {
  if(head === undefined && !tail.length) {
    return '';
  }
  return tail.length ? `${head}${separator}${myES6Join(tail, separator)}` : head;
}

console.log(`ES6 Join => ${myES6Join(filterNumbers, '-')}`);     // "1-2-13-11-10"


//Array reduce
