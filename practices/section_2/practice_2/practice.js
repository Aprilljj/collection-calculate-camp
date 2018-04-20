function count_same_elements(collection) {
  //在这里写入代码
  let count_same_elements = [];
  let result = {};
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i].includes('-')){
      let temp = collection[i].split('-');
      for(let i = 0 ; i < temp[1];i++){
        collection.push(temp[0]);
      }
      collection.splice(i,1);//将“d-5”删除;
    }
  }
  console.log(collection);
  for(let  i = 0 ; i < collection.length ; i ++){
    if(!result[collection[i]]){
      result[collection[i]] = 1;
    }else{
      result[collection[i]] ++;
    }
  }
  console.log(result);
  for(let i = 0 ; i < Object.keys(result).length ; i ++){
    let temp = {};
    temp.key = Object.keys(result)[i];
    temp.count = result[Object.keys(result)[i]];
    count_same_elements.push(temp);
  }
  console.log(count_same_elements);
  return count_same_elements;
}

module.exports = count_same_elements;
