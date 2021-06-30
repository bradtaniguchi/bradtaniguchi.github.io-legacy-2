import { ClientLoggerService } from '../../core/client-logger/client-logger.service';
import { Theme } from './theme.state';
import { ThemeStoreService } from './theme.store.service';

describe('ThemeStoreService', () => {
  let service: ThemeStoreService;
  let getNextTheme: (theme: Theme, themes: Theme[]) => Theme;
  const localforageMock = {
    getItem: () => Promise.resolve(),
  };
  beforeEach(() => {
    const logger = new ClientLoggerService();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    service = new ThemeStoreService(localforageMock as any, logger);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getNextTheme = (service as any).getNextTheme;
  });

  describe('getNextTheme', () => {
    const themes = ThemeStoreService.THEMES;
    it('dark->dark_dimmed', () =>
      expect(getNextTheme('dark', themes)).toEqual('dark_dimmed'));
    it('dark_dimmed->light', () =>
      expect(getNextTheme('dark_dimmed', themes)).toEqual('light'));
    it('light->dark', () =>
      expect(getNextTheme('light', themes)).toEqual('dark'));
  });
});
