'use strict';
var single_element = function(collection){
    let single_element = [];
    let result = {};
    let temp = [];
    //先从给定的数组中取出第偶数个元素；
    for(let i = 0 ; i < collection.length ; i ++){
        if(i % 2 != 0 ){
            temp.push(collection[i]);
        }
    }
    for(let i = 0 ; i < temp.length ; i ++){
        if(!result[temp[i]]){
            result[temp[i]] = 1;
        }else{
            result[temp[i]] ++ ;
        }
    }
    for(let i = 0 ; i < Object.keys(result).length ; i ++){
        if(result[Object.keys(result)[i]] == 1){
            single_element.push(Number(Object.keys(result)[i]));
        }
    }
    let new_single_element = [];
    for(let i = 0 ; i < temp.length ; i ++){
        if(single_element.includes(temp[i])){
            new_single_element.push(temp[i]);
        }
    }
    console.log(new_single_element);
    return new_single_element;
};
module.exports = single_element;
