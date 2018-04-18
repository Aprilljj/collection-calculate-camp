function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let new_collection_a = [];
  for(let i = 0 ; i < collection_a.length ; i ++){
    new_collection_a.push(collection_a[i][Object.keys(collection_a[i])]);
  }
  let collect_same_elements = [];
  for(let i = 0 ; i < new_collection_a.length ; i ++){
    if(object_b[Object.keys(object_b)].includes(new_collection_a[i])){
      collect_same_elements.push(new_collection_a[i]);
    }
  }
  console.log(collect_same_elements);
  return collect_same_elements;
}

module.exports = collect_same_elements;
