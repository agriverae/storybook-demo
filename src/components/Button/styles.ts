import styled from 'styled-components';
import { Size, Color, Variant } from './types';
import { getSize, getColors, getVariant } from './utils';

const StyledButton = styled.button<{
  size: Size;
  color: Color;
  variant: Variant;
}>`
  border-style: none;
  padding: ${({ size }) => getSize(size)};
  border-radius: 8px;
  gap: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  cursor: pointer;

  ${({ variant, color, theme }) => getVariant(variant, getColors(theme, color))}
`;

export default StyledButton;
