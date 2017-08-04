'use strict';

function compute_median(collection) {
  collection = collection.sort((fir,las)=>{
    return fir - las;
    });
  if(collection.length%2==0){
    return(collection[collection.length/2-1]+collection[collection.length/2])/2;
  }else{
    return collection[parseInt(collection.length/2-1)];
  }//在这里写入代码
}

module.exports = compute_median;


