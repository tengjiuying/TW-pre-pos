'use strict';
var calculate_median = function(collection){
  let count=0;
  let collectioN = [];
  collection = collection.sort((fir,las)=>{
      return fir - las;
  })
  for(var i=0,j=0; i<collection.length; i++){
    if(collection[i]%2 == 0){
      collectioN[j]=collection[i];
      j++;
    }
  }
  collectioN = collectioN.sort((fir,las)=>{
    return fir - las;
  })
  if(j%2==0){
    return(collectioN[collectioN.length/2-1]+collectioN[collectioN.length/2])/2;
  }else{
    return collectioN[parseInt(collectioN.length/2)];
  }
};
module.exports = calculate_median;
