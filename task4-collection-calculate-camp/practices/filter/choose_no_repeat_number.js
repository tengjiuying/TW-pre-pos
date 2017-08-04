'use strict';

function choose_no_repeat_number(collection) {
  let result = [];
  //var j=collection[0];
  for(var i=0,j=i+1; i<collection.length; i++,j++){
      if(collection[i] != collection[j]){
        result.push(collection[i])
      }
  }
  return result;
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
