---
order: 12
title: folder structure
group:
  title: Basic Usage
nav:
  title: Documents
  path: /docs
  order: 1
---

After successful initialization, a complete development framework has been generated for you. The following is the directory structure of the entire project, which provides various functions and pits covering middle and back-end development.

```bash
├── config # umi configuration, including routing, construction and other configurations
├── mock # local mock data
├── public
│ └── favicon.png # Favicon
├── src
│ ├── assets # Local static resources
│ ├── components # Business common components
│ ├── e2e # Integration test case
│ ├── layouts # General layout
│ ├── models # Global dva model
│ ├── pages # Business page entry and common templates
│ ├── services # Background interface services
│ ├── utils # tool library
│ ├── locales # Internationalized resources
│ ├── global.less # global style
│ └── global.ts # Global JS
├── tests # test tools
├── README.md
└── package.json
```

### Page code structure recommendation

In order to make the project code organization more standardized and make it easier for development to locate the relevant page component code, we have defined a set of specifications, which are currently only used as recommended guidelines, not mandatory.

```bash
src
├── components
└── pages
    ├── Welcome // No other routing components should be included under routing components. Based on this convention, routing components and non-routing components can be clearly distinguished
    | ├── components // You can do more in-depth organization for complex pages, but it is recommended not to exceed three levels
    | ├── Form.tsx
    | ├── index.tsx // code of page component
    | └── index.less // page style
    ├── Order // No other routing components should be included under routing components. Based on this agreement, routing components and non-routing components can be clearly distinguished
    | ├── index.tsx
    | └── index.less
    ├── User
    | ├── components // public component collection under group
    | ├── Login // page under group Login
    | ├── Register // page under group Register
    | └── util.ts // There can be some shared methods here, do not recommend and restrict, do your own organization depending on the business scenario
    └── * // Other page component codes
```

All routing components (components that will be configured in the routing configuration) are recommended to be flattened to the first level under pages with the big hump name (complex projects can increase the group level and place pages under the group). It is not recommended to nest routing components inside routing components-it is not convenient to distinguish whether a component is a routing component, and it is not convenient to quickly locate the routing component globally.

We recommend splitting routing components into more fine-grained components as much as possible. For components that may be used on multiple pages, we recommend putting them in src/components. For components that are only dependent on a single page, we recommend It can be maintained near the routing component folder.
