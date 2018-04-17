'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  let even_to_letter = [];
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i] % 2 == 0){
      even_to_letter.push(String.fromCharCode(96 + collection[i]));
    }
  }
  console.log(even_to_letter);
  return even_to_letter;
}

module.exports = even_to_letter;
