'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let result = [];
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i] % 2 == 0 ){
      result.push(collection[i]);
    }
  }
  let last_even = 0 ;
  last_even = result[result.length - 1];
  console.log(last_even);
  return last_even;
}

module.exports = find_last_even;
