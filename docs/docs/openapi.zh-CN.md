---
order: 30
title: OpenAPI
group:
  title: 后端集成
nav:
  title: 文档
  path: /docs
  order: 1
---

在具体的开发中，联调永远都是比较麻烦的事情，尤其是前后端分离之后，后端一般都需要维护一份文档来告诉我们具体的 API 有什么功能，具体的字段信息，这些信息的维护成本还是相当高的。

## 安装插件

在 Pro 中我们引入了一个 openAPI 的插件，在脚手架中我们自带了这个功能，如果你使用的是非正式版本的 v5，可以通过下面的命令来安装这个插件。

```bash
 yarn add @umijs/plugin-openapi

 // npm
 npm i @umijs/plugin-openapi --save
```

然后在 `config/config.ts` 中配置 openAPI 的相关配置。

```tsx | pure
openAPI: {
   requestLibPath: "import { request } from 'umi'",
   // 或者使用在线的版本
   // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json",
   schemaPath: join(__dirname, 'oneapi.json'),
   mock: false,
 }
```

还需要在 package.json 的 scripts 中增加一个命令。

```ts
"openapi": "umi openapi",
```

最后我们就可以执行 `npm run openapi` 来生成相关的接口和文档。

## 如何使用

openAPI 对于后端是有一些工作量的，但是工作量远远小于维护一个文档的成本，如果维护一个文档，那么每次更新完代码就需要重新编辑一遍文档。而使用 openAPI 的方式只要接入 swagger 然后做一些配置就可以生成一个界面，如果你使用的是 python 或者是 java，那么接入会变得异常简单。详细的接入步骤可以看 [swagger](https://swagger.io/) 的官方文档。这里主要介绍前端如何使用。

后端接入完成 swagger 之后，我们可以访问 swagger 生成的文档，一般来说都是 `http://localhost:8080/swagger-ui.html`，访问页面我们可以拿到一个 openapi 的规范文件。

![swagger-ui](https://gw.alipayobjects.com/zos/antfincdn/c0uvca5Mx4/184D8866-6067-43DC-8395-0DC031D1A873.png)

我们需要复制 swagger 的 url 到 openapi 的配置中，以 pro 的 openapi 为例，我们配置一下：

```tsx | pure
openAPI: {
   requestLibPath: "import { request } from 'umi'",
   // 这里使用 copy 的 url
   schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json",
   mock: false,
 }
```

这里有两个配置 `requestLibPath` 和 `mock` 需要注意一下。

### requestLibPath

`requestLibPath` 可以如何使用 `request`, 一般而言我们推荐直接使用 umi 的 request，但是有些时候需要自定义，可以修改 `requestLibPath` 的配置，比如要使用 utils 的中的 request，我们可以这么配置:

```tsx | pure
openAPI: {
   requestLibPath: "import request from '@utils/request'",
   // 这里使用 copy 的 url
   schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json",
   mock: false,
 }
```

当然需要保证 `schemaPath` 配置引入 request，不然生成的代码可能无法执行。生成的代码如下：

```tsx | pure
// requestLibPath 的配置
import { request } from 'umi';

/** 获取规则列表 GET /api/rule */
export async function rule(params: API.PageParams, options?: { [key: string]: any }) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
```

注释也会自动载入，省去了我们查文档的麻烦，同时在 serves 中我们也会生成 `typings.d.ts` 文件，里面有 openapi 中包含所有定义。`API.RuleList` 就是后端需要返回的数据的描述，例子如下:

```tsx | pure
declare namespace API {
  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };
}
```

这样我们就可以配合 ProTable，快速搞个 CRUD。

```tsx | pure
import { rule } from '@/services/ant-design-pro/rule';

// 两个泛型，第一个是列表项的类型定义，第二个是查询参数的定义。
// 🥳 一个表格已经生成了
<ProTable<API.RuleListItem, API.PageParams> request={rule} columns={columns} />;
```

### mock

`mock` 就比较简单了，配置为 true 之后会自动生成一些 mock 的文件，虽然质量不如我们人肉写的，但是在开发中使用已经没问题了。生成的 mock 文件在项目根路径下的 mock 文件中,生成的 mock 数据每次都不同，如果要调试可以随意修改，只有执行 `npm run openapi` 才会进行修改。

```tsx | pure
import { Request, Response } from 'express';

export default {
  'GET /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      data: [
        {
          key: 86,
          disabled: false,
          href: 'https://ant.design',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
          name: '罗秀兰',
          owner: 'Garcia',
          desc: '斯达种整消建难风可却再日等果明此。',
          callNo: 96,
          status: 89,
          updatedAt: 'PpVmJ50',
          createdAt: 'FbRG',
          progress: 100,
        },
      ],
      total: 98,
      success: false,
    });
  },
};
```

### 文档

在开发中我们不能只看代码，也是需要看文档的。Pro 中也默认集成了以下 `swagger-ui` ，提供了一个界面可以读取当前项目中的 openapi 配置，我们可以在 Layout 右下角找到一个快捷操作:

![options](https://gw.alipayobjects.com/zos/antfincdn/htZYO3ojsm/957C1E97-466B-48aa-B107-FA7C4EFF6971.png)

这个操作只在开发环境有效。如果是低版本可以访问 `/umi/plugin/openapi` 来查看，最后的效果应该是这样的:

![doc](https://gw.alipayobjects.com/zos/antfincdn/htZYO3ojsm/957C1E97-466B-48aa-B107-FA7C4EFF6971.png)
