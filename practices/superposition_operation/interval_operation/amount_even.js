'use strict';

function amount_even(collection) {

  //在这里写入代码
  let result = 0;
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i] % 2 == 0 ){
      result += collection[i];
    }
  }
  console.log(result);
  return result;
}

module.exports = amount_even;
