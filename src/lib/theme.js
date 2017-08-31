import createTheme from 'styled-components-theme';
import config from '../../config';

export const defaultColors = {
  main: '#49768c',
  dark: '#000000',
  light: '#ffffff',
  accent: '#000000',
};

const theme = createTheme(
  ...Object.keys(config.theme ? config.theme.colors : defaultColors)
);

export default theme;
