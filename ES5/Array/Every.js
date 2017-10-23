//Array - every

Array.prototype.myEvery = function (callback, context){
  for(let i = 0; i < this.length; i++) {
    if(!callback.call(context, this[i], i, this)){
      return false;
    }
  }
  return true;
};

(function(){
  const allNumberAbove10 = [11,12,25,15];
  const numberArray = [5,7,10,2,25,15];
  
  const numberArrayResult = numberArray.myEvery(function(value){
    return value > 10;
  });
  const resultAbove10 = allNumberAbove10.myEvery(function(value){
    return value > 10;
  });
  console.log(`Every | allNumberAbove10 = All values > 10 =  ${resultAbove10}`);
  console.log(`Every | numberArrayResult = All values > 10 =  ${numberArrayResult}`);
})();
