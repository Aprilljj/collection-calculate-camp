'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  let result = 0 ;
  for(let i = 0 ; i < collection.length ; i ++){
    result += collection[i];
  }
  console.log(result);
  return result;
}

module.exports = calculate_elements_sum;

