function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}
function substractDays(date, days) {
    date.setDate(date.getDate() - days);
    return date;
}
function getCurrentMonthDays(startDate, stopDate) {
    var dateArray = [];
    var currentStartDate = new Date(startDate.valueOf());
    while (currentStartDate <= stopDate) {
        dateArray.push(new Date(currentStartDate));
        currentStartDate = addDays(currentStartDate, 1);
    }
    return dateArray;
}
function getPreviousMonthDays(startDate) {
    var dateArray = [];
    var currentStartDate = new Date(startDate.valueOf());
    var previousMonthLastDate = substractDays(currentStartDate, 1);
    for (var i = previousMonthLastDate.getDay(); i >= 0; i--) {
        dateArray.push(new Date(previousMonthLastDate));
        if (new Date(previousMonthLastDate).getDay() === 0) {
            dateArray.reverse();
            break;
        }
        previousMonthLastDate = substractDays(previousMonthLastDate, 1);
    }
    return dateArray;
}
function getNextMonthDays(stopDate) {
    var dateArray = [];
    var currentStopDate = addDays(stopDate, 1);
    for (var i = currentStopDate.getDay(); i <= 6; i++) {
        dateArray.push(new Date(currentStopDate));
        currentStopDate = addDays(currentStopDate, 1);
    }
    return dateArray;
}
function getDates(year, month) {
    var intYear = parseInt(year.value);
    var intMonth = parseInt(month.value);
    // Months are indexed from 0
    var previousMonthDays, nextMonthDays;
    var startDate = new Date(intYear, intMonth, 1);
    var stopDate = new Date(intYear, intMonth + 1, 0);
    if (startDate.getDay() !== 0)
        previousMonthDays = getPreviousMonthDays(startDate);
    var currentMonthDays = getCurrentMonthDays(startDate, stopDate);
    if (stopDate.getDay() !== 6)
        nextMonthDays = getNextMonthDays(stopDate);
    var result = {
        previousMonth: previousMonthDays,
        currentMonth: currentMonthDays,
        nextMonth: nextMonthDays
    };
    return result;
}
var formatDate = function (date) {
    var formatedDate = "".concat(date.getDate()).length < 2 ? "0".concat(date.getDate()) : "".concat(date.getDate());
    var formatedYear = "".concat(date.getFullYear());
    var formatedMonth = "".concat(date.getMonth() + 1).length < 2 ? "0".concat(date.getMonth() + 1) : "".concat(date.getMonth() + 1);
    return "".concat(formatedDate, "/").concat(formatedMonth, "/").concat(formatedYear);
};
function getYearOptions(startYear, stopYear) {
    var yearRange = [];
    for (var i = startYear; i <= stopYear; i++)
        yearRange.push({ label: "".concat(i), value: "".concat(i) });
    return yearRange;
}
export { getDates, formatDate, getYearOptions };
