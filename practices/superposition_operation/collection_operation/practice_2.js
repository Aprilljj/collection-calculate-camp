'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let result = [];
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i] % 2 != 0 ){
      result.push(collection[i] * 3 + 2);
    }
  }
  console.log(result);
  return result ;
}

module.exports = hybrid_operation_to_uneven;

