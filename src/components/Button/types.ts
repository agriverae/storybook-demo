import { MouseEvent } from 'react';

export type Size = 'small' | 'medium' | 'large';

export type Color = 'primary' | 'secondary';

export type Variant = 'filled' | 'ghost';

export type ColorState = {
  default: string;
  hover: string;
  focus: string;
  disabled: string;
};

type ButtonProps = {
  /* Sizes available */
  size?: Size;
  /* Color scheme available */
  color?: Color;
  /* Variantions of look and feel */
  variant?: Variant;
  /* Text to be displayed inside a button */
  text: string;
  /* if button should be in a disabled state */
  disabled?: boolean;
  /* function to be executed on click" */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default ButtonProps;
