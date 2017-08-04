'use strict';

function get_integer_interval_2(number_a, number_b) {
  let result = [];
  if(number_a < number_b){
        result=getInterval_2(number_a,number_b);
    }else{
          result=getInterval_2(number_b,number_a).reverse();
        }
  return result;
  //在这里写入代码
}

module.exports = get_integer_interval_2;
function getInterval_2(number_a,number_b) {
  let result = [];
  while(number_a<=number_b){
    if(number_a%2==0){
      result.push(number_a);
    }
    number_a++;
  }
  return result;
}

