'use strict';
var calculate_average = function(collection){
  let sum=0;
  let avg=0;
  for(var i=0,j=0; i<collection.length; i++){
    if(collection[i]%2 == 0){
      sum+=collection[i];
      j++;
    }
  }
  avg = sum/j;
  return avg;
};
module.exports = calculate_average;
