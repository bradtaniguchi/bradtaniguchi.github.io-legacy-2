/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
export const ClientLoggerHiddenMethods = new InjectionToken(
  'CLIENT_LOGGER_HIDDEN_METHODS'
);
export type ClientLoggerMethods = keyof ClientLoggerService;

@Injectable()
export class ClientLoggerService {
  constructor(
    @Inject(ClientLoggerHiddenMethods)
    @Optional()
    private hide: ClientLoggerMethods[] = []
  ) {}

  silly(message?: any, ...optionalParams: any[]): void {
    if (this.hide?.includes('silly')) {
      return;
    }

    console.log(message, ...optionalParams);
  }
  error(message?: any, ...optionalParams: any[]): void {
    if (this.hide?.includes('error')) {
      return;
    }

    console.error(message, ...optionalParams);
  }
  log(message?: any, ...optionalParams: any[]): void {
    if (this.hide?.includes('log')) {
      return;
    }

    console.log(message, ...optionalParams);
  }
  info(message?: any, ...optionalParams: any[]): void {
    if (this.hide?.includes('info')) {
      return;
    }

    console.log(message, ...optionalParams);
  }
  debug(message?: any, ...optionalParams: any[]): void {
    if (this.hide?.includes('debug')) {
      return;
    }

    console.log(message, ...optionalParams);
  }
  warn(message?: any, ...optionalParams: any[]): void {
    if (this.hide?.includes('warn')) {
      return;
    }

    console.warn(message, ...optionalParams);
  }
}
