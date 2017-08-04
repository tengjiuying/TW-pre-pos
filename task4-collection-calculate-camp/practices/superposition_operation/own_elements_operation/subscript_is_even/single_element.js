'use strict';
var single_element = function(collection){
  var result=collection.filter((item , index , arr) => index%2!=0);
  return result.filter((item ,index ,arr) => arr.indexOf(item)===arr.lastIndexOf(item) );
};

module.exports = single_element;
