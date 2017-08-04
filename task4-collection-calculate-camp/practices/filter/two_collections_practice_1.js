'use strict';

function choose_common_elements(collection_a, collection_b) {
  let result = [];
  for(var i=0; i<collection_a.length; i++){
    for(var j=0; j<collection_b.length; j++){
      if(collection_b[j]==collection_a[i]){
        result.push(collection_b[j]);
      }
    }
  }
  return result;
  //在这里写入代码
}

module.exports = choose_common_elements;
