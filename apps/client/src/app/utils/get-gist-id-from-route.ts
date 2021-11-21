/**
 * Utility function that can be used to get the gist-id from a scully-route,
 * with the format:
 * `/snippets/<gist-id>`
 */
export const getGistIdFromRoute = (scullyRoute: { route: string }) => {
  const parts = scullyRoute?.route?.split('/');
  return parts[parts.length - 1] || '';
};
