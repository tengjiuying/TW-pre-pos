'use strict';

function get_integer_interval(number_a, number_b) {
  let result = [];
  if(number_a < number_b){
    result = getInterval(number_a,number_b);
  }else{
    result = getInterval(number_b,number_a).reverse();//reverse() 方法用于颠倒数组中元素的顺序
  }
  return result;
  //在这里写入代码
}

module.exports = get_integer_interval;
function getInterval(number_a,number_b) {
  let result = [];
  while(number_a <= number_b) {
    result.push(number_a);
    number_a++;
  }
  return result;
}
