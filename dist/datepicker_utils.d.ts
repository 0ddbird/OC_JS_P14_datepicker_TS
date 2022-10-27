import { IDatesInRange, IMonthOption, IYearOption } from './interfaces';
declare function getDates(year: IYearOption, month: IMonthOption): IDatesInRange;
declare const formatDate: (date: Date) => string;
declare function getYearOptions(startYear: number, stopYear: number): IYearOption[];
export { getDates, formatDate, getYearOptions };
