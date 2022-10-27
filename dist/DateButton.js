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
import { jsx as _jsx } from "react/jsx-runtime";
var DateButton = function (_a) {
    var date = _a.date, month = _a.month, setSelectedDate = _a.setSelectedDate, setDatePickerOpen = _a.setDatePickerOpen, isToday = _a.isToday;
    function formatDateValue(dateString) {
        var date = new Date(dateString);
        return {
            label: "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate()),
            value: new Date(date.getFullYear(), date.getMonth(), date.getDate())
        };
    }
    function handleDatePick(e) {
        var pickedDate = formatDateValue(e.currentTarget.value);
        setSelectedDate(pickedDate);
        setDatePickerOpen(false);
    }
    var className = isToday === true ? "cell date ".concat(month, "-month-date today") : "cell date ".concat(month, "-month-date");
    return _jsx("button", __assign({ type: 'button', className: className, value: date.toString(), onClick: function (e) { return handleDatePick(e); } }, { children: date.getDate() }), void 0);
};
export default DateButton;
