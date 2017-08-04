'use strict';
var rank_asc = function(collection){
  return collection.sort((fir,las)=>{
      return las - fir;
    })
};

module.exports = rank_asc;
