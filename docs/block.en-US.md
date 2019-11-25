---
order: 3
title: Block
type: Development
---

## What is Block

Block is a set of code block. It helps you to fast initialize a page with prepared code. Current Blocks are all page level blocks. You can treat them as typical page templates. Use block is alike copy exist page code into your project.

- Previous: Create JS -> Create CSS -> Create Model -> Create service -> Write page component.
- Current: Download Block -> Modify on initialized code.

## Use Block

Ant Design Pro 中，使用 umi ui 进行区块管理。

![ umi block list](https://gw.alipayobjects.com/zos/antfincdn/YWjTPDQAeq/CF034E49-0FE8-4011-B282-6956FC1B312C.png)

### Block and template

Assets in Pro are divided into two categories, blocks and templates. A block can be analogized to a component, and a template represents a page. The block now supports all demos in antd, allowing you to import demos into your projects more quickly. The following image demonstrates the rapid development of a crud page.

![](https://gw.alipayobjects.com/zos/antfincdn/75%26lzz1F9P/Kapture%2525202019-11-25%252520at%25252015.35.41.gif)

### Layout block

This type of block provides the ability to place places, add other blocks at the specified location, and add them to the target file by code merging, which is more in line with the intuition of the code organization.

![](https://gw.alipayobjects.com/zos/antfincdn/FjLAmnNnwA/Kapture%2525202019-11-25%252520at%25252017.32.25.gif)

## Retrieve all the interfaces in Pro v2

You can download all the blocks by executing `npm run fetch:blocks` in the pro project and directory. The resulting interface will be the same as in [preview](https://preview.pro.ant.design/).

> The fetch:blocks script may have some compatibility issues. If you have a problem, please go to the official repository [issue](https://github.com/ant-design/ant-design-pro/issues).

## Develop a block

If you want to develop a block, you can ref [umi block](https://umijs.org/guide/block.html) to get the guide.
