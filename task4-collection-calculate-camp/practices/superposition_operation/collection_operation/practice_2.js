'use strict';

function hybrid_operation_to_uneven(collection) {
  let sum=0;
  let collectioN=[];
  for(var i=0,j=0; i<collection.length; i++){
    if(collection[i]%2 != 0){
      collectioN[j]=collection[i]*3+2;
      j++;
    }
  }
  return collectioN;
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

