const numbers = [1,2,3];

function double([number, ...rest]){
  if(!number){
    return [];
  } else {
    return rest.length ? [2*number, ...(double(rest))] : [2*number];
  }
}

console.log("[1,2,3] Double Values = "+ double(numbers)); //[2,4,6]
