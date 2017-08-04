'use strict';

function compare_collections(collection_a, collection_b) {
  let judge=true;
  for(var i=0,j=0; i<collection_a.length,j<collection_b.length; i++,j++){
    if(collection_a[i]==collection_b[j]){
      judge=true;
      break;
    }
  }
  return judge;
  //在这里写入代码
}

module.exports = compare_collections;


