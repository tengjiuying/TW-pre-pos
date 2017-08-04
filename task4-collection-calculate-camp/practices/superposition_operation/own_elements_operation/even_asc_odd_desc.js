'use strict';
var even_asc_odd_desc = function(collection){
  function sortup(x,y) {
    return x - y;
  }
  function sortdown(x,y) {
    return y - x;
  }
  var arr1=collection.filter(function (item) {
    return item%2 === 0;
  })
  var arr2=collection.filter(function (item) {
    return item%2 != 0;
  })
  var arr3=arr1.sort(sortup).concat(arr2.sort(sortdown));
  return arr3;
};
module.exports = even_asc_odd_desc;
