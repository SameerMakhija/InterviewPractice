const valueArray = [1,1,2,2];

//Unique Value
console.log(valueArray.reduce((result, value) => {
  if(result.indexOf(value) == -1) {
    result.push(value);
  }
  return result;
},[])); // [1,2]


function unique(getArray) {
  return getArray.reduce((result, current) => {
    if(!result.find(value => current === value)) {
      result.push(current);
    }
    return result;
  },[]);
}

unique(valueArray); // [1,2];
