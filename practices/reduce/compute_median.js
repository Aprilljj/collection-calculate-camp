'use strict';

function compute_median(collection) {
  //在这里写入代码
  let compute_median = 0;
  collection.sort(function(a,b){return a-b;});
  if(collection.length % 2 != 0 ){
    compute_median = collection[Math.ceil((collection.length / 2 )) - 1];
  }else{
    compute_median = (collection[collection.length / 2 - 1] + collection[collection.length / 2 ]) / 2;
  }
  console.log(compute_median);
  return compute_median;
}

module.exports = compute_median;


