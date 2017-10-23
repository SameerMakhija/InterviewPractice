//Array Join
function myES6Join([head, ...tail], separator = `,`) {
  if(head === undefined && !tail.length) {
    return '';
  }
  return tail.length ? `${head}${separator}${myES6Join(tail, separator)}` : head;
}



(function(){
  const testArray = ['My', 'Test', 'Array'];
  const filterNumbers = [1,2,13,11,10];

  console.log(`ES6 Join => ${myES6Join(filterNumbers, '-')}`);     // "1-2-13-11-10"
})();
