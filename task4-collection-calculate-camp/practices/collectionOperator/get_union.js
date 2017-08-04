'use strict';

function get_union(collection_a, collection_b) {
  /*let collection_c = [];
  //collection_c.push(collection_a);
  for(var i=0; i<collection_a.length; i++){
    for(var j=0; j<collection_b.length; j++){
      if(collection_b[j] != collection_a[i]){
        collection_a.push(collection_b[j]);
      }
    }
  }
  collection_c.push(collection_a);
  return collection_c;*/
  collection_b.forEach((item)=>{
    if(collection_a.indexOf(item)===-1){
      collection_a.push(item);
  }
  })
  return collection_a;
  //在这里写入代码
}

module.exports = get_union;

