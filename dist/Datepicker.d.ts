import React from 'react';
import { IYearOption, IMonthOption, IDateOption } from './interfaces';
import './dp_main.css';
export interface IDatepickerProps {
    startYear: number;
    stopYear: number;
    defaultYear: IMonthOption;
    defaultMonth: IYearOption;
    selectedDate: IDateOption;
    setSelectedDate: React.Dispatch<React.SetStateAction<IDateOption>>;
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const Datepicker: ({ startYear, stopYear, defaultYear, defaultMonth, selectedDate, setSelectedDate, isExpanded, setIsExpanded }: IDatepickerProps) => JSX.Element;
export default Datepicker;
