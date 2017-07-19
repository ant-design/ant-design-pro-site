### 目录结构

- components // 组件目录
- docs // 文档目录
- scaffold // 脚手架
- site // 站点
- tool // 本地工具

### 用法

- `npm install`
- `npm run install-other`
- `npm run install-start`
  - 8001 端口是文档组件站点 ( 可直接访问脚手架站点 )
  - 8000 是脚手架站点

### 脚本命令

```bash

# 常用命令
npm run install-other # 安装工具和脚手架依赖, 在 npm install 之后运行
npm run start # 启动站点 ( 包含脚手架站点 )
npm run site # 部署站点 ( 包含脚手架 )

npm run publish-compnents # 发布组件到 npm

# 分解命令
npm run lerna

npm run bisheng-start 
npm run bisheng-build

npm run scaffold-install
npm run scaffold-start
npm run scaffold-move
npm run scaffold-build

npm run tool-install
```

### 说明

#### 整体结构

基本跟 ant.design 网站结构一致, 组件部署改为 lerna, 站点部署通过本地 tool 将脚手架生成的文件拷贝到 _site 目录下, 以便在统一站点都可访问, 统一部署。

#### 如何写文档

在 docs 目录下书写 markdown 即可, 跟 ant.design 网站一致

#### 如何写组件

在 components/src 目录下书写 markdown 和代码, 跟 ant.design 网站一致, 后续可以考虑采用工具单独调试某一个组件, 方便组件开发。

#### 如何写脚手架

可以启动整个网站, 也可以 `npm run scaffold-start`, 进入 scaffold 文件夹进行开发
