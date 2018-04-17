'use strict';
function map_to_even(collection){
  let map_to_even = [];
  for(let i = 0 ; i < collection.length ; i ++){
    map_to_even.push(collection[i] * 2);
  }
  console.log(map_to_even);
  return map_to_even;
}
module.exports = map_to_even;
