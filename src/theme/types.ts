type ColorState = {
  neutral: string;
  active: string;
  hover: string;
  disabled: string;
};

type ThemeProps = {
  color: {
    primary: ColorState;
    secondary: ColorState;
  };
};

export default ThemeProps;
