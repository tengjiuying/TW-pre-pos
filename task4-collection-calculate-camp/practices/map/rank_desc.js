'use strict';
var rank_desc = function(collection){
  return collection.sort((fir,las)=>{
      return fir - las;
    })
  //return [2,3,4,5,6];
};

module.exports = rank_desc;
