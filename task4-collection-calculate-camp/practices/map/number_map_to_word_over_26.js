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


var number_map_to_word_over_26 = function(collection){
  return collection.map((item)=>{
    return mapWord(item);
    });
  //return ['a','m','aa','ad','y','aa'];
};

module.exports = number_map_to_word_over_26;
