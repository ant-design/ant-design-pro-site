---
order: 30
title: Use Pro's Assets
group:
  title: Advanced Usage
nav:
  title: Documents
  path: /docs
  order: 1
---

In the V3 version of Ant Design Pro, we introduced blocks to migrate our assets to blocks, which is convenient for on-demand use instead of being included in the project by default, which can reduce the project and allow more flexible use.

> If you want to get all the blocks, you can configure `🚀 Do you need all the blocks or a easy scaffold?` When creating umi to create the scaffold? Select `complete` to get the same code as the official preview address.

## What is a block

Blocks are a type of R & D asset. It is a series of code snippets for quickly building pages. It can help you quickly initialize a page in your project and help you develop code more quickly. The current block is a page-level block, you can understand that it is a template for typical pages that are often used in some projects. Using a block is actually equivalent to copying some page code from an existing project to you. In the current project.

I previously developed a page: Create JS-> Create CSS-> Create Model-> Create service-> Write page component. Now develop a page: download block-> modify the code based on the block component initialized by the block.

### Using blocks

In Ant Design Pro, umi ui is used for block management.

! [umi block list](https://gw.alipayobjects.com/zos/antfincdn/YWjTPDQAeq/CF034E49-0FE8-4011-B282-6956FC1B312C.png)

### Blocks and templates

In Pro, assets are divided into two types, blocks and templates. A block can be compared to a component, and a template represents a page. The block now supports all demos in antd, and demos can be imported into the project more quickly. The following figure demonstrates the rapid development of a crud page.

! [Template](https://gw.alipayobjects.com/zos/antfincdn/75%26lzz1F9P/Kapture%2525202019-11-25%252520at%25252015.35.41.gif)

### Layout block

This type of block provides the ability to occupy a place, you can add other blocks at a specified location; and it will be added to the target file through code merge, which is more in line with the intuition of code organization.

! [Block](https://gw.alipayobjects.com/zos/antfincdn/FjLAmnNnwA/Kapture%2525202019-11-25%252520at%25252017.32.25.gif)

## more content

If you want to develop blocks, you can view the full content in [umi Block](https://umijs.org/docs/use-umi-ui)
