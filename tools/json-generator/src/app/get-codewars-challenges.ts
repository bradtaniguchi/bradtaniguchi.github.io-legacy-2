import { writeFile } from 'fs/promises';
import { CodewarsV1Api } from 'codewars-node-api';

export const getCodewarsChallenges = async ({
  file,
  user,
}: {
  file: string;
  user: string;
}) => {
  console.log('[getCodewarsChallenges]', { file, user });

  const codewars = new CodewarsV1Api();

  const challengeData = await codewars.getCompletedChallenges(user);

  return writeFile(file, JSON.stringify(challengeData, null, 2));
};
