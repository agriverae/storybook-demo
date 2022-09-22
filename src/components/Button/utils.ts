import { css } from 'styled-components';
import { ThemeProps } from '../../theme';
import { UnreachableError } from '../../utils';
import { Size, Color, ColorState, Variant } from './types';

export function getSize(size: Size) {
  switch (size) {
    case 'large':
      return '14px 18px';
    case 'medium':
      return '12px 16px';
    case 'small':
      return '8px 12px';
    default:
      throw new UnreachableError(
        size,
        'Got an unexpected size for the Button Component'
      );
  }
}

export function getColors(theme: ThemeProps, color: Color): ColorState {
  return {
    default: theme.color[color].neutral,
    hover: theme.color[color].hover,
    focus: theme.color[color].active,
    disabled: theme.color[color].disabled,
  };
}

export function getVariant(variant: Variant, colorState: ColorState) {
  switch (variant) {
    case 'filled':
      return css`
        color: #ffffff;

        background-color: ${colorState.default};

        &:hover {
          background-color: ${colorState.hover};
        }

        &:focus {
          background-color: ${colorState.focus};
        }

        &:disabled {
          background-color: ${colorState.disabled};
        }
      `;
    case 'ghost':
      return css`
        color: ${colorState.default};

        background-color: #ffffff;

        border: 2px solid ${colorState.default};

        &:hover {
          color: ${colorState.hover};
          border: 2px solid ${colorState.hover};
        }

        &:focus {
          color: ${colorState.focus};
          border: 2px solid ${colorState.focus};
        }

        &:disabled {
          color: ${colorState.disabled};
          border: 2px solid ${colorState.disabled};
        }
      `;
    default:
      throw new UnreachableError(
        variant,
        'Got an unexpected variant for the Button Component'
      );
  }
}
