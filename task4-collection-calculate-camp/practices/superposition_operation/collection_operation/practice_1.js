'use strict';

function hybrid_operation(collection) {
  let sum=0;
  for(var i=0,j=0; i<collection.length; i++){
    collection[j]=collection[i]*3+2;
    j++;
  }
  for(var k=0; k<collection.length; k++){
    sum += collection[k];
  }
  return sum;
  //在这里写入代码
}

module.exports = hybrid_operation;

