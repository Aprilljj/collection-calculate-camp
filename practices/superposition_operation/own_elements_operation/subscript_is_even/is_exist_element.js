'use strict';
var is_exist_element = function(collection,element){
    let is_exist_element = true ;
    let result = [];
    for(let i = 0 ; i < collection.length ; i ++){
        if(i % 2 == 0){
            result.push(collection[i]);
        }
    }
    if(result.includes(element)){
        is_exist_element = true;
    }else{
        is_exist_element = false;
    }
    console.log(is_exist_element);
    return is_exist_element;
};
module.exports = is_exist_element;
