function find(collection,ch) {
  for(let item of collection){
    if(item.key === ch){
      return item;
    }
  }
  return null;
}
function summarize(collection) {
  let result = [];
  for(let item of collection){
    let obj = find(result,item);
    if (obj){
      obj.count++;
    }else{
      result.push({key:item,count:1});
    }
  }
  return result;
}

function includes(collection,ch) {
  for(let item of collection){
    if(item === ch){
      return true;
    }
  }
  return false;
}


function discount(collection,promotionItems) {
  let result = [];
  for(let item of collection){
    let key=item.key;
    let count = item.count;
    if(includes(promotionItems,key)){
      count=count-Math.floor(count / 3);
    }
    result.push({key,count});
  }
  return result;
}

function create_updated_collection(collection_a, object_b) {
  let summarized=summarize(collection_a);
  return discount(summarized,object_b.value);
  //在这里写入代码
}

module.exports = create_updated_collection;
