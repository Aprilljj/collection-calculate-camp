'use strict';
var even_asc_odd_desc = function(collection){
    let even = [];//偶数数组
    let uneven = [];//奇数数组
    for(let i = 0 ; i < collection.length ; i ++){
        if(collection[i] % 2 == 0){
            even.push(collection[i]);
        }else{
            uneven.push(collection[i]);
        }
    }
    /*
    for(let i = 0 ; i < even.length ; i ++){
        for(let j = 0 ; j < even.length - i ; j ++){
            if(even[j] >= even[j + 1]){
                let temp = even[j + 1];
                even[j + 1] = even[j];
                even[j] = temp;
            }
        }
    }
    for(let i = 0 ; i < uneven.length ; i ++){
        for(let j = 0 ; j < uneven.length - i ; j ++){
            if(uneven[j] <= uneven[j + 1]){
                let temp = uneven[j + 1];
                uneven[j + 1] = uneven[j];
                uneven[j] = temp;
            }
        }
    }*/
    //升序排列
    function sortNumber_ascending(a,b){
        return a - b;
    }
    //降序排列
    function sortNumber_descending(a,b){
        return b - a;
    }
    even.sort(sortNumber_ascending);
    uneven.sort(sortNumber_descending);
    let even_asc_odd_desc = [];
    for(let i = 0 ; i < even.length ; i ++){
        even_asc_odd_desc.push(even[i]);
    }
    for(let i = 0 ; i < uneven.length ; i ++){
        even_asc_odd_desc.push(uneven[i]);
    }
    console.log(even_asc_odd_desc);
    return even_asc_odd_desc;
};
module.exports = even_asc_odd_desc;
