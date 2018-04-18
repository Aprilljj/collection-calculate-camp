'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let sum = 0;
  for(let i = 0 ; i < collection.length ; i ++){
    sum += i;
  }
  let average = Math.ceil(sum / collection.length );//Math.ceil 小数向上取整
  let average_to_letter = String.fromCharCode(97 + average);
  console.log(average_to_letter);
  return average_to_letter;
}

module.exports = average_to_letter;

