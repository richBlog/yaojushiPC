// 过滤价格保留2位小数
const moneyFilter = (money = 0) => {
  return money.toFixed(2);
}

const asterisk = (value) => {
  value = value.toString();
  return value.replace(/^(\d{2})\d{5}(\d+)/,"$1*****$2");  
}

export default {
  moneyFilter,
  asterisk
}
