'use strict';

//noinspection JSAnnotator
function even_to_letter(collection) {
  var result = function (num) {
    var jieguo = '';
    while (num){
      if(num%26==0) {
        jieguo += String.fromCharCode(26 + 96);
        num = (num / 26) - 1;
      }else{
        jieguo += String.fromCharCode(num%26+96);
        num=~~(num/26);
      }
    }
    return jieguo.split('').reverse().join('');//join()函数：通过指定分隔符来进行分割
  }
  var arr = collection.filter(function(x){
    return x%2==0;
  })

  var letter = arr.map(function (item) {
    return result(item);
  })
  return letter;
  //在这里写入代码
}

module.exports = even_to_letter;
