'use strict';
function rank_by_two_large_one_small(collection){
 function sortup(x,y) {
   return x - y;
 }
 var flag=0;
 collection.sort(sortup);
 for(var i=0; i<collection.length; i++){
   if (i%3 ==0 || i==0){
     if(flag<Math.floor(collection.length/3)){
       collection.splice(i+3,0,collection[i]);
       collection.splice(i,1);
       flag++;
     }else{
       break;
     }
   }

 }
 return collection;//这里写代码。。。
}
module.exports = rank_by_two_large_one_small;
