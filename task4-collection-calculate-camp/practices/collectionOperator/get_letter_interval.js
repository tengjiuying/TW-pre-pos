'use strict';

function get_letter_interval(number_a, number_b) {
  let result = [];
  if(number_a < number_b){
    result = getInterval(number_a,number_b);
  }else{
    result = getInterval(number_b,number_a).reverse();
  }
  return result;
  //在这里写入代码
}

module.exports = get_letter_interval;
function getInterval(number_a,number_b) {
  let result = [];
  while(number_a<=number_b){
    result.push(String.fromCharCode(number_a+96));
    number_a++;
  }
  return result;
}
