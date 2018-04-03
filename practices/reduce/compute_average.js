'use strict';

function compute_average(collection) {
  //在这里写入代码
  let result = 0;
  let sum = 0 ; 
  for(let i = 0 ; i < collection.length ; i ++){
    sum  += collection[i];
  }
  result = sum / collection.length;
  console.log(result);
  return result;
}

module.exports = compute_average;

