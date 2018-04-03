'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let result = collection_a;
  for(let  i = 0 ; i < collection_b.length ; i ++){
    if(!result.includes(collection_b[i])){
      result.push(collection_b[i]);
    }
  }
  console.log(result);
  return result;
}

module.exports = get_union;

