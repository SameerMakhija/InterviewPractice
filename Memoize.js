function memoize(fn) {
  let cache = {};
  return function(...args){
    const context = this;
    if(!cache[JSON.stringify(args)]){
      cache[JSON.stringify(args)] = fn.apply(context, args);
    }
    return cache[JSON.stringify(args)];
  }
}

(function(){
  function Adder(n){
    console.log(`Calculating....`);
    return n+10;
  }
  
  const Adder10 = memoize(Adder);
  console.log("Call for 5 = " + Adder10(5));
  console.log("Call for 6 = " + Adder10(6));
  console.log("Call for 5 = " + Adder10(5));
  console.log("Call for 5 = " + Adder10(5));
  console.log("Call for 5 = " + Adder10(5));
  console.log("Call for 5 = " + Adder10(5));
  console.log("Call for 15 = " + Adder10(15));
})();


//output :- 
// Calculating....
// Call for 5 = 15
// Calculating....
// Call for 6 = 16
// Call for 5 = 15
// Call for 5 = 15
// Call for 5 = 15
// Call for 5 = 15
// Calculating....
// Call for 15 = 25
