'use strict';
var number_map_to_word_over_26 = function(collection){
  let number_map_to_word_over_26 = [];
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i] <= 26){
      number_map_to_word_over_26.push(String.fromCharCode(96+collection[i]));
    }else if(collection[i] > 26){
      number_map_to_word_over_26.push('a' + String.fromCharCode(96+(collection[i]-26)));
    }
  }
  console.log(number_map_to_word_over_26);
  return number_map_to_word_over_26;
};

module.exports = number_map_to_word_over_26;
