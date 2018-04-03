'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let new_collection = Array.prototype.concat.apply([],collection);
  let result = [];
  for(let i = 0 ; i < new_collection.length ;i ++){
    if(!result.includes(new_collection[i])){
      result.push(new_collection[i]);
    }
  }
  console.log(result);
  return result;
}

module.exports = double_to_one;
