import React from 'react';
import { graphql } from 'gatsby';
import WrapperLayout from '../components/layout';
import MainContent from '../components/Content/MainContent';
import { transformerFrontmatter } from '../components/utils';

export default function Template({ data, ...rest }) {
  const { markdownRemark, allMarkdownRemark } = data;
  const { frontmatter, fields, html, tableOfContents } = markdownRemark;
  const { edges } = allMarkdownRemark;
  const menuList = edges.map(({ node }) => {
    const newFrontmatter = transformerFrontmatter(node.frontmatter);
    return {
      slug: node.fields.slug,
      meta: {
        ...newFrontmatter,
        slug: node.fields.slug,
        filename: node.fields.slug,
      },
      ...newFrontmatter,
      filename: node.fields.path,
    };
  });
  return (
    <WrapperLayout {...rest}>
      <MainContent
        {...rest}
        localizedPageData={{
          meta: {
            ...transformerFrontmatter(frontmatter),
            filename: fields.slug,
            path: fields.path,
          },
          toc: tableOfContents,
          content: html,
        }}
        demos={false}
        menuList={menuList}
      />
    </WrapperLayout>
  );
}

export const pageQuery = graphql`
  query TemplateDocsMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents(maxDepth: 3)
      frontmatter {
        title {
          zh_CN
          en_US
        }
        order
        type
      }
      fields {
        path
        slug
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/docs/" } }
      sort: { fields: [fields___slug], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title {
              zh_CN
              en_US
            }
            order
            type
          }
          fields {
            slug
            path
          }
        }
      }
    }
  }
`;
