import { ReactNode } from 'react';
interface IChildrenBlur {
    children: ReactNode;
    onBlur: () => void;
    className: string;
}
declare const ChildrenBlur: ({ children, onBlur, className }: IChildrenBlur) => JSX.Element;
export default ChildrenBlur;
