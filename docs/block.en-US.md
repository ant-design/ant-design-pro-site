---
order: 3
title: Block
type: Development
---

## What is Block

Block is a set of code block. It helps you to fast initialize an page with prepared code.
Current Blocks are all the page level block. You can tread them as typical page template.
Use block is alike copy exist page code into your project.

* Previous: Create JS -> Create CSS -> Create Model -> Create service -> Write page component.
* Current: Download Block -> Modify on initialized code.

## Use Block

We use umi to management block in Ant Design Pro. It's very easy to add a block:

```bash
umi block add [block url]
```

In our [preview website](https://preview.pro.ant.design), you can click 'add to project' to get the command with current page.

## Add to router

By default, router of added block is  `/[block name]`. You can use `--path` to set the block router:

```bash
umi block add ant-design-pro/analysis --path=your/path/here
```

## Develop a block

If you want to develop a block, you can ref [umi block](https://umijs.org/guide/block.html) to get the guide.
