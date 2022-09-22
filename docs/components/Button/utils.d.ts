import { ThemeProps } from '../../theme';
import { Size, Color, ColorState, Variant } from './types';
export declare function getSize(size: Size): "14px 18px" | "12px 16px" | "8px 12px";
export declare function getColors(theme: ThemeProps, color: Color): ColorState;
export declare function getVariant(variant: Variant, colorState: ColorState): import("styled-components").FlattenSimpleInterpolation;
