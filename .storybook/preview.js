// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import { withThemesProvider } from 'themeprovider-storybook'
import theme from '../src/theme'

const themes = [{ name: 'Main', ...theme }]

export const decorators = [
  withThemesProvider(themes),
]

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
