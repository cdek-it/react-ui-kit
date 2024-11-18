import '../src/themes/lara/lara-light/green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
