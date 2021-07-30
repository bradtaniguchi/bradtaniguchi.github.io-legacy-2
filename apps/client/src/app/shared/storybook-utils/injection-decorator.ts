import { Provider } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

/**
 * Decorator that can be used to provide providers
 */
export const injectionDecorator = (providers: Provider[]) =>
  moduleMetadata({
    providers,
  });
