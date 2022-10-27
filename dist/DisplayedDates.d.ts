import React from 'react';
import { IDateOption, IDatesInRange } from './interfaces';
interface IDisplayedDatesProps {
    datesInRange: IDatesInRange;
    setSelectedDate: React.Dispatch<React.SetStateAction<IDateOption>>;
    setDatePickerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const DisplayedDates: ({ datesInRange, setSelectedDate, setDatePickerOpen }: IDisplayedDatesProps) => JSX.Element;
export default DisplayedDates;
