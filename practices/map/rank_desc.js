'use strict';
var rank_desc = function(collection){
  collection.sort(function(a,b){return a - b;});
  console.log(collection);
  return collection;
};

module.exports = rank_desc;
