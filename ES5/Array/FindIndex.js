Array.prototype.myFindIndex = function(callback, context) {
  let result = -1;
  for(let i = 0; i<this.length; i++) {
    if(callback.call(context, this[i], i, this)){
      result =  i;
      break;
    }
  }
  return result;
}

function testFun(testArray, n) {
  const result = testArray.myFindIndex(function(value){
    return value === n;
  });
  return result;
}
  
  
  
(function() {
  const testArray=[1,2,4,6];

  console.log(`ES5 FindIndex of 2 in ${testArray} = ${testFun(testArray, 2)}`); // 1
  console.log(`ES5 FindIndex of 7 in ${testArray} = ${testFun(testArray, 7)}`); // -1
})();
