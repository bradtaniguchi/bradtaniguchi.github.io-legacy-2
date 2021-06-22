import { writeFile } from 'fs/promises';
import { Octokit } from '@octokit/rest';

export const getGithubGists = async ({
  file,
  user,
}: {
  file: string;
  user: string;
}) => {
  console.log('[getGithubGists]', { file, user });

  const octokit = new Octokit();

  const gistData = await octokit.gists
    .listForUser({
      username: user,
    })
    .then(({ data }) => data);

  return writeFile(file, JSON.stringify(gistData, null, 2));
};
