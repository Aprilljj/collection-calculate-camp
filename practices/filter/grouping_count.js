'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let result = {};
  for(let i = 0 ; i < collection.length ; i ++){
    if(!result[collection[i]]){
      result[collection[i]] = 1;
    }else{
      result[collection[i]] ++ ;
    }
  }
  console.log(result);
  return result;
}

module.exports = grouping_count;
