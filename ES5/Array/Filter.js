//Array - Filter

Array.prototype.myFilter = function (callback, context) {
  let result = [];
  for(let i = 0; i<this.length; i++) {
    if(callback.call(context, this[i], i, this)){
      result.push(this[i]);
    }
  }
  return result;
};

(function() {
  const numberArray = [5,7,10,2,25,15];

  const filteredArray = numberArray.myFilter(function(value){
    return value > 10;
  });
  console.log(`Filtered Array > 10 = ${JSON.stringify(filteredArray)}`);
})();
