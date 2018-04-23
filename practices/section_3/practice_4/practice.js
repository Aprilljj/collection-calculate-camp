function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let create_updated_collection = [];
  let result = {};
  let collection_b = object_b[ Object.keys(object_b) ];
  for(var i in collection_a){
    if(collection_a[i].includes('-')){
      let temp = collection_a[i].split('-');
      for(let i = 0 ; i < temp[1] ; i ++){
        collection_a.push(temp[0]);
      }
      collection_a.splice(i,1);
    }
  }
  for(let i = 0 ; i < collection_a.length ; i ++){
    if(!result[collection_a[i]]){
      result[collection_a[i]] = 1 ;
    }else{
      result[collection_a[i]] ++;
    }
  }
  for(let i = 0 ; i < Object.keys(result).length ; i ++){
    if(collection_b.includes(Object.keys(result)[i])){
      result[Object.keys(result)[i]] = result[Object.keys(result)[i]] - Math.floor(result[Object.keys(result)[i]] / 3); 
    }
  }
  
  for(var i in Object.keys(result)){
    let temp = {};
    temp.key = Object.keys(result)[i];
    temp.count = result[Object.keys(result)[i]];
    create_updated_collection.push(temp);
  }
  console.log(create_updated_collection);
  return create_updated_collection;
}

module.exports = create_updated_collection;
