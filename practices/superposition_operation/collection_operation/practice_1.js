'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let result = 0;
  for(let i = 0 ; i < collection.length ; i ++){
    result += (collection[i] * 3 + 2);
  }
  console.log(result);
  return result ;
}

module.exports = hybrid_operation;

