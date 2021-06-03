import { writeFile } from 'fs/promises';
import { Octokit } from '@octokit/rest';

export const getGithubUser = async ({
  file,
  user,
}: {
  file: string;
  user: string;
}) => {
  console.log('[getGithubUser]', { file, user });

  const octokit = new Octokit();

  const userData = await octokit.users.getByUsername({
    username: user,
  });

  return writeFile(file, JSON.stringify(userData, null, 2));
};
