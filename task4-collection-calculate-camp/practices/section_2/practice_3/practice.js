function find(collection,ch) {
  for(let item of collection){
    if(item.name === ch){
      return item;
    }
  }
  return null;
}
function summarize(collection) {
  let result = [];
  for(let item of collection){
    let obj = find(result,item)
    if(obj){
      obj.summary++;
    }else{
      result.push({name:item,summary:1});
    }
  }
  return result;
}
function split(item) {
  if(item.includes("-")){
    let array = item.split("-");
    return {key:array[0],count:parseInt(array[1],10)};
  }
  if(item.includes("[")){
    let key = item.charAt(0);
    let count = parseInt(item.substr(2,item.length-1));
    return {key:key,count:count};
  }
  if(item.includes(":")){
    let array = item.split(":");
    return {key:array[0],count:parseInt(array[1],10)};
  }
}
function expand(collection){
  let result = [];
  for(let item of collection){
    if(item.length === 1){
      result.push(item);
    }else{
      let {key,count} = split(item);
      push(result,key,count);
    }
  }
  return result;
}

function push(result,key,count) {
  for(var i=0; i<count; i++){
    result.push(key);
  }
}

function count_same_elements(collection) {
  let expandedArray = expand(collection);
  return summarize(expandedArray);
  //在这里写入代码
}

module.exports = count_same_elements;
