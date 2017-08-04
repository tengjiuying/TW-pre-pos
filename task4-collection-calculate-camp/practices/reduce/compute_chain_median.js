'use strict';

function compute_chain_median(collection) {
  let median = 0;
  let collectioN=collection.split('->').map((item)=>{
    return parseInt(item);
    });
  collectioN=collectioN.sort((fir,las)=>{return fir - las});
  if(collectioN.length%2===0){
    median=(collectioN[collectioN.length/2-1]+collectioN[collectioN.length/2])/2;
  }else{
    median=collectioN[parseInt(collectioN.length/2-1)];
  }
  return median;
  //在这里写入代码
}

module.exports = compute_chain_median;
