//Array - reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let result = initialValue ? initialValue : undefined ;
  for(let i=0; i<this.length; i++) {
    if(result){
      result = callback.call(undefined, result, this[i], i, this);
    } else {
      result = this[i];
    }
  }
  return result;
};


(function(){
  const allNumberAbove10 = [11,12,25,15];
  const numberArray = [5,7,10,2,25,15];

  const sumAllNumberArrayValues = numberArray.myReduce(function(result, value){
    return result + value;
  });
  const sumAllNumberAbove10Values = allNumberAbove10.myReduce(function(result, value){
    return result + value;
  }, 10);

  console.log(`Reduce | total sum of numberArray = ${sumAllNumberArrayValues}`);
  console.log(`Reduce | total sum of allNumberAbove10 = ${sumAllNumberAbove10Values}`);

  const flattened = [
      [0, 1],
      [2, 3],
      [4, 5]
  ].reduce(function(a, b) {
      return a.concat(b);
  });
  console.log(`Reduce | flattened = ${flattened}`); //[ 0, 1, 2, 3, 4, 5 ]
})();
