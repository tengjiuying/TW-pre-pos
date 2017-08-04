'use strict';
const zifu=['z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
  'r','s','t','u','v','w','x','y','z'];

function mapWord(num) {
  let first = num%26;
  let second = num/26;
  let word = '';
  if(second>1 && first != 0){
    word += zifu[parseInt(second)];
  }
  if(second>1 && first ==0){
    word += zifu[parseInt(second)-1];
  }
  word += zifu[first];
  return word;
}


function median_to_letter(collection) {
  let median = 0;
  let collectioN=collection.map((item)=>{
      return parseInt(item);
  });
  collectioN=collectioN.sort((fir,las)=>{return fir - las});
  if(collectioN.length%2===0){
    median=(collectioN[collectioN.length/2-1]+collectioN[collectioN.length/2])/2;
  }else{
    median=collectioN[parseInt(collectioN.length/2-1)];
  }
  return mapWord(Math.ceil(median));
  //在这里写入代码
}

module.exports = median_to_letter;
