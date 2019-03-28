 //格式化时间
 const formatDate = function (value, fmt = 'yyyy-MM-dd hh:mm:ss') {
     let getDate = new Date(value);
     let o = {
         'M+': getDate.getMonth() + 1,
         'd+': getDate.getDate(),
         'h+': getDate.getHours(),
         'm+': getDate.getMinutes(),
         's+': getDate.getSeconds(),
         'q+': Math.floor((getDate.getMonth() + 3) / 3),
         'S': getDate.getMilliseconds()
     };
     if (/(y+)/.test(fmt)) {
         fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
     }
     for (let k in o) {
         if (new RegExp('(' + k + ')').test(fmt)) {
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
         }
     }
     return fmt;
 };

 /**
  * 获取本周、本季度、本月、上月的开始日期、结束日期
  */
 let now = new Date(); //当前日期
 let nowDayOfWeek = now.getDay(); //今天本周的第几天
 let nowDay = now.getDate(); //当前日
 let nowMonth = now.getMonth(); //当前月
 let nowYear = now.getYear(); //当前年
 nowYear += (nowYear < 2000) ? 1900 : 0; //
 let lastMonthDate = new Date(); //上月日期
 lastMonthDate.setDate(1);
 lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
 let lastYear = lastMonthDate.getYear();
 let lastMonth = lastMonthDate.getMonth();
//获得某月的天数 
function getMonthDays(myMonth) {
    var monthStartDate = new Date(nowYear, myMonth, 1);
    var monthEndDate = new Date(nowYear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
}

 //获取今天开始时间
 function getTodayStartDate() {
     let date = new Date(nowYear, nowMonth, nowDay);
     return formatDate(date, 'yyyy-MM-dd') + ' 00:00:00';
 }
 //获取今天结束时间
 function getTodayEndDate() {
     let date = new Date(nowYear, nowMonth, nowDay);
     return formatDate(date);
 }

 //获取昨天开始时间
 function getyesTerDayStartDate() {
     let date = new Date(nowYear, nowMonth, nowDay - 1);
     return formatDate(date, 'yyyy-MM-dd') + ' 00:00:00';
 }

 //获取昨天结束时间
 function getyesTerDayEndDate() {
     let date = new Date(nowYear, nowMonth, nowDay - 1);
     return formatDate(date, 'yyyy-MM-dd') + ' 23:59:59';
 }

 //获得本周的开始日期 
 function getWeekStartDate() {
     let weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
     return formatDate(weekStartDate);
 }

 //获得本周的结束日期 
 function getWeekEndDate() {
     let weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
     return formatDate(weekEndDate);
 }
 //获得上周的开始日期
 function getLastWeekStartDate() {
     let weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 7);
     return formatDate(weekStartDate);
 }
 //获得上周的结束日期
 function getLastWeekEndDate() {
     let weekEndDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 1);
     return formatDate(weekEndDate);
 }
 //获得本月的开始日期 
 function getMonthStartDate() {
     let monthStartDate = new Date(nowYear, nowMonth, 1);
     return formatDate(monthStartDate);
 }

 //获得本月的结束日期 
 function getMonthEndDate() {
     let monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
     return formatDate(monthEndDate);
 }
 //获得上月开始时间
 function getLastMonthStartDate() {
     let lastMonthStartDate = new Date(nowYear, lastMonth, 1);
     return formatDate(lastMonthStartDate);
 }

 //获得上月结束时间
 function getLastMonthEndDate() {
     const lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth));
     return formatDate(lastMonthEndDate);
 }



 export function returnNeedTime(type) {
     let time;
     switch (type) {
         case 1:
             time = [getTodayStartDate(), getTodayEndDate()];
             break;
         case 2:
             time = [getyesTerDayStartDate(), getyesTerDayEndDate()];
             break;
         case 3:
             time = [getWeekStartDate(), getWeekEndDate()];
             break;
         case 4:
             time = [getLastWeekStartDate(), getLastWeekEndDate()];
             break;
         case 5:
             time = [getMonthStartDate(), getMonthEndDate()];
             break;
         case 6:
             time = [getLastMonthStartDate(), getLastMonthEndDate()];
             break;
         default:
             time = [getTodayStartDate(), getTodayEndDate()];
             break;
     }
     return time;
 }