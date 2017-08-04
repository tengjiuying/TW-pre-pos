'use strict';
var even_group_calculate_average = function(collection){
  var result = [];
  var collectioN = collection.filter((x,y) => x%2===0 && y%2 ===1).sort((fir,las)=>{
    return fir - las;
  });
  if(collectioN.length===0){
    result.push(0);
    return result;
  }else{
    var arr1=collectioN.filter((x)=> x<10);
    var arr2=collectioN.filter((x)=> x>=10&&x<100);
    var arr3=collectioN.filter((x)=> x>=100&&x<1000);
    if(arr1.length!=0 && arr2.length!=0){
      result.push(arr1.reduce((a,b)=> a+b)/arr1.length);
      result.push(arr2.reduce((a,b)=> a+b)/arr2.length);
    }
    result.push(arr3.reduce((a,b)=> a+b)/arr3.length);
    return result;
  }
};
module.exports = even_group_calculate_average;
