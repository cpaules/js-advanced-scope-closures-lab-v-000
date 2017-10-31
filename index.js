function produceDrivingRange(blockRange) {
  return function fn(s1, s2) {
    let num = parseInt(s2) - parseInt(s1)
    return num <= blockRange ? `within range by ${Math.abs(num - blockRange)}` : `${Math.abs(num - blockRange)} blocks out of range`
  }
}

function produceTipCalculator(percentage) {
  return function fn(bill) {
    return percentage * bill
  }
}
