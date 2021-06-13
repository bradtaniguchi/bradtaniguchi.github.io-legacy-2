import * as child_process from 'child_process';
/**
 * Promise wrapper around child_process.exec.
 */
export const execute = (bashStr: string): Promise<string> =>
  new Promise<string>((resolve, reject) =>
    child_process.exec(bashStr, (err, stdout, stderr) =>
      err || stderr ? reject(err || stderr) : resolve(stdout.toString().trim())
    )
  );
