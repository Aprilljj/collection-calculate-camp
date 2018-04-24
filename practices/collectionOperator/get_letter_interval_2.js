'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let get_letter_interval_2 = [];
  if(number_a <= number_b){
    for(let i = number_a; i <= number_b ; i ++){
      if(i <= 26 ){
        get_letter_interval_2.push(String.fromCharCode(96 + i));
      }else if(i > 52){
        get_letter_interval_2.push('b' +  String.fromCharCode(96 + (i - 52)));
      }else{
        get_letter_interval_2.push('a' + String.fromCharCode(96 + (i -26)));
      }
    }
  }else{
    for(let i = number_a ; i >= number_b ; i --){
      if(i>52){
        get_letter_interval_2.push( 'b' + String.fromCharCode(96 + (i - 52)));
      }else if(i <= 26){
        get_letter_interval_2.push(String.fromCharCode(96 + i));
      }else{
        get_letter_interval_2.push('a' +  String.fromCharCode(96 + (i - 26)));
      }
    }
  }
  console.log(get_letter_interval_2);
  return get_letter_interval_2;
}

module.exports = get_letter_interval_2;

