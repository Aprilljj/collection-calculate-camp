'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  let result = [];
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i] == element){
      result.push(i);
    }
  }
  console.log(result[0]);
  return result[0];
}

module.exports = calculate_elements_sum;

