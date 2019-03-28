export default{
//      //返回天数
//   getDaysInMonth: function (year, month) {
//     // month = parseInt(month, 10); // parseInt(number,type)这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。
//     var d = 
//     return d.getDate()
//   },
   //当前时间
   getNewDate: function () {
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var monthDate = new Date(date.getFullYear(), month, 0).getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    strDate = Number(strDate);
    let thismonth = date.getFullYear() + "-" + month + "-" +  monthDate;
    let dateDiff = monthDate - strDate
    let yjthismonth = date.getFullYear() + "-" + month - 1
    let topmonth = date.getFullYear() + "-" + month
    // let currentdate = date.getFullYear() + "-" + month + "-" + strDate;
    console.log(thismonth,strDate,monthDate,dateDiff)
    return date= [thismonth,strDate,monthDate,dateDiff,yjthismonth,topmonth];
  },
}