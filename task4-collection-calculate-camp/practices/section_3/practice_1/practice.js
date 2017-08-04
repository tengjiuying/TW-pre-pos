function includes(collection,ch) {
  for(let item of collection){
    if(item === ch){
      return true;
    }
  }
  return false;
}
function create_updated_collection(collection_a, object_b) {
  let result = [];
  for(let item of collection_a){
    if(includes(object_b.value,item.key)){
      result.push({key:item.key,count:item.count-1});
    }else{
      result.push({key:item.key,count:item.count});
    }
  }
  return result;
  //在这里写入代码
}

module.exports = create_updated_collection;
