'use strict';
var is_exist_element = function(collection,element){
  return collection.filter((item,i)=> i%2===0).some((item,i,result)=> result.includes(element));
};
module.exports = is_exist_element;
