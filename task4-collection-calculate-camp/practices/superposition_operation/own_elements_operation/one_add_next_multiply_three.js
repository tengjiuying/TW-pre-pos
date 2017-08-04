'use strict';
function one_add_next_multiply_three(collection){
  for(var i=0; i<collection.length-1; i++){
    collection[i] =  (collection[i] + collection[i+1]) * 3 ;
  }
  collection.pop();
  return collection;
  //return [12,24,36,48,60,72,84,96,108,120];
}
module.exports = one_add_next_multiply_three;
