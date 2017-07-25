const fs = require('fs-extra');

const cwd = process.cwd();

module.exports = function () {
  const utilsDir = `${cwd}/scaffold/src/utils`;
  const tpl = `import query from '../.roadhogrc.mock.js';
export default function request(url) {
  return new Promise((resolve) => {
    resolve({ data: query[\`
      GET \${url}\`] });
    });
}`;

  try {
    // 1. move ./.roadhogrc.mock.js to ./src/.roadhogrc.mock.js
    fs.copySync(`${cwd}/scaffold/.roadhogrc.mock.js`, `${cwd}/scaffold/src/.roadhogrc.mock.js`);

    // 2. save old request.js
    fs.copySync(`${utilsDir}/request.js`, `${utilsDir}/request-temp.js`);

    // 3. modifier ./src/utils/request.js
    fs.writeFileSync(`${utilsDir}/request.js`, tpl, 'utf8');
  } catch (e) {
    throw new Error(e);
  }
};

