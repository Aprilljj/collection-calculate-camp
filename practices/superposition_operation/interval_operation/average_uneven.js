'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let sum = 0 ;
  let count = 0 ;
  for(let  i = 0 ; i < collection.length ; i ++){
    if(collection[i] % 2 != 0 ){
      count ++;
      sum += collection[i];
    }
  }
  let average_uneven = sum / count;
  console.log(average_uneven);
  return average_uneven;
}

module.exports = average_uneven;
