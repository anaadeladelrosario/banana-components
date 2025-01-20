import type { Preview } from "@storybook/react";
import '../src/styles/index.css';  // Path to your global CSS file
import '../src/styles/tokens.css'

const preview: Preview = {
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
