export interface IDatesInRange {
    previousMonth: Date[] | undefined;
    currentMonth: Date[];
    nextMonth: Date[] | undefined;
}
export interface IYearOption {
    label: string;
    value: string;
}
export interface IMonthOption {
    label: string;
    value: string;
}
export interface IDateOption {
    label: string;
    value: Date;
}
