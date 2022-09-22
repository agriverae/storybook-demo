declare type ColorState = {
    neutral: string;
    active: string;
    hover: string;
    disabled: string;
};
declare type ThemeProps = {
    color: {
        primary: ColorState;
    };
};
export default ThemeProps;
