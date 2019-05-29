import React from 'react';
import { graphql } from 'gatsby';
import WrapperLayout from '../components/layout';
import MainContent from '../components/Content/MainContent';
import { transformerFrontmatter } from '../components/utils';

interface IMarkDownFields {
  path: string;
  slug: string;
  modifiedTime: number;
  avatarList: Array<{
    href: string;
    text: string;
    src: string;
  }>;
}
export interface IFrontmatterData extends IMarkDownFields {
  title: {
    'zh-CN': string;
    'en-US': string;
  };
  toc: string | boolean;
  order: number;
  type: string;
  filename: string;
  subtitle: string;
  path: string;
  disabled: boolean;
  important: boolean;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface IGraphqlFrontmatterData extends Omit<IFrontmatterData, 'title'> {
  title: {
    zh_CN: string;
    en_US: string;
  };
}

export interface IMarkdownRemarkData {
  html: string;
  tableOfContents: string;
  frontmatter: IGraphqlFrontmatterData;
  fields: IMarkDownFields;
}

export interface IAllMarkdownRemarkData {
  edges: Array<{
    node: {
      frontmatter: IGraphqlFrontmatterData;
      fields: IMarkDownFields;
    };
  }>;
}

export default function Template({
  data,
  ...rest
}: {
  data: { markdownRemark: IMarkdownRemarkData; allMarkdownRemark: IAllMarkdownRemarkData };
  isMobile: boolean;
  location: {
    pathname: string;
  };
}) {
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
            ...fields,
            filename: fields.slug,
            path: fields.path,
          },
          toc: tableOfContents,
          content: html,
        }}
        menuList={menuList}
      />
    </WrapperLayout>
  );
}

export const pageQuery = graphql`
  query TemplateDocsMarkdown($slug: String!, $type: String!) {
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
        modifiedTime
        avatarList {
          href
          text
          src
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $type } }
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
