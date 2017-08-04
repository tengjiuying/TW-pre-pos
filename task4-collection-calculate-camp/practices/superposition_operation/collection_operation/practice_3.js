'use strict';

function hybrid_operation_to_uneven(collection) {
  let sum=0;
  let collectioN=[];
  for(var i=0,j=0; i<collection.length; i++){
    if(collection[i]%2 != 0){
      collectioN[j]=collection[i]*3+5;
      j++;
    }
  }
  for(var k=0; k<collectioN.length; k++){
    sum+=collectioN[k];
  }
  return sum;
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

