'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let result = [];
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i] % 2 == 0 ){
      result.push(collection[i]);
    }
  }
  console.log(result);
  return result;
}

module.exports = collect_all_even;
