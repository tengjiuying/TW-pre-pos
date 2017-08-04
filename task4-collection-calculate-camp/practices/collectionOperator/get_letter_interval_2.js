'use strict';
const zifu = ['z','a','b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y'];
//这个声明创建了一个常量，可以在全局作用域或者函数内声明常量，常量需要被初始化
function getPass(num) {
  let first = num%26;
  let second = num/26;
  let result = '';
  if(second>1 && first!==0){
    result+=zifu[parseInt(second)];
  }
  if(second>1 && first===0){
    result+=zifu[parseInt(second)-1];
  }
  result += zifu[first];
  return result;
}
function getInterval_2(number_a, number_b) {
  let result = [];
  while (number_a <= number_b){
    result.push(getPass(number_a));
    number_a++;
  }
  return result;
}
function get_letter_interval_2(number_a, number_b) {
  let result = [];
  if(number_a < number_b){
    result = getInterval_2(number_a,number_b);
  }else{
    result = getInterval_2(number_b,number_a).reverse();
  }
  return result;
  //在这里写入代码
}

module.exports = get_letter_interval_2;

