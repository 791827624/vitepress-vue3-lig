
// 整数
const IntegerRegex = /(^-?[1-9]\d*|0)$/
// 正整数
const IntegerPlusRegex = /^[+]{0,1}(\d+)$/
// 小数
const DecimalRegex = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/
// 正小数
const DecimalPlusRegex = /^[+]{0,1}(\d+\.\d+)$/
// 百分比校验（最多两位小数，不能超过100）
const PercentageRegex = /^((\d|[1-9]\d)(\.\d{1,2})?|100|100\.0|100\.00)$/
// 邮箱
const EmailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
// 手机号码
const MobileRegex = /^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/
// 金额校验（不能超过两位小数）
const MoneyRegex = /^(([1-9]\d*)|(0))(\.\d{1,2})?$/
// 支持负数的金额校验
const MoneyNegativeRegex = /^((-?[1-9]\d*)|(-?0))(\.\d{1,2})?$/

export {
  IntegerRegex,
  IntegerPlusRegex,
  DecimalRegex,
  DecimalPlusRegex,
  PercentageRegex,
  EmailRegex,
  MobileRegex,
  MoneyRegex,
  MoneyNegativeRegex,
}