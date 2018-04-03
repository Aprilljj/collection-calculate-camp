'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let result = collection[0];
  for(let i = 1 ; i < collection.length ; i ++){
    if(result >= collection[i]){
      result = collection[i];
    }else{
      result = result;
    }
  }
  console.log(result);
  return result;
}

module.exports = collect_min_number;

