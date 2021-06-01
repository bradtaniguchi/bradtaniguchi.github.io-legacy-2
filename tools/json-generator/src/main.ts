import { Command } from 'commander';

const program = new Command();

// TODO: might need to have this script "wait"
// example call:
// nx run json-generator:generate --user
program
  .allowExcessArguments(true)
  // generate build information
  .command('git:info')
  .option('--file <filepath>', 'path of the file to output to')
  .action((options: { file?: string }) => {
    console.log('[git info] called', { options });
  })

  // get codewars user information
  .command('codewars:user')
  .option('--user <username>', 'the codewars username to get')
  .option('--file <filepath>', 'path of the file to output to')
  .action((options: { user?: string; file?: string }) => {
    console.log('[codwars user] called', { options });
  })

  // get the codewars challenge information
  .command('codewars:challenges')
  .option('--user <username>', 'the codewars username to get')
  .option('--file <filepath>', 'path of the file to output to')
  .action((options: { user?: string; file?: string }) => {
    console.log('[codewars challenges] called', { options });
  });

// TODO: add github-api information
// TODO: get github-gist information

process.exit(0);
