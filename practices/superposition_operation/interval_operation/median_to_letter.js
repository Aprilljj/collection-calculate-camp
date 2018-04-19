'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let median_to_letter = '';
  let result = [];
  collection.sort(function(a,b){return a-b;});
  if(collection.length % 2 == 0){
    result = Math.ceil((collection[collection.length / 2 -1] + collection[collection.length / 2]) / 2);
  }else{
    result = Math.ceil(collection[collection.length / 2]);
  }
  if(result > 26){
    median_to_letter = 'a' + String.fromCharCode(96 + (result - 26));
  }
  console.log(median_to_letter);
  return median_to_letter;
}

module.exports = median_to_letter;
