<template>
    <div class="demo">
        <h2>{{ component.__sourceCodeTitle }}</h2>
        <div class="demo-component">
            <component :is="component" />
        </div>
        <div class="demo-actions">
          <Button type="link" @click="hideCode" v-if="codeVisible">隐藏代码</Button>
          <Button type="link" @click="showCode" v-else>查看代码</Button>
        </div>
        <div class="demo-code" v-if="codeVisible">
            <pre class="language-html" v-html="html" />
        </div>
    </div>
</template>
<script setup lang="ts">
import 'prismjs/themes/prism.css';
import * as Prism from 'prismjs';
import { computed, ref } from 'vue';

const props = defineProps<{
    component: any
}>()

const codeVisible = ref(false);

const html = computed(() => {
    return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
})

const showCode = () => codeVisible.value = true;
const hideCode = () => codeVisible.value = false;
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    text-align: center;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      font-family: monospace;
      margin: 0;
    }
  }
}
</style>