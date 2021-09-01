/**

* 请用您认为最优化的方式，将arr中的type为4的数据过滤出来，

* 然后按相同的 name + date（按天）合并value（value累加），

* 然后按 value 降序(从大到小)排序，

* 最后每行按照 "${name},${本地日期},售出${sum(value)}部" 的格式，如："小米2,2017年06月08日,售出5部", 打印(console.log)出来。



* 可以使用第三方js库，可以使用es6。

* 请在半小时内完成。



要求最后输出结果样例如下:



oppor9,2017年06月04日,售出7部

魅蓝note2,2017年06月07日,售出6部

魅蓝note2,2017年06月02日,售出5部

小米2,2017年06月08日,售出5部
**/
var arr = [
  { name: "小米1", value: 1, type: 2, date: "2018-06-07T08:00:01.589Z" },

  { name: "锤子T1", value: 1, type: 2, date: "2018-06-07T08:10:01.589Z" },

  { name: "小米2", value: 1, type: 4, date: "2018-06-07T20:00:01.589Z" },

  { name: "小米2", value: 4, type: 4, date: "2018-06-07T20:10:21.189Z" },

  { name: "小米4", value: 1, type: 4, date: "2018-06-07T08:00:01.560Z" },

  { name: "小米4", value: 2, type: 4, date: "2018-06-07T08:10:31.584Z" },

  { name: "小米6", value: 1, type: 3, date: "2018-06-07T08:00:01.589Z" },

  { name: "小米5s", value: 1, type: 4, date: "2018-06-07T08:00:01.589Z" },

  { name: "锤子T2", value: 1, type: 4, date: "2018-06-07T08:00:01.589Z" },

  { name: "锤子T1", value: 4, type: 4, date: "2018-06-07T08:06:01.589Z" },

  { name: "魅蓝note5", value: 1, type: 4, date: "2018-06-07T08:00:01.589Z" },

  { name: "魅蓝note2", value: 5, type: 4, date: "2018-06-02T08:07:01.589Z" },

  { name: "魅蓝note2", value: 6, type: 4, date: "2018-06-07T08:00:01.589Z" },

  { name: "魅蓝note3", value: 1, type: 4, date: "2018-06-05T08:00:01.589Z" },

  { name: "魅蓝note", value: 1, type: 4, date: "2018-06-07T08:00:01.589Z" },

  { name: "oppor9", value: 7, type: 4, date: "2018-06-04T08:04:01.588Z" },

  { name: "华为p9", value: 1, type: 4, date: "2018-06-02T08:00:01.577Z" },

  { name: "华为p9", value: 2, type: 4, date: "2018-06-07T08:00:01.110Z" },

  { name: "华为p10", value: 1, type: 1, date: "2018-06-07T08:00:01.534Z" },
];

const filerFuc = (arr) => {
  let new_ = new Map();
  arr.forEach((item) => {
    if (item.type === 4) {
      let date_ = new Date(item.date);
      let datesTR =
        date_.getFullYear() +
        "年" +
        (date_.getMonth() + 1) +
        "月" +
        date_.getDate();
      let key = item.name + datesTR;
      if (new_.has(key)) {
        let pre = new_.get(key);
        pre.nums.push(item.value);
        pre.nums.sort((a, b) => b - a);
        str: `${item.name},${datesTR},售出${pre.nums.reduce(
          (p, c) => p + c
        )}部`,
          new_.set(key, pre);
      } else {
        new_.set(key, {
          name: item.name,
          time: datesTR,
          nums: [item.value],
          str: `${item.name},${datesTR},售出${item.value}部`,
        });
      }
    }
  });
  return [...new_];
};

console.log(filerFuc(arr));
