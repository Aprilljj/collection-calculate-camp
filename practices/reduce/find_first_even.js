'use strict';

function find_first_even(collection) {
  //在这里写入代码
  let result = [];
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i] % 2 == 0){
      result.push(collection[i]);
    }
  }
  let fisrt_even = 0 ;
  fisrt_even = result[0];
  console.log(fisrt_even);
  return fisrt_even;
}

module.exports = find_first_even;

