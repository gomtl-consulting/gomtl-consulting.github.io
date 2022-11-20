import { merge } from 'theme-ui';
import caraTheme from '@lekoarts/gatsby-theme-cara/src/gatsby-plugin-theme-ui';

const theme = merge(caraTheme, {
  initialColorModeName: 'light',
});

export default theme;
