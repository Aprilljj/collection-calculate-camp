function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let collecton_b = object_b[Object.keys(object_b)];

  let create_updated_collection = [];//最终结果;
  let result = {};//存放collection_a中数据的对象;
  let temp_a = [];//存放key属性值的数组;

  for(let i = 0 ; i < collection_a.length ; i ++){
    temp_a.push(collection_a[i][Object.keys(collection_a[i])[0]]);
    result[collection_a[i][Object.keys(collection_a[i])[0]]] = collection_a[i][Object.keys(collection_a[i])[1]];
  }

  for(let i = 0 ; i < temp_a.length ; i ++){
    if(collecton_b.includes(temp_a[i])){
      result[temp_a[i]] = result[temp_a[i]] - 1;
    }
  }

  for(let i = 0 ; i < Object.keys(result).length ; i ++){
    let temp = {};
    temp.key = Object.keys(result)[i];
    temp.count = result[Object.keys(result)[i]];
    create_updated_collection.push(temp);
  }

  console.log(create_updated_collection);
  return create_updated_collection;
}

module.exports = create_updated_collection;
