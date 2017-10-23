//Array - ForEach 
Array.prototype.myForEach = function(callback) {
  for(let i=0; i<this.length; i++){
    callback(this[i], i, this);
  }
};

(function(){
  const testArray = ['My', 'Test', 'Array'];

  testArray.myForEach(function(value, index, arr){
    console.log(`index = ${index}, value = ${value}`);
  });
})();
