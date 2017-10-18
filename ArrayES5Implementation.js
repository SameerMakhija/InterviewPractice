/*
Reference Link :-  https://gist.github.com/alexhawkins/28aaf610a3e76d8b8264
  Array - forEach
  Array - map
  Array - filter
  Array - every
  Array - some
  Array - reduce
*/


//Array - ForEach 
Array.prototype.myForEach = function(callback) {
  for(let i=0; i<this.length; i++){
    callback(this[i], i, this);
  }
};

const testArray = ['My', 'Test', 'Array'];

(function(){
  testArray.myForEach(function(value, index, arr){
    console.log(`index = ${index}, value = ${value}`);
  });
})();


//Array - Map
Array.prototype.myMap = function (callback) {
  let arr = [];
  for(let i=0; i<this.length; i++){
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

(function(){
  const mappedArray = testArray.myMap(function(value, index, arr){
                                  return {
                                    index,
                                    value
                                  };
                                });
  console.log(`mappedArray = ${JSON.stringify(mappedArray)}`);
})();

//Array - Filter
const numberArray = [5,7,10,2,25,15];
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
  const filteredArray = numberArray.myFilter(function(value){
    return value > 10;
  });
  console.log(`Filtered Array > 10 = ${JSON.stringify(filteredArray)}`);
})();

//Array - every
const allNumberAbove10 = [11,12,25,15];
Array.prototype.myEvery = function (callback, context){
  for(let i = 0; i < this.length; i++) {
    if(!callback.call(context, this[i], i, this)){
      return false;
    }
  }
  return true;
};

(function(){
  const numberArrayResult = numberArray.myEvery(function(value){
    return value > 10;
  });
  const resultAbove10 = allNumberAbove10.myEvery(function(value){
    return value > 10;
  });
  console.log(`Every | allNumberAbove10 = All values > 10 =  ${resultAbove10}`);
  console.log(`Every | numberArrayResult = All values > 10 =  ${numberArrayResult}`);
})();

//Array - some
Array.prototype.mySome = function (callback, context){
  for(let i = 0; i < this.length; i++) {
    if(callback.call(context, this[i], i, this)){
      return true;
    }
  }
  return false;
};

(function(){
  const numberArrayResult = numberArray.mySome(function(value){
    return value > 10;
  });
  const resultAbove10 = allNumberAbove10.mySome(function(value){
    return value > 10;
  });
  console.log(`Some | allNumberAbove10 = All values > 10 =  ${resultAbove10}`);
  console.log(`Some | numberArrayResult = All values > 10 =  ${numberArrayResult}`);
})();
