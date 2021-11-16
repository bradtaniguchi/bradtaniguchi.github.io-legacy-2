import { environment as prodEnvironment } from './environment.prod';
/**
 * This environment is used just for ci/cd flows,
 * and is based off of the production config
 */
export const environment = {
  ...prodEnvironment,
  gtagCode: '', // don't use analytics
};
