import React from 'react';
import { graphql } from 'gatsby';
import WrapperLayout from '../components/layout';
import MainContent from '../components/Content/MainContent';
import { transformerFrontmatter } from '../components/utils';

const transformerDemos = demos => {
  if (!demos || !demos.edges) {
    return;
  }
  return demos.edges.map(({ node }) => {
    return {
      preview: node.code,
      ...node.content,
      meta: {
        ...transformerFrontmatter(node.frontmatter),
        filename: node.fields.slug,
        path: node.fields.path,
      },
    };
  });
};

export default function Template({ data, ...rest }) {
  const {
    markdownRemark,
    demos = {
      edges: [],
    },
    allMarkdownRemark,
  } = data;
  const { frontmatter, fields, html, description, tableOfContents } = markdownRemark;
  const { edges } = allMarkdownRemark;
  const menuList = edges
    .map(({ node }) => {
      const newFrontmatter = transformerFrontmatter(node.frontmatter);
      return {
        slug: node.fields.slug,
        meta: {
          ...newFrontmatter,
          slug: node.fields.slug,
          filename: node.fields.slug,
        },
        filename: node.fields.path,
        ...newFrontmatter,
      };
    })
    .filter(({ slug }) => !slug.includes('/demo/'));
  return (
    <WrapperLayout {...rest}>
      <MainContent
        {...rest}
        demos={transformerDemos(demos)}
        localizedPageData={{
          meta: {
            ...transformerFrontmatter(frontmatter),
            filename: fields.slug,
            path: fields.path,
          },
          toc: tableOfContents,
          content: html,
          ...description,
        }}
        menuList={menuList}
      />
    </WrapperLayout>
  );
}

export const pageQuery = graphql`
  query TemplateComponentsMarkdown($slug: String!, $demo: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      description
      tableOfContents(maxDepth: 3)
      frontmatter {
        title {
          zh_CN
          en_US
        }
        subtitle
        order
        type
      }
      fields {
        path
        slug
      }
    }
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//components//" }
        fields: { slug: { regex: "/^((?!/demo/).)*$/" } }
      }
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
            subtitle
            type
          }
          fields {
            slug
            path
          }
        }
      }
    }
    demos: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//components//" }, fields: { slug: { regex: $demo } } }
      sort: { fields: [fields___slug], order: DESC }
    ) {
      edges {
        node {
          content
          code
          frontmatter {
            title {
              zh_CN
              en_US
            }
            col
            cols
            order
            subtitle
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
