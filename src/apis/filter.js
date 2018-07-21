// 过滤价格保留2位小数
const moneyFilter = (money = 0) => {
  return money.toFixed(2);
}

// 价格过滤,取整数部分
const moneyInteger = (money) =>{
    return parseInt(money);
}
// 价格过滤,取小数部分
const moneyDecimal = (money) =>{
    return parseInt(money.toString().split('.')[1]);
}


const asterisk = (value) => {
  value = value.toString();
  return value.replace(/^(\d{2})\d{5}(\d+)/,"$1*****$2");  
}

export default {
  moneyFilter,
  asterisk,
  moneyInteger,
  moneyDecimal
}
