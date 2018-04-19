'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let new_collection = collection.split('->').sort(function(a,b){return a-b;});
  let compute_chain_median = 0 ;
  if(new_collection.length % 2 != 0){
    compute_chain_median = new_collection[Math.ceil(new_collection.length / 2) - 1 ];
  }else{
    let low_middle = new_collection[new_collection.length / 2 - 1 ];
    let hingh_middle =  new_collection[new_collection.length / 2];
    compute_chain_median = (Number(low_middle) + Number(hingh_middle)) / 2; //转换为数字,直接用split()方法切割出来的是字符串的数组，直接相加其为字符串拼接；
  }
  console.log(compute_chain_median);
  return compute_chain_median;
}

module.exports = compute_chain_median;
