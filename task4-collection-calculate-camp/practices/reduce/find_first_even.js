'use strict';

function find_first_even(collection) {
  let result = 0;
  for(var i=0; i<collection.length; i++){
    if(collection[i]%2==0){
      result=collection[i];
      break;
    }
  }
  return result;
  //在这里写入代码
}

module.exports = find_first_even;

