'use strict';

function get_intersection(collection_a, collection_b) {
  let collection_c = [];
  for(var i=0; i<collection_b.length; i++){
    for(var j=0; j<collection_a.length; j++){
      if(collection_b[i] == collection_a[j]){
        collection_c.push(collection_b[i]);
      }
    }
  }
  return collection_c;
  //在这里写入代码
}

module.exports = get_intersection;
