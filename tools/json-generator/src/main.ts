#!npx ts-node
import { Command } from 'commander';
import { getCodewarsChallenges } from './app/get-codewars-challenges';
import { getCodewarsUser } from './app/get-codewars-user';
import { getGitInfo } from './app/get-git-info';

(async () => {
  const program = new Command();
  // TODO: might need to have this script "wait"
  // example call to run every command:
  // nx run json-generator:generate --user=bradtaniguchi
  // or specific calls:
  // ./tools/json-generator/src/main.ts git:info --file=<filename>
  program
    .allowExcessArguments(true)
    // generate build information
    .command('git:info')
    .requiredOption('--file <filepath>', 'path of the file to output to')
    .action(getGitInfo);

  program
    // get codewars user information
    .command('codewars:user')
    .requiredOption('--user <username>', 'the codewars username to get')
    .requiredOption('--file <filepath>', 'path of the file to output to')
    .action(getCodewarsUser);

  program
    // get the codewars challenge information
    .command('codewars:challenges')
    .requiredOption('--user <username>', 'the codewars username to get')
    .requiredOption('--file <filepath>', 'path of the file to output to')
    .action(getCodewarsChallenges);
  // TODO: add github-api information
  // TODO: get github-gist information

  await program.parseAsync(process.argv);
  process.exit(0);
})();
