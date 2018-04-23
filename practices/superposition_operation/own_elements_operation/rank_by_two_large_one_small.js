'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let new_collection = collection.sort(function(a,b){return a-b;});
  let result = [];
  for(let i = 0 ; i < new_collection.length ; i+= 3){
    result.push(new_collection.slice(i , i +3));
  }
  let rank_by_two_large_one_small = [];
  for(let i = 0 ; i < result.length ; i ++){
    if(result[i].length % 3 == 0){
      var a = result[i].shift();
      result[i].push(a);
      for(let j = 0 ; j < result[i].length ; j ++){
        rank_by_two_large_one_small.push(result[i][j]);
      }
    }else{
      for(var j in result[i]){
        rank_by_two_large_one_small.push(result[i][j]);
      }
    }
  }
  console.log(rank_by_two_large_one_small);
  return rank_by_two_large_one_small;
}
module.exports = rank_by_two_large_one_small;
