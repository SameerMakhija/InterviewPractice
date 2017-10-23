//Array filter
function myES6Filter([head, ...tail], fn) {
  const newHead = fn(head) ? [head] : [];
  return tail.length ? [...newHead, ...myES6Filter(tail, fn)] :  newHead;
}

(function(){
  const filterNumbers = [1,2,13,11,10];
  function greater10(n) {
    return n > 10
  }

  console.log(`ES6 Filter => ${JSON.stringify(myES6Filter(filterNumbers, greater10))}`);     // "[13,11]"
})();
