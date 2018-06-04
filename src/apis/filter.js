// 过滤价格保留2位小数
const moneyFilter = (money = 0)=>{
    return money.toFixed(2);
}

export default {
    moneyFilter
}