'use strict';
var number_map_to_word = function(collection){
  let number_map_to_word = [];
  for(let i = 0 ; i < collection.length ; i ++){
    number_map_to_word.push(String.fromCharCode(97 + i));
  }
  console.log(number_map_to_word);
  return number_map_to_word;
};

module.exports = number_map_to_word;
