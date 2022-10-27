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
import home from './assets/home.svg';
var HomeButton = function (_a) {
    var setSelectedMonthOption = _a.setSelectedMonthOption, setSelectedYearOption = _a.setSelectedYearOption;
    function handleNavButtonClick() {
        var today = new Date();
        var todaysYear = today.getFullYear();
        var todaysMonth = today.getMonth();
        var result = new Date(todaysYear, todaysMonth);
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
    return _jsx("button", __assign({ type: 'button', className: 'datepicker-options date-nav', onClick: handleNavButtonClick }, { children: _jsx("img", { src: home, alt: 'today' }, void 0) }), void 0);
};
export default HomeButton;
