'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  let result = collection[collection.length - 1 ];
  console.log(result);
  return result;
}

module.exports = collect_last_element;
