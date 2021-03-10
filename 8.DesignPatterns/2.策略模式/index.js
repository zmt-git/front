// 根据不同参数可以命中不同的策略
// _s 能减少大量的 if 语句 
// _s 复用性好

// _i  工资等级计算

// 策略类
const levelObj = {
  A (money) {
    return money * 3
  },
  B (money) {
    return money * 2
  },
  C (money) {
    return money
  }
}

// 环境类
function calculateSalary (level, money) {
  if (!levelObj[level]) return
  return levelObj[level](money)
}


const basisSalary = 1000
console.log(calculateSalary('A', basisSalary))
console.log(calculateSalary('C', basisSalary))
console.log(calculateSalary('B', basisSalary))