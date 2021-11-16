/**
 * Map of social-media profiles to display within the application.
 */
export interface Socials {
  /**
   * LinkedIn profile URL
   */
  linkedIn: string;
  /**
   * Twitter profile page URL
   */
  twitter: string;
  /**
   * freeCodeCamp profile page URL,
   * **note** this can be generated from the freeCodeCamp injection token value
   */
  freeCodeCamp: string;
  /**
   * Npm profile page URL
   */
  npm: string;
  /**
   * Dev.to profile page URL
   */
  devto: string;
}
