const program = require('commander');
const path = require('path');
const fs = require('fs-extra');

const cwd = process.cwd();

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

    program.runningCommand && program.runningCommand.kill('SIGKILL');
    process.exit(0);
  });
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
};

