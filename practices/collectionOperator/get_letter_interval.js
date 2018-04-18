'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let get_letter_interval = [];
  if(number_a <= number_b){
    for(let i = number_a ; i <= number_b ; i ++){
      get_letter_interval.push(String.fromCharCode(96 + i));
    }
  }else{
    for(let i = number_a ; i >= number_b ; i --){
      get_letter_interval.push(String.fromCharCode(96 + i));
    }
  }
  console.log(get_letter_interval);
  return get_letter_interval;
}

module.exports = get_letter_interval;
