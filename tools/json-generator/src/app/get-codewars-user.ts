import { writeFile } from 'fs/promises';
import { CodewarsV1Api } from 'codewars-node-api';

export const getCodewarsUser = async ({
  file,
  user,
}: {
  file: string;
  user: string;
}) => {
  console.log('[getCodewarsUser]', { file, user });

  const codewars = new CodewarsV1Api();

  const userData = await codewars.getUser(user);

  return writeFile(file, JSON.stringify(userData, null, 2));
};
