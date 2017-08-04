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
    let key=item.key;
    let count = item.count;
    if(includes(object_b.value,key)){
      count=count-parseInt(count/3);
    }
    result.push({key,count});
  }
  return result;
  //在这里写入代码
}

module.exports = create_updated_collection;
