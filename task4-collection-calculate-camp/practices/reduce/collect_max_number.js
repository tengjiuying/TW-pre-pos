'use strict';

function collect_max_number(collection) {
  return collection.reduce((max,item)=>{
    if(max < item){
      max = item;
    return max;
  }
    });
  //在这里写入代码
}

module.exports = collect_max_number;
