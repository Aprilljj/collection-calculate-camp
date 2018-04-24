function count_same_elements(collection) {
  //在这里写入代码
  let count_same_elements = [];
  for(var i in collection){
    if(collection[i].includes('-')){
      let temp = collection[i].split('-');
      for(let j = 0 ; j < temp[1] ; j ++){
        collection.push(temp[0]);
      }
      collection.splice(i,1);
    }
    if(collection[i].includes('[')){
      let temp_element = collection[i].split('[')[0];
      let temp_element_count = collection[i].split('[')[1].split(']')[0];
      for(let i = 0 ; i < temp_element_count ; i++){
        collection.push(temp_element);
      }
      collection.splice(i,1);
    }
  }
  let result = {};
  for(var i in collection){
    if(!result[collection[i]]){
      result[collection[i]] = 1;
    }else{
      result[collection[i]] ++ ;
    }
  }
  let temp_keys = [];
  let temp_count = [];
  for(let i = 0 ; i < Object.keys(result).length ; i ++){
    temp_keys.push(Object.keys(result)[i]);
    temp_count.push(result[Object.keys(result)[i]]);
  }
  for(var i in temp_keys){
    let element = 'c:8';
    if(temp_keys[i].match(element)){
      temp_keys.splice(i,1,element.split(':')[0]);
      temp_count.splice(i,1,Number.parseInt(element.split(':')[1]));
    }
  }
  for(let i = 0 ; i < temp_keys.length ; i ++){
    let temp = {};
    temp.name = temp_keys[i];
    temp.summary = temp_count[i];
    count_same_elements.push(temp);
  }
  console.log(count_same_elements);
  return count_same_elements;
}

module.exports = count_same_elements;
