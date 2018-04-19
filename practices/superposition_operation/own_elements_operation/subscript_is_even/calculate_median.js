'use strict';
var calculate_median = function(collection){
    let new_collection = [];
    for(let i = 0 ; i < collection.length ; i ++){
        if(i % 2 != 0){
            new_collection.push(collection[i]);
        }
    }
    let calculate_median = 0;
    if(new_collection.length % 2 == 0){
        calculate_median = (new_collection[new_collection.length / 2 -1] + new_collection[new_collection.length / 2]) / 2 ;
    }else{
        calculate_median = new_collection[Math.ceil(new_collection.length / 2 - 1)];
    }
    console.log(calculate_median);
    return calculate_median;
};
module.exports = calculate_median;
