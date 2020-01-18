/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable no-multi-assign */
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const slash = require('slash2');

// 获取头像列表
const getAvatarList = async filename => {
  const sourcePath = 'https://github.com/ant-design/ant-design-pro-site/contributors-list/master';
  const url = `${sourcePath}${slash(filename)}`;
  const html = await fetch(url)
    .then(res => {
      if (res.status === 200) {
        return res.text();
      }
      throw new Error('');
    })
    .catch(() => {
      // console.log(e)
    });

  if (!html) {
    return [];
  }
  const $ = cheerio.load(html || '');
  const data = [];
  $('li a').map((index, ele) => {
    data.push({
      username: $(ele)
        .text()
        .trim(),
      url: $(ele)
        .children('img')
        .attr('src'),
    });
    return false;
  });
  return data;
};

const getKebabCase = str =>
  str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).replace(/\/-/g, '/');

// Add custom fields to MarkdownRemark nodes.
module.exports = exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  switch (node.internal.type) {
    case 'MarkdownRemark':
      const { permalink } = node.frontmatter;
      const { relativePath, sourceInstanceName } = getNode(node.parent);
      let slug = permalink;
      const filePath = path.join(__dirname, '../', sourceInstanceName, relativePath);
      const stats = fs.statSync(filePath);
      const mtime = new Date(stats.mtime).getTime();
      const mdFilePath = path.join(sourceInstanceName, relativePath);
      createNodeField({
        node,
        name: 'modifiedTime',
        value: mtime,
      });

      if (!slug) {
        slug = `${sourceInstanceName}/${relativePath
          .replace('.en-US.md', '')
          .replace('.zh-CN.md', '-cn')
          .replace('.md', '')}`;
      }

      createNodeField({
        node,
        name: 'slug',
        value: slash(getKebabCase(slug.replace('/index', ''))),
      });
      createNodeField({
        node,
        name: 'underScoreCasePath',
        value: slash(slug.replace('/index', '')),
      });

      createNodeField({
        node,
        name: 'path',
        value: slash(mdFilePath),
      });
      const html = await getAvatarList(mdFilePath);
      createNodeField({
        node,
        name: 'avatarList',
        value: JSON.stringify(html),
      });
      break;
  }
};
