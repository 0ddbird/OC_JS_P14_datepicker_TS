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
import { useEffect, useState } from 'react';
import { getDates, formatDate } from './datepicker_utils';
import DisplayedDates from './DisplayedDates';
import NavMonthButton from './NavMonthButton';
import HomeButton from './HomeButton';
import Select from 'react-ts-controlled-select';
import { weekDays, selectMonthOptions } from './datepicker_data';
import ChildrenBlur from './ChildrenBlur';
import './dp_main.css';
var Datepicker = function (_a) {
    var startYear = _a.startYear, stopYear = _a.stopYear, defaultYear = _a.defaultYear, defaultMonth = _a.defaultMonth, selectedDate = _a.selectedDate, setSelectedDate = _a.setSelectedDate, isExpanded = _a.isExpanded, setIsExpanded = _a.setIsExpanded;
    function getYearOptions(startYear, stopYear) {
        var yearRange = [];
        for (var i = startYear; i <= stopYear; i++)
            yearRange.push({ label: "".concat(i), value: "".concat(i) });
        return yearRange;
    }
    var yearOptions = getYearOptions(startYear, stopYear);
    var initialDatesArray = getDates(defaultYear, defaultMonth);
    var _b = useState(defaultMonth), selectedMonthOption = _b[0], setSelectedMonthOption = _b[1];
    var _c = useState(defaultYear), selectedYearOption = _c[0], setSelectedYearOption = _c[1];
    var _d = useState(initialDatesArray), dateRanges = _d[0], setDateRanges = _d[1];
    var yearBoundaries = {
        start: parseInt(selectedYearOption.value) === startYear && parseInt(selectedMonthOption.value) === 0,
        end: parseInt(selectedYearOption.value) === stopYear && parseInt(selectedMonthOption.value) === 11
    };
    useEffect(function () {
        var newRange = getDates(selectedYearOption, selectedMonthOption);
        setDateRanges(newRange);
    }, [selectedMonthOption, selectedYearOption]);
    return (_jsx(ChildrenBlur, __assign({ onBlur: function () { return setIsExpanded(false); }, className: "group".concat(isExpanded ? '--focused' : '') }, { children: _jsxs("div", __assign({ className: 'datepicker' }, { children: [_jsx("input", { className: 'datepicker-input', type: 'text', readOnly: true, value: "".concat(formatDate(selectedDate.value)), onClick: function () { return setIsExpanded(true); } }, void 0), _jsxs("div", __assign({ className: "datepicker-panel".concat(isExpanded ? '--focused' : ''), tabIndex: 0 }, { children: [_jsxs("div", __assign({ className: 'datepicker-options' }, { children: [_jsx(NavMonthButton, { direction: 'previous', boundaries: yearBoundaries, selectedMonthOption: selectedMonthOption, selectedYearOption: selectedYearOption, setSelectedMonthOption: setSelectedMonthOption, setSelectedYearOption: setSelectedYearOption }, void 0), _jsx(HomeButton, { setSelectedMonthOption: setSelectedMonthOption, setSelectedYearOption: setSelectedYearOption }, void 0), _jsx(Select, { options: selectMonthOptions, selected: selectedMonthOption, setSelected: setSelectedMonthOption }, void 0), _jsx(Select, { options: yearOptions, selected: selectedYearOption, setSelected: setSelectedYearOption }, void 0), _jsx(NavMonthButton, { direction: 'next', boundaries: yearBoundaries, selectedMonthOption: selectedMonthOption, selectedYearOption: selectedYearOption, setSelectedMonthOption: setSelectedMonthOption, setSelectedYearOption: setSelectedYearOption }, void 0)] }), void 0), _jsx("div", __assign({ className: 'datepicker-weekdays' }, { children: weekDays.map(function (weekDay) { return _jsx("div", __assign({ className: 'cell week-day' }, { children: weekDay }), weekDay); }) }), void 0), _jsx(DisplayedDates, { datesInRange: dateRanges, setSelectedDate: setSelectedDate, setDatePickerOpen: setIsExpanded }, void 0)] }), void 0)] }), void 0) }), void 0));
};
export default Datepicker;
