'use strict';

function calculate_elements_sum(collection) {
  let sum=0;
  for(var i=0; i<collection.length; i++){
    sum+=collection[i];
  }
  return sum;
  //在这里写入代码
}

module.exports = calculate_elements_sum;

