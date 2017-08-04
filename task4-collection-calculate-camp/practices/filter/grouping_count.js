'use strict';

function grouping_count(collection) {
  let result={};
  collection.forEach((item)=>{
    if(item.toString() in result){
      result[item.toString()]++;
  }else{
      result[item.toString()]=1;
  }
  })
  return result;
  //在这里写入代码
}

module.exports = grouping_count;
