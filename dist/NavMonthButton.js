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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import arrowRight from './assets/arrowRight.svg';
import arrowLeft from './assets/arrowLeft.svg';
var NavMonthButton = function (_a) {
    var direction = _a.direction, boundaries = _a.boundaries, selectedMonthOption = _a.selectedMonthOption, selectedYearOption = _a.selectedYearOption, setSelectedMonthOption = _a.setSelectedMonthOption, setSelectedYearOption = _a.setSelectedYearOption;
    function handleNavButtonClick(target) {
        var currentMonth = parseInt(selectedMonthOption.value);
        var currentYear = parseInt(selectedYearOption.value);
        var result;
        if (target === 'prev')
            result = new Date(currentYear, currentMonth - 1);
        else
            result = new Date(currentYear, currentMonth + 1);
        var newMonthOption = {
            label: result.getMonth().toString(),
            value: result.getMonth().toString()
        };
        var newYearOption = {
            label: result.getFullYear().toString(),
            value: result.getFullYear().toString()
        };
        setSelectedMonthOption(newMonthOption);
        setSelectedYearOption(newYearOption);
    }
    if (direction === 'next' && !boundaries.end)
        return _jsx("button", __assign({ type: 'button', className: 'datepicker-options date-nav', onClick: function () { return handleNavButtonClick('next'); } }, { children: _jsx("img", { src: arrowRight, alt: 'next month' }, void 0) }), void 0);
    if (direction === 'previous' && !boundaries.start)
        return _jsx("button", __assign({ type: 'button', className: 'datepicker-options date-nav', onClick: function () { return handleNavButtonClick('prev'); } }, { children: _jsx("img", { src: arrowLeft, alt: 'previous month' }, void 0) }), void 0);
    else
        return _jsx(_Fragment, {}, void 0);
};
export default NavMonthButton;
