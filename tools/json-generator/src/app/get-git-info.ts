import { writeFile } from 'fs/promises';
import { execute } from './common/execute';
import { DateTime } from 'luxon';

/**
 * Writes out the git information of the current build. Useful to debug which version your
 * looking at when the project is running.
 */
export const getGitInfo = async ({
  file,
}: {
  /**
   * The file-path to save the information to.
   */
  file: string;
}) => {
  console.log('[getGitInfo]', { file });
  // format like: `a00edf0`
  const shortSha = await execute('git rev-parse --short HEAD');

  // format like: `Mon May 31 19:56:39 2021 -0700`
  // AKA RFC2822
  const rawDateTime = await execute('git log -1 --format=%aD');
  const dateTime = DateTime.fromRFC2822(rawDateTime).toISO();

  const gitData = {
    shortSha,
    dateTime,
  };

  return writeFile(file, JSON.stringify(gitData, null, 2));
};
