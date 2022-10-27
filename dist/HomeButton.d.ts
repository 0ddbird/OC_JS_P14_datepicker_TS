import React from 'react';
import { IYearOption, IMonthOption } from './interfaces';
interface IHomeButtonProps {
    setSelectedMonthOption: React.Dispatch<React.SetStateAction<IMonthOption>>;
    setSelectedYearOption: React.Dispatch<React.SetStateAction<IYearOption>>;
}
declare const HomeButton: ({ setSelectedMonthOption, setSelectedYearOption }: IHomeButtonProps) => JSX.Element;
export default HomeButton;
