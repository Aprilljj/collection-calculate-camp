'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  let result = [];
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i] == element){
      result.push(i);
    }
  }
  console.log(result[result.length - 1]);
  return result[result.length - 1];
}

module.exports = calculate_elements_sum;
