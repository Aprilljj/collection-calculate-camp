function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  for(let i = 0 ; i < collection_a.length ; i ++){
    if(collection_b.includes(collection_a[i])){
      result.push(collection_a[i]);
    }
  }
  console.log(result);
  return result;
}

module.exports = collect_same_elements;
