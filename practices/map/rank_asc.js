'use strict';
var rank_asc = function(collection){
  collection.sort(function(a,b){return b - a ;});
  console.log(collection);
  return collection;
};

module.exports = rank_asc;
