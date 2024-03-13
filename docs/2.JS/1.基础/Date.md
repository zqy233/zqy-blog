# Date

## 语法

```js
new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

Date()
```

## Date()构造函数/ new Date()

> The **`Date()`** constructor creates [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects. When called as a function, it returns a string representing the current time.

`Date()` 构造函数创建 `Date` 对象。当作为函数调用时，它返回一个表示当前时间的字符串。

不传参的情况下默认返回当前最新世界时时

```js
console.log(new Date()) // Sat Oct 10 2020 10:10:10 GMT+0800 (中国标准时间)
```

### GMT+0800 是什么？

0 度经线的地方平时，也叫格林平时，英文是 Greenwich Mean Time，简称 GMT 或 UT（universal time ），也叫世界时

+0800 的意思是，从 0 度格林经线到北京时区经线（120 度东八区时区经线），经差为 120 度，换算成时间为 8 小时（120 除以 15），即北京时间比格林平时快 8 小时，即 new Date()返回的是北京时间即中国标准时间

传参的情况下返回传参字符串的格林平时

字符串要求 YYYY-MM-DD 或者 YYYY-MM-DD HH:MM:SS，可以不传分秒，不传则默认为 00:00:00，因为 GMT+0800 (GMT+08:00) ，所以最终为 08:00:00

```js
const a = new Date('2020-10-10 10:10:10')
console.log(a) // Sat Oct 10 2020 10:10:10 GMT+0800 (中国标准时间)
const b = new Date('2020-10-10')
console.log(b) // Sat Oct 10 2020 08:00:00 GMT+0800 (中国标准时间)
```

## 方法

```js
const date = new Date()
date.getFullYear() // 获取年份
date.getMonth() + 1 // 获取月份
date.getDate() // 获取当前天数
date.getHours()
date.getMinutes()
date.getSeconds()
new Date().toISOString().slice(0, 10)
```

## Date.parse

解析一个表示某个日期的字符串，并返回从 1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的 UTC 时间）的毫秒数，如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），则返回值为 NaN

## setDate

setDate方法将月份中的某一天设置为日期对象

```js
let dateTime = new Date("2022-3-01")
dateTime = dateTime.setDate(0)
dateTime = new Date(dateTime)
console.log(dateTime.toLocaleDateString())
```

- 接受一个必需参数必需。day，为整数
- 表示月中的某一天。预期值是 1-31，但允许其他值
- 0表示上个月的最后一天
- -1表示上个月的最后一天的前一天
- 如果一个月有 28 天：32 将导致下个月的第四天
- 如果一个月有 29 天：32 将导致下个月的第三天
- 如果一个月有 30 天：32 将导致下个月的第二天
- 如果一个月有 31 天：32 将导致下个月的第一天

## 格式化时间

根据传入的字符串生成 YYYY-MM-DD HH:MM:SS 时间字符串函数

padStart 会根据传入的字符来填充字符串直到相应位数，这里是不到 2 位就传 0，写为 padStart(2, ‘0’)

```js
function dealdate(date) {
  const dt = new Date(date)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
```

## toISOString

使用 ISO 标准返回 Date 对象的字符串格式

该标准称为 ISO-8601 ，格式为: YYYY-MM-DDTHH:mm:ss.sssZ

```js
console.log(new Date().toISOString()) // 2021-07-14T06:50:45.306Z
```

显示当前年月日

```js
new Date().toISOString().slice(0, 10)
```

## 获取毫秒的三种方法

```js
Date.parse(new Date()) // 方法一
new Date().getTime())// 方法二
+new Date() // 方法三,把date的字符串类型转换为数字类型，则会变成毫秒数
```

## 获取月的天数

方法一

```js
console.log(new Date(new Date("2004-2-2").getFullYear(), new Date("2004-2-2").getMonth()+1, 0).getDate())
```

方法二

```js
const curDate = new Date("2004-2-2")
curDate.setDate(32) // 自动计算下个月的第几天，取决于上个月的天数
console.log(32-curDate.getDate())
```

方法三

```js
const curDate = new Date("2004-2-2")
// 获取当前月份
const curMonth = curDate.getMonth()
// 实际月份比curMonth大1，下面将月份设置为下一个月
curDate.setMonth(curMonth+1)
// 将日期设置为0，表示自动计算为上个月（这里指的是当前月份）的最后一天
curDate.setDate(0)
console.log(curDate.getDate())
```

## 判断是否闰年

```ts
/**
 * 判断当前是否是闰年
 * @param year 年份
 * @returns 当前是否是闰年
 */
function isLeap(year: number): boolean {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}
```

## 获取去年日期

闰年`366`天，平年`365`天，闰年2月多了个29日

```js
// 获取日期
function getDay(d, num) {
  const date = new Date(new Date(d).setDate(new Date(d).getDate() + num))
  const year = date.getFullYear()
  const month = (date.getMonth() + 1 + "").padStart(2, "0")
  const day = (date.getDate() + "").padStart(2, "0")
  return `${year}-${month}-${day}`
}

// 是否是闰年
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}

/**
 * 获取去年日期
 * @param d 日期
 * @returns 去年的日期 
 */
function lastYearDate(d) {
  const date = new Date(d)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const lastYear = year - 1
  const thisYearisLeap = isLeapYear(year)
  const lastYearIsLeap = isLeapYear(lastYear)
  // 特殊情况：去年是否是闰年 或 今年是闰年且为12月31日
  if (lastYearIsLeap || (thisYearisLeap && month == 12 && day == 31)) return getDay(d, -366)
  return getDay(d, -365)
}

// 测试
const date = "2021-2-10"
console.log(lastYearDate(date)) // 2020-02-10
const date1 = "2021-3-1"
console.log(lastYearDate(date1)) // 2020-02-29
const date2 = "2021-3-10"
console.log(lastYearDate(date2)) // 2020-03-09

const date3 = "2020-2-10"
console.log(lastYearDate(date3)) // 2019-02-10
const date4 = "2020-2-29"
console.log(lastYearDate(date4)) // 2019-03-01
const date5 = "2020-3-10"
console.log(lastYearDate(date5)) // 2019-03-11

const date6 = "2023-2-28"
console.log(lastYearDate(date6)) // 2022-02-28
```

## Return value 返回值

Calling `new Date()` (the `Date()` constructor) returns a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object. If called with an invalid date string, or if the date to be constructed will have a timestamp less than `-8,640,000,000,000,000` or greater than `8,640,000,000,000,000` milliseconds, it returns an [invalid date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) (a `Date` object whose [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) method returns `"Invalid Date"` and [`valueOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf) method returns `NaN`).
调用 `new Date()` （ `Date()` 构造函数）返回一个 `Date` 对象。如果使用无效的日期字符串调用，或者要构造的日期的时间戳小于 `-8,640,000,000,000,000` 或大于 `8,640,000,000,000,000` 毫秒，则返回无效日期（其 `toString()` 方法返回且 `valueOf()` 方法返回 `NaN` `"Invalid Date"` 的 `Date` 对象）。

Calling the `Date()` function (without the `new` keyword) returns a string representation of the current date and time, exactly as `new Date().toString()` does. Any arguments given in a `Date()` function call (without the `new` keyword) are ignored; regardless of whether it's called with an invalid date string — or even called with any arbitrary object or other primitive as an argument — it always returns a string representation of the current date and time.
调用该 `Date()` 函数（不带 `new` 关键字）将返回当前日期和时间的字符串表示形式，与 `new Date().toString()` 此完全相同。 `Date()` 函数调用中给出的任何参数（不带 `new` 关键字）都将被忽略;无论它是使用无效的日期字符串调用的，还是使用任何任意对象或其他基元作为参数调用的，它始终返回当前日期和时间的字符串表示形式。

## 判断今天周几

`getDay` 方法返回一个 0 到 6 的整数，代表星期日到星期六。

```js
var today = new Date();
var dayOfWeek = today.getDay();
var days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var todayText = days[dayOfWeek];
// 打印结果
console.log('今天是：' + todayText);
```

## 获取月第一天

```js
// 月份是从0开始的（0表示一月，11表示十二月），这里的1表示二月
const firstDayOfMonth = new Date(2000, 1);
// 第三个参数日不传，默认为1
// const firstDayOfMonth = new Date(2000, 1, 1);
console.log(
  `${firstDayOfMonth.getFullYear()}-${firstDayOfMonth.getMonth() + 1}-${firstDayOfMonth.getDate()}`
); // 输出：'2000-2-29'
```

## 获取月最后一天

```js
function getLastDayOfMonth(year, month) {
  // 注意：月份是从0开始的（0表示一月，11表示十二月）
  // 0表示上个月的最后一天，所以这里传入11，表示的是十二月的上一月，十一月的最后一天
  const lastDay = new Date(year, month, 0);
  return lastDay;
}

// 示例：获取2023年11月的最后一天
const year = 2023;
const month = 11; 
const lastDayOfMonth = getLastDayOfMonth(year, month);

console.log( `${lastDayOfMonth.getFullYear()}-${lastDayOfMonth.getMonth() + 1}-${lastDayOfMonth.getDate()}`); // 输出：2023-11-30
```

## 获取昨日

```js
const getYesterday = (dt) => {
  const date = new Date(dt)
  date.setDate(date.getDate() - 1)
  return date
}
```

## 获取指定年月的周日期数组

```js
function formatTime(date) {
  const dt = new Date(date);
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1 + "").padStart(2, "0");
  const d = (dt.getDate() + "").padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getMonthWeeks(year, month) {
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);
  const weeks = [];
  const currentDay = new Date(firstDayOfMonth);
  let weekNumber = 0;
  const weekNumberCn = ["一", "二", "三", "四", "五", "六"]; // 最多六周
  let isEnd = true;
  while (isEnd) {
    const startOfWeek = new Date(currentDay);
    const endOfWeek = new Date(currentDay);
    // 获取本周的开始日期（周一）
    startOfWeek.setDate(
      currentDay.getDate() -
        currentDay.getDay() +
        (currentDay.getDay() === 0 ? -6 : 1)
    );
    // 获取本周的结束日期（周日）
    endOfWeek.setDate(
      currentDay.getDate() -
        currentDay.getDay() +
        (currentDay.getDay() === 0 ? 0 : 7)
    );
    weeks.push({
      weekNumber: "第" + weekNumberCn[weekNumber] + "周",
      start: formatTime(startOfWeek),
      end: formatTime(endOfWeek),
    });
    weekNumber++;
    if (endOfWeek < lastDayOfMonth) {
      currentDay.setDate(currentDay.getDate() + 7);
    } else {
      isEnd = false;
    }
  }

  return weeks;
}

// 示例：获取2023年10月的周日期数组
const year = 2023;
const month = 10;
const monthWeeks = getMonthWeeks(year, month);
console.log(monthWeeks);
// [ { weekNumber: '第一周', start: '2023-09-25', end: '2023-10-01' },
//   { weekNumber: '第二周', start: '2023-10-02', end: '2023-10-08' },
//   { weekNumber: '第三周', start: '2023-10-09', end: '2023-10-15' },
//   { weekNumber: '第四周', start: '2023-10-16', end: '2023-10-22' },
//   { weekNumber: '第五周', start: '2023-10-23', end: '2023-10-29' },
//   { weekNumber: '第六周', start: '2023-10-30', end: '2023-11-05' } ]
```

