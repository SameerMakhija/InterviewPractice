//Reference Link :-  https://gist.github.com/alexhawkins/28aaf610a3e76d8b8264

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
