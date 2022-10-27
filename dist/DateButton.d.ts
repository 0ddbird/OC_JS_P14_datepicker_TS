import React from 'react';
import { IDateOption } from './interfaces';
interface IDateButtonProps {
    date: Date;
    month: 'previous' | 'current' | 'next';
    setSelectedDate: React.Dispatch<React.SetStateAction<IDateOption>>;
    setDatePickerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isToday: Boolean;
}
declare const DateButton: ({ date, month, setSelectedDate, setDatePickerOpen, isToday }: IDateButtonProps) => JSX.Element;
export default DateButton;
