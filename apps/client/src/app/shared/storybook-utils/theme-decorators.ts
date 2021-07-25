import { componentWrapperDecorator } from '@storybook/angular';

export const darkThemeDecorator = componentWrapperDecorator(
  (story) => `<div data-color-mode="dark" data-dark-theme="dark">${story}</div>`
);

export const darkDimmedThemeDecorator = componentWrapperDecorator(
  (story) =>
    `<div data-color-mode="dark" data-dark-theme="darkDimmed">${story}</div>`
);

export const lightThemeDecorator = componentWrapperDecorator(
  (story) => `<div data-color-mode="light">${story}</div>`
);
