'use strict';
var even_group_calculate_average = function(collection){
    let new_collection = [];
    let even_collection = [];
    for(let i = 0 ; i < collection.length ; i ++){
        if(i % 2 != 0 ){
            new_collection.push(collection[i]);
        }
    }
    for(let i = 0 ; i < new_collection.length ; i ++){
        if(new_collection[i] % 2 == 0 ){
            even_collection.push(new_collection[i]);
        }
    }
    let even_group_calculate_average = [];
    let hundred = [];
    let decade = [];
    let unit = [];
    for(let i = 0 ; i < even_collection.length ; i ++){
        if(even_collection[i].toString().length == 3){
            hundred.push(even_collection[i]);
        }else if( even_collection[i].toString().length == 2 ){
            decade.push(even_collection[i]);
        }else if (even_collection[i].toString().length == 1){
            unit.push(even_collection[i]);
        }
    }
    console.log(hundred);
    console.log(decade);
    console.log(unit);
    if(unit.length > 0){
        let sum = 0 ;
        for(let i = 0 ; i < unit.length ; i ++){
            sum += unit[i];
        }
        even_group_calculate_average.push( sum / unit.length);
    }
    if(decade.length > 0){
        let sum = 0 ;
        for(let i = 0 ; i < decade.length ; i ++){
            sum += decade[i];
        }
        even_group_calculate_average.push(sum / decade.length);
    }
    if(hundred.length > 0){
        let sum = 0 ;
        for(let i = 0 ; i < hundred.length ; i ++){
            sum += hundred[i];
        }
        even_group_calculate_average.push( sum / hundred.length);
    }
    if(unit.length == 0  && decade.length == 0 && hundred.length ==0){
        even_group_calculate_average.push(0);
    }
    console.log(even_group_calculate_average);
    return even_group_calculate_average;
};
module.exports = even_group_calculate_average;
