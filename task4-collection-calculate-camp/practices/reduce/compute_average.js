'use strict';

function compute_average(collection) {
  let avg=0;
  let sum=0;
  for(var i=0; i<collection.length; i++){
      sum+=collection[i];
  }
  avg=sum/(collection.length);
  return avg;
  //在这里写入代码
}

module.exports = compute_average;

