import React, { HtmlHTMLAttributes } from 'react';
export default function Cancel(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>): JSX.Element;
export declare type TagsValue = {
    values: string[];
    name?: string;
};
export interface InputTagsProps {
    placeholder?: string;
    onTags: (value: TagsValue) => void;
    values?: string[];
    name?: string;
    elementClassName?: string;
}
export declare const InputTags: ({ placeholder, values, onTags, name, className, elementClassName, ...rest }: InputTagsProps & HtmlHTMLAttributes<HTMLInputElement>) => JSX.Element;
interface ElementProps {
    value: string;
    index: number;
    onRemove: (index: number, focus: boolean) => void;
    onSelectedIndex: (index: number) => void;
    focus: boolean;
    className?: string;
}
declare const Element: (props: ElementProps) => JSX.Element;
export {};
