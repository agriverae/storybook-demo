import React from 'react';
import StyledButton from './styles';
import ButtonProps from './types';

function Button({
  variant = 'filled',
  size = 'large',
  color = 'primary',
  disabled = false,
  onClick,
  text,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      color={color}
      size={size}
      variant={variant}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
