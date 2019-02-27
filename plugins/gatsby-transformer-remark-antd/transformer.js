const babel = require('@babel/core');
const generator = require('@babel/generator').default;

const errorBoxStyle = {
  padding: 10,
  background: 'rgb(204, 0, 0)',
  color: 'white',
  fontFamily: 'sans-serif',
  fontSize: '16px',
  fontWeight: 'bold',
  overflow: 'auto',
};

const defaultBabelConfig = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 versions',
            'Firefox ESR',
            '> 1%',
            'ie >= 8',
            'iOS >= 8',
            'Android >= 4',
          ],
        },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
  ],
};

module.exports = function transformer(code, babelConfig = {}) {
  let codeAst = null;

  try {
    const parserOpts = Object.assign(
      {
        ast: true,
        babelrc: false,
        configFile: false,
      },
      defaultBabelConfig,
      babelConfig
    );
    //  parseSync
    const { ast } = babel.transformSync(code, parserOpts);
    codeAst = ast;
  } catch (e) {
    return (
      'function() { ' +
      "  var React = require('react');" +
      "  return React.createElement('pre', {" +
      `    style: ${JSON.stringify(errorBoxStyle)}` +
      `  }, '${e.toString()}'); ` +
      '}'
    );
  }
  return generator(codeAst, {}, code).code;
};
