'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let spilt_to_zero = [];
  let count = Math.ceil(number / interval);
  for(let i = 0 ; i <= count  ; i ++){
    spilt_to_zero.push(parseFloat((number - interval * i).toFixed(1)));
  }  
  console.log(spilt_to_zero);
  return spilt_to_zero;
}

module.exports = spilt_to_zero;
