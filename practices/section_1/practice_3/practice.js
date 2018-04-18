function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let collect_same_elements = [];
  for(let i = 0 ; i < collection_a.length ; i ++){
    if(object_b[Object.keys(object_b)].includes(collection_a[i])){
      collect_same_elements.push(collection_a[i]);
    }
  }
  console.log(collect_same_elements);
  return collect_same_elements;
}

module.exports = collect_same_elements;
