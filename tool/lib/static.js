const fs = require('fs-extra');

const cwd = process.cwd();

module.exports = function () {
  const utilsDir = `${cwd}/scaffold/src/utils`;
  const tpl = `import query from '../.roadhogrc.mock.js';

export default function request(url, params) {
  return new Promise((resolve) => {
    const keys = Object.keys(query);
    let u = url;
    if (params && params.method) {
      u = \`\${params.method} \${u}\`;
    } else {
      u = \`GET \${u}\`;
    }
    const currentKey = keys.filter(key => new RegExp(key).test(u))[0];
    const res = query[currentKey];

    if (typeof res === 'function') {
      const _req = {
        url,
        params,
        query: params,
        body: params,
      };
      const _res = {
        json: (data) => {
          resolve(data);
        },
        send: (data) => {
          resolve(data);
        },
      };
      res(_req, _res);
    } else {
      resolve(res);
    }
  });
}
`;

  const yml = `before_deploy:
options:
  branch: 'site'
  dist: '_scaffold_site'
cname: 'antd-pro.alibaba.net'
`;

  try {
    // 1. move ./.roadhogrc.mock.js to ./src/.roadhogrc.mock.js
    fs.copySync(`${cwd}/scaffold/.roadhogrc.mock.js`, `${cwd}/scaffold/src/.roadhogrc.mock.js`);

    // 2. move ./mock to ./src/mock
    fs.copySync(`${cwd}/scaffold/mock`, `${cwd}/scaffold/src/mock`);

    // 3. save old request.js
    fs.copySync(`${utilsDir}/request.js`, `${utilsDir}/request-temp.js`);

    // 4. modifier ./src/utils/request.js
    fs.writeFileSync(`${utilsDir}/request.js`, tpl, 'utf8');

    // 5. create ./.si.yml file
    fs.writeFileSync(`${cwd}/.si.yml`, yml, 'utf8');
  } catch (e) {
    throw new Error(e);
  }
};
