---
order: 0
title: Basic
---

典型结果页面。

````jsx
import { DescriptionList } from 'ant-design-pro';

const { Term, Description } = DescriptionList;

ReactDOM.render(
  <div>
    <DescriptionList title="title">
      <Term>Firefox</Term>
      <Description>
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </Description>
      <Term>Firefox</Term>
      <Description>
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </Description>
      <Term>Firefox</Term>
      <Description>
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </Description>
    </DescriptionList>

    <DescriptionList title="title" layout="vertical">
      <Term>Firefox</Term>
      <Description>
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </Description>
      <Term>Firefox</Term>
      <Description>
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </Description>
      <Term>Firefox</Term>
      <Description>
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </Description>
    </DescriptionList>
  </div>
, mountNode);
````
