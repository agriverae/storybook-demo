import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '.';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

describe('Button Tests', function() {
  test('It displays text', function() {
    render(
      <ThemeProvider theme={theme}>
        <Button text="Hola" />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/hola/i);
  });

  test('It fires onClick event when button is clicked', function() {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick} text="Hola" />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
