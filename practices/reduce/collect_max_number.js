'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  let result = collection[0] ; 
  for(let i = 1 ; i < collection.length ; i ++){
    if(result >= collection[i]){
      result = result;
    }else{
      result = collection[i];
    }
  }
  console.log(result);
  return result;
}

module.exports = collect_max_number;
