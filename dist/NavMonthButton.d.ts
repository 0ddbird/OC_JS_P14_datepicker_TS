import React from 'react';
import { IMonthOption, IYearOption } from './interfaces';
interface INavMonthButtonProps {
    direction: 'previous' | 'next';
    boundaries: {
        start: boolean;
        end: boolean;
    };
    selectedMonthOption: IMonthOption;
    selectedYearOption: IYearOption;
    setSelectedMonthOption: React.Dispatch<React.SetStateAction<IMonthOption>>;
    setSelectedYearOption: React.Dispatch<React.SetStateAction<IYearOption>>;
}
declare const NavMonthButton: ({ direction, boundaries, selectedMonthOption, selectedYearOption, setSelectedMonthOption, setSelectedYearOption }: INavMonthButtonProps) => JSX.Element;
export default NavMonthButton;
