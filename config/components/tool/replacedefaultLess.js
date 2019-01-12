const fs = require('fs-extra');

const replaceDefaultLess = function(lessPath) {
  const fileContent = fs.readFileSync(lessPath).toString();
  let lessString = fileContent;
  if (lessString.includes("@import '~antd/lib/style/themes/default.less'")) {
    lessString = lessString.replace(
      "@import '~antd/lib/style/themes/default.less'",
      '@import "../../style/themes/default.less"'
    );
  }
  return lessString;
};
module.exports = replaceDefaultLess;
