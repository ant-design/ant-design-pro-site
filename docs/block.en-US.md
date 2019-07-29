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

> Interactive umi block list requires umi@2.8.7 and above, see [blog](/blog/better-block) for details.

In Ant Design Pro, use umi for block management. When we need to install a block, we need to know which blocks the .umi provides for the umi block list to view the block. The effect of using it in pro is shown in the figure below. You can select the block name to install.

![umi block list](https://gw.alipayobjects.com/zos/antfincdn/x4QZO%24Ubyh/1561713223131-f7111829-e270-4569-b5ac-8e8585581b96.png)

Adding other blocks is also very easy, type in the command line:

```Celebration
Umi block add [block url]
```

> Pro will go to [pro-blocks](https://github.com/ant-design/pro-blocks) to find the block by default, and the default block address is [umi-blocks] (https:/ /github.com/umijs/umi-blocks). If you want to use the umi block in Pro, you need to add the full path. The same is true for blocks that use Pro in an empty project.

In our [Preview Site](https://preview.pro.ant.design), you can get the command content of the corresponding page by clicking [_Add to Project_] in the lower right corner.

![Block sample](https://user-images.githubusercontent.com/5378891/58394196-98d26e00-8074-11e9-87c7-c527cf87545d.png)

By default, router of added block is `/[block name]`. You can use `--path` to set the block router:

## Add to router

```bash
umi block add ant-design-pro/analysis --path=your/path/here
```

## Retrieve all the interfaces in Pro v2

You can download all the blocks by executing `npm run fetch:blocks` in the pro project and directory. The resulting interface will be the same as in [preview](https://preview.pro.ant.design/).

> The fetch:blocks script may have some compatibility issues. If you have a problem, please go to the official repository [issue](https://github.com/ant-design/ant-design-pro/issues).

## Develop a block

If you want to develop a block, you can ref [umi block](https://umijs.org/guide/block.html) to get the guide.
