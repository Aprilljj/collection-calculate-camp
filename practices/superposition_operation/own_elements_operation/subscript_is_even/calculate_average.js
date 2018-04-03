'use strict';
var calculate_average = function(collection){
    let sum = 0 ;
    let count = 0 ;
    for(let i = 0 ; i < collection.length ; i ++){
        if(collection[i] % 2 == 0 ){
            sum += collection[i];
            count ++ ;
        }
    }
    let calculate_average = sum / count ;
    console.log(calculate_average);
    return calculate_average;
};
module.exports = calculate_average;
