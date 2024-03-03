# 快速开始

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```js
import "chaiui-vue3/dist/lib/chaiui.css"
import { Button, Tabs, Switch, Dialog } from "chaiui-vue3"
```

就可以直接使用这些组件了。

## Vue 单文件组件

代码示例：

```js
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script setup>
import { Button } from "chaiui-vue3"
</script>
```