'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result = [];
  collection_a.forEach((item)=>{
    for(var i=0; i<collection_b.length; i++){
    if (item % collection_b[i] != 0) {
    } else {
      result.push(item);
      break;
    }
  }
})
  return result;
  //在这里写入代码
}

module.exports = choose_divisible_integer;
