const program = require('commander');
const path = require('path');
const fs = require('fs-extra');
const shelljs = require('shelljs');

const cwd = process.cwd();

/* eslint prefer-arrow-callback:0 */
/* eslint no-console:0 */
module.exports = function () {
  const scaffoldDir = path.join(cwd, './dist');
  const siteDir = path.join(cwd, '../_scaffold_site');
  const utilsDir = `${cwd}/src/utils`;

  process.on('exit', function () {
  });

  process.on('SIGINT', function () {
    fs.copySync(`${utilsDir}/request-temp.js`, `${utilsDir}/request.js`);
    fs.removeSync(`${utilsDir}/request-temp.js`);
    fs.removeSync(`${cwd}/src/.roadhogrc.mock.js`);
    fs.removeSync(`${cwd}/src/mock`);

    if (program.runningCommand) {
      program.runningCommand.kill('SIGKILL');
    }
    process.exit(0);
  });

  shelljs.exec('roadhog-api-doc build', function (code, stdout, stderr) {
    try {
      // clean
      fs.copySync(`${utilsDir}/request-temp.js`, `${utilsDir}/request.js`);
      fs.removeSync(`${utilsDir}/request-temp.js`);
      fs.removeSync(`${cwd}/src/.roadhogrc.mock.js`);
      fs.removeSync(`${cwd}/src/mock`);
      /* eslint no-empty: 0 */
    } catch (e) {
    } finally {
      try {
        fs.ensureDirSync(siteDir);

        // move
        fs.copySync(scaffoldDir, siteDir);
      } catch (e) {
        /* eslint no-unsafe-finally: 0 */
        throw new Error(e);
      }
    }

    if (!stderr) {
      console.log('build static success');
    }
  });
};

