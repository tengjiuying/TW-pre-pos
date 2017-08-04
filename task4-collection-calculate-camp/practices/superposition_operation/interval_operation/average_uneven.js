'use strict';

function average_uneven(collection) {
  let sum=0;
  let avg=0;
  for(var i=0,j=0; i<collection.length; i++){
    if(collection[i]%2 != 0){
      sum += collection[i];
      j++;
    }
  }
  avg = sum/j;
  return avg;
  //在这里写入代码
}

module.exports = average_uneven;
