var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DateButton from './DateButton';
var DisplayedDates = function (_a) {
    var _b, _c;
    var datesInRange = _a.datesInRange, setSelectedDate = _a.setSelectedDate, setDatePickerOpen = _a.setDatePickerOpen;
    function createDateButton(date, month) {
        var today = new Date();
        var simplifiedTodaysDate = new Date("".concat(today.getFullYear(), "-").concat(today.getMonth(), "-").concat(today.getDate()));
        var simplifiedCurrentDate = new Date("".concat(date.getFullYear(), "-").concat(date.getMonth(), "-").concat(date.getDate()));
        if (simplifiedCurrentDate.getTime() === simplifiedTodaysDate.getTime()) {
            return _jsx(DateButton, { date: date, month: month, isToday: true, setSelectedDate: setSelectedDate, setDatePickerOpen: setDatePickerOpen }, date.toString());
        }
        else {
            return _jsx(DateButton, { date: date, month: month, isToday: false, setSelectedDate: setSelectedDate, setDatePickerOpen: setDatePickerOpen }, date.toString());
        }
    }
    return (_jsxs("div", __assign({ className: 'date-picker__dates' }, { children: [(_b = datesInRange.previousMonth) === null || _b === void 0 ? void 0 : _b.map(function (date) { return createDateButton(date, 'previous'); }), datesInRange.currentMonth.map(function (date) { return createDateButton(date, 'current'); }), (_c = datesInRange.nextMonth) === null || _c === void 0 ? void 0 : _c.map(function (date) { return createDateButton(date, 'next'); })] }), void 0));
};
export default DisplayedDates;
