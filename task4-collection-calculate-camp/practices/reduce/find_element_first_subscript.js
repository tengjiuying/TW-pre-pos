'use strict';

function calculate_elements_sum(collection, element) {
  let result=0;
  for(var i=0; i<collection.length; i++){
    if(collection[i]==element){
      result=i;
      break;
    }
  }
  return result;
  //在这里写入代码
}

module.exports = calculate_elements_sum;

