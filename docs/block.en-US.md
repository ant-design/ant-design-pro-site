---
order: 3
title: Block
type: Development
---

## What is a Block?

A Block is a set of components, it helps you quickly build pages by using multiple blocks. The code for each block is copied directly into your project. Modify the block to fit your needs.

Currenlty, all blocks are page level blocks. You can treat them as typical page templates. 

- Previously: Write JS -> Write CSS -> Create a Model -> Create a service -> Write page component.
- Now: Download a Block -> Modify genereted code.

## Using Blocks

Ant Design Pro offers `umi ui` to help you manage blocks.

![ umi block list](https://gw.alipayobjects.com/zos/antfincdn/YWjTPDQAeq/CF034E49-0FE8-4011-B282-6956FC1B312C.png)

### Block and template

Assets in Pro are divided into two categories, blocks and templates. A block can be analogized to a component, and a template represents a page. The block now supports all demos in antd, allowing you to import demos into your projects more quickly. The following image demonstrates the rapid development of a crud page.

![](https://gw.alipayobjects.com/zos/antfincdn/75%26lzz1F9P/Kapture%2525202019-11-25%252520at%25252015.35.41.gif)

### Layout block

This type of block provides the ability to: define the placement of blocks, add additional blocks at a specified location, and adding blocks to a target file -- to help keep the code organized.

![](https://gw.alipayobjects.com/zos/antfincdn/FjLAmnNnwA/Kapture%2525202019-11-25%252520at%25252017.32.25.gif)

## Retrieve all the interfaces in Pro v2

You can download all the blocks by executing `npm run fetch:blocks` in the pro project and directory. The resulting interface will be the same as in [preview](https://preview.pro.ant.design/).

> The fetch:blocks script may have some compatibility issues. If you have a problem, please go to the official repository [issue](https://github.com/ant-design/ant-design-pro/issues).

## Develop a block

If you want to develop a block, you can ref [umi block](https://umijs.org/guide/block.html) to get the guide.
