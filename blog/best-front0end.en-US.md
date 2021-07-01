---
order: 7
title: Front-end best practices coming soon
group:
  title: Blog
  path: /
nav:
  title: Blog
  path: /blog
  order: 3
time: 2020-02-29
---

With the development of the front end, the base has become more and more solid, the current front-end frame and engineering can cover the complexity of most business scenarios. The front end has become more focused on the business, and Ant Design Pro provides a mid-back scaffolding that provides best practices for frameworking and engineering, but there are still many issues that require best practices.

## 🤷‍♂️ Why Best Practices Are Needed

scaffolding we can choose Mobx, redux, dva, using Context people are not in the minority. This is a relatively small selection of data layers, we also have network requests, permissions, Layout, and so on.

True, multiple choices are a good thing, but as an enterprise-class product, maintenance is the most important, we expect every student to be quick to get started, and if each project is selected once, freshness in the past we may spend a considerable amount of energy to package. More detailed demonstration, you can see [doc](https://zhuanlan.zhihu.com/p/94949118?from_voters_page=true)。

## 🏄‍♂️ 我们的解决方案

Ant gold clothing every year has a large number of in-back projects hatching, a variety of technical stacks in full bloom, our solution is actually   **Strong constraints**, **configuration** and **convention**。

### 🕹 Strong constraints

In this regard, we've done ProLayout, two heavy-duty components for ProTable, to encapsulate duplicate logic, and may add components such as ProForm to upgrade development projects later.

- ProLayout provides a standardized layout component that we can just introduce through plug-ins.
- ProTable encapsulates Table's common behavior to quickly flash out a beautiful CRUD interface.

🔩 Configuration

These plug-ins are available officially in the umi@3.

- Layout
- Permissions
- Internationalization
- Microservices
- Theme Switch,
- Minimalist data flow
- ....

Plug-ins are configured to use, and closing and turning on is easy. umi@3 plug-in system allows us to implement these functions in a better way, and some plug-ins are officially integrated into official presets and packaged and provided together.

### 🧬 Convention

The advantage of admanal over configuration is naturally not to mention that the success of Spring Boot makes it so much that the benefits of simplified configuration have taken millions of programmers away from the pain of complex configurations.

In the best practices, we will also practice this idea, `mock`, `models`, `pages`, `services`, 'locales' each folder is agreed to represent the relevant functions, which can greatly reduce learning costs and configuration, Make the cost of getting up very low. We don't need to know about it, we just need to know that we can run and focus on the business.

## 🛒 其他的方案

- Code style with lint [fabric](https://github.com/umijs/fabric/)
- Component development [father](https://github.com/umijs/father)
- Document station[dumi](https://github.com/umijs/dumi)
- Front-end microservices [乾坤](https://github.com/umijs/qiankun)
