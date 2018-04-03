'use strict';

function double_to_one(collection) {

  //在这里写入代码
  //let result = [].concat.apply([],collection);
  let result = Array.prototype.concat.apply([],collection);
  console.log(result);
  return result;
}

module.exports = double_to_one;
