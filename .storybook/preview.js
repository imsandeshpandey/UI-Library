import React from "react";
import Themer from "../src/components/basic-components/theme/ThemeContext";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story) => (
    <Themer>
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
      <Story />
    </Themer>
  ),
];
